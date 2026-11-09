/**
 * Delivery Diary endpoint: Google Apps Script web app bound to the Delivery Diary Sheet.
 *
 * POST  ← the /diary form (JSON sent as text/plain). Validates, filters spam, stamps the
 *         server time, drops repeated refs and appends one row to "Logs".
 * GET   → {count, electricShare} for the site's counters.
 *
 * Setup and the opt-in export: apps-script/README.md.
 */

// ---- Must match src/data/diaryQuestions.js --------------------------------------------
const OPTIONS = {
	packaging: ['Cardboard box', 'Padded paper mailer', 'Plastic/poly mailer', 'Item in its own packaging', 'Several of these'],
	split_status: ['Yes', 'No, more still coming', 'No, part already arrived', 'Single-item order'],
	box_fit: ['About right', 'Somewhat oversized', 'Absurdly oversized'],
	grouped_selected: ['Yes', 'No', "Don't remember"],
	vehicle: [
		'Branded electric van',
		'Branded gas/diesel van',
		'Unmarked personal car making Amazon deliveries',
		'USPS/UPS/other',
		"Didn't see",
		'Not sure'
	],
	inside: ['Plastic air pillows', 'Bubble wrap', 'Paper filler', 'Nothing', 'Other'],
	sighting_where: ['Near home', 'Somewhere else'],
	sighting_when: ['Today', 'This week', 'Earlier'],
	country: ['United States', 'Canada', 'Other']
};
const REQUIRED = {
	diary: ['packaging', 'box_fit'],
	spotter: ['vehicle', 'sighting_where', 'sighting_when']
};
// The electric share counts Amazon vehicles only; "Not sure", "Didn't see" and other carriers are left out.
const ELECTRIC = 'Branded electric van';
const AMAZON_VEHICLES = [ELECTRIC, 'Branded gas/diesel van', 'Unmarked personal car making Amazon deliveries'];
// -----------------------------------------------------------------------------------------

const COLUMNS = [
	'received_at', 'ref', 'log_type',
	'packaging', 'split_status', 'box_fit', 'grouped_selected', 'vehicle', 'inside',
	'sighting_where', 'sighting_location', 'sighting_when',
	'email', 'first_name', 'postal_code', 'country',
	'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
	'page', 'submitted_at_client',
	'opt_in', 'comment'
];
const SETTINGS_DEFAULTS = [
	['min_vehicles_for_share', 25, 'Hide the electric share until this many Amazon vehicles are logged'],
	['max_logs_per_email_per_day', 30, 'Logs above this from one email in a day are rejected as spam'],
	['min_seconds_to_submit', 3, 'Forms submitted faster than this are treated as bots']
];
const STATS_CACHE_KEY = 'stats-v1';
const STATS_CACHE_SECONDS = 600;

// ---- Web app ------------------------------------------------------------------------------

function doPost(e) {
	let payload;
	try {
		payload = JSON.parse(e.postData.contents);
	} catch (err) {
		return json_({ ok: false, error: 'bad_json' });
	}

	const problem = validate_(payload);
	if (problem) {
		reject_(problem, payload);
		// Spam gets a normal-looking success so bots learn nothing; real input errors get told.
		return json_(problem.spam ? { ok: true } : { ok: false, error: problem.reason });
	}

	const lock = LockService.getScriptLock();
	lock.waitLock(20000);
	try {
		const sheet = sheet_('Logs');
		if (isDuplicate_(sheet, payload.ref)) return json_({ ok: true, duplicate: true });
		// Only logs with an email can be capped; anonymous logs rely on the spam trap.
		if (payload.supporter.email && overDailyCap_(payload.supporter.email)) {
			reject_({ reason: 'daily_cap', spam: true }, payload);
			return json_({ ok: true });
		}
		sheet.appendRow(toRow_(payload));
		CacheService.getScriptCache().put('ref:' + payload.ref, '1', 21600);
	} finally {
		lock.releaseLock();
	}
	CacheService.getScriptCache().remove(STATS_CACHE_KEY);
	return json_({ ok: true });
}

function doGet() {
	const cache = CacheService.getScriptCache();
	const cached = cache.get(STATS_CACHE_KEY);
	if (cached) return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);

	const stats = computeStats_();
	const body = JSON.stringify(stats);
	cache.put(STATS_CACHE_KEY, body, STATS_CACHE_SECONDS);
	return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JSON);
}

// ---- Validation and spam ------------------------------------------------------------------

// Spam trap: a hidden field people never see, and a minimum time to fill the form.
function spamCheck_(p) {
	if (p.trap) return { reason: 'honeypot', spam: true };
	const minMs = Number(setting_('min_seconds_to_submit')) * 1000;
	if (!(Number(p.elapsed_ms) >= minMs)) return { reason: 'too_fast', spam: true };
	return null;
}

function validate_(p) {
	if (!p || p.form !== 'diary') return { reason: 'unknown_form' };
	const spam = spamCheck_(p);
	if (spam) return spam;

	if (!/^[\w-]{8,64}$/.test(String(p.ref || ''))) return { reason: 'bad_ref' };

	// Only the postal code is required; name and email are optional.
	const s = p.supporter || (p.supporter = {});
	const email = String(s.email || '').trim();
	if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { reason: 'bad_email' };
	s.email = email;
	if (!clean_(s.postal_code, 10)) return { reason: 'missing_postal_code' };
	if (s.country && OPTIONS.country.indexOf(s.country) === -1) return { reason: 'bad_country' };
	if (s.opt_in === true && !email) return { reason: 'opt_in_without_email' };

	const a = p.answers || {};
	const type = a.log_type;
	if (!REQUIRED[type]) return { reason: 'bad_log_type' };
	for (const field of REQUIRED[type]) {
		if (!a[field]) return { reason: 'missing_' + field };
	}
	for (const field of Object.keys(OPTIONS)) {
		if (field === 'country' || !a[field]) continue;
		if (OPTIONS[field].indexOf(a[field]) === -1) return { reason: 'bad_' + field };
	}
	if (type === 'spotter' && a.sighting_where === 'Somewhere else' && !clean_(a.sighting_location, 40)) {
		return { reason: 'missing_sighting_location' };
	}
	return null;
}

function isDuplicate_(sheet, ref) {
	if (CacheService.getScriptCache().get('ref:' + ref)) return true;
	// The cache can be evicted, so also check the most recent rows.
	const last = sheet.getLastRow();
	if (last < 2) return false;
	const start = Math.max(2, last - 499);
	const refs = sheet.getRange(start, 2, last - start + 1, 1).getValues();
	return refs.some((r) => r[0] === ref);
}

function overDailyCap_(email) {
	const cache = CacheService.getScriptCache();
	const day = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
	const key = 'cap:' + day + ':' + String(email).trim().toLowerCase();
	const count = Number(cache.get(key) || 0) + 1;
	cache.put(key, String(count), 86400);
	return count > Number(setting_('max_logs_per_email_per_day'));
}

function reject_(problem, payload) {
	const sheet = sheet_('Rejected');
	sheet.appendRow([new Date(), problem.reason, String(JSON.stringify(payload || {})).slice(0, 500)]);
}

// ---- Rows ---------------------------------------------------------------------------------

function toRow_(p) {
	const a = p.answers;
	const s = p.supporter;
	const u = p.utm || {};
	const values = {
		received_at: new Date(),
		ref: p.ref,
		log_type: a.log_type,
		packaging: a.packaging,
		split_status: a.split_status,
		box_fit: a.box_fit,
		grouped_selected: a.grouped_selected,
		vehicle: a.vehicle,
		inside: a.inside,
		sighting_where: a.sighting_where,
		sighting_location: a.sighting_location,
		sighting_when: a.sighting_when,
		email: String(s.email || '').trim().toLowerCase(),
		first_name: s.first_name,
		postal_code: String(s.postal_code).trim().toUpperCase(),
		country: s.country,
		utm_source: u.source,
		utm_medium: u.medium,
		utm_campaign: u.campaign,
		utm_content: u.content,
		utm_term: u.term,
		page: p.page,
		submitted_at_client: p.submitted_at_client,
		opt_in: s.opt_in === true ? 'yes' : 'no',
		comment: a.comment
	};
	return COLUMNS.map((c) => (c === 'received_at' ? values[c] : clean_(values[c], c === 'comment' ? 500 : 200)));
}

// Trims, caps length and defuses spreadsheet formulas (=, +, -, @) in free text.
function clean_(value, max) {
	let v = String(value == null ? '' : value).trim().slice(0, max);
	if (/^[=+\-@]/.test(v)) v = "'" + v;
	return v;
}

// ---- Stats --------------------------------------------------------------------------------

function computeStats_() {
	const rows = logRows_();
	const vehicleIdx = COLUMNS.indexOf('vehicle');
	let electric = 0;
	let amazon = 0;
	rows.forEach((r) => {
		if (AMAZON_VEHICLES.indexOf(r[vehicleIdx]) !== -1) amazon++;
		if (r[vehicleIdx] === ELECTRIC) electric++;
	});
	const minVehicles = Number(setting_('min_vehicles_for_share'));
	return {
		count: rows.length,
		electricShare: amazon >= minVehicles ? { electric: electric, total: amazon } : null
	};
}

function logRows_() {
	const sheet = sheet_('Logs');
	const last = sheet.getLastRow();
	if (last < 2) return [];
	return sheet.getRange(2, 1, last - 1, COLUMNS.length).getValues();
}

// ---- Menu tools ---------------------------------------------------------------------------

function onOpen() {
	SpreadsheetApp.getUi()
		.createMenu('Delivery Diary')
		.addItem('Show current numbers', 'currentNumbers')
		.addItem('Build opt-in list (for EN import)', 'optInList')
		.addItem('Build anonymised export', 'anonymisedExport')
		.addItem("Delete a member's logs", 'deleteMember')
		.addSeparator()
		.addItem('Clear the site cache', 'clearStatsCache')
		.addToUi();
}

/** Staff view of the totals: all time, and the last 7 days. */
function currentNumbers() {
	const rows = logRows_();
	const col = (name) => COLUMNS.indexOf(name);
	const weekAgo = new Date(Date.now() - 7 * 86400000);
	const summarise = (subset) => {
		const diary = subset.filter((r) => r[col('log_type')] === 'diary');
		const amazon = subset.filter((r) => AMAZON_VEHICLES.indexOf(r[col('vehicle')]) !== -1);
		return [
			subset.length,
			diary.length,
			subset.length - diary.length,
			diary.filter((r) => r[col('split_status')] === 'No, more still coming' || r[col('split_status')] === 'No, part already arrived').length,
			diary.filter((r) => r[col('grouped_selected')] === 'Yes').length,
			diary.filter((r) => r[col('box_fit')] === 'Absurdly oversized').length,
			diary.filter((r) => r[col('packaging')] === 'Plastic/poly mailer').length,
			amazon.filter((r) => r[col('vehicle')] === ELECTRIC).length,
			amazon.length,
			new Set(subset.map((r) => r[col('email')]).filter(Boolean)).size,
			subset.filter((r) => !r[col('email')]).length
		];
	};
	const labels = [
		'All logs', 'Diary logs', 'Spotter logs', 'Orders that arrived split',
		'Split orders where the member chose grouped/slower delivery', 'Absurdly oversized boxes',
		'Plastic/poly mailers', 'Electric Amazon vehicles', 'All Amazon vehicles (electric share denominator)',
		'Members who logged (with an email)',
		'Logs without an email'
	];
	const all = summarise(rows);
	const week = summarise(rows.filter((r) => r[col('received_at')] >= weekAgo));
	const sheet = sheet_('Summary', true);
	sheet.clear();
	sheet.appendRow(['Updated', new Date(), '']);
	sheet.appendRow(['Measure', 'All time', 'Last 7 days']);
	labels.forEach((label, i) => sheet.appendRow([label, all[i], week[i]]));
	sheet.appendRow(['', '', '']);
	sheet.appendRow(['Counts only. Never turn these into rates: members choose what to log.', '', '']);
	sheet.getRange('A2:C2').setFontWeight('bold');
	sheet.autoResizeColumns(1, 3);
	SpreadsheetApp.getActive().setActiveSheet(sheet);
}

/** Everyone who ticked "Keep me updated", one row per email (latest details win), for EN import. */
function optInList() {
	const rows = logRows_();
	const col = (name) => COLUMNS.indexOf(name);
	const byEmail = {};
	rows.forEach((r) => {
		const email = r[col('email')];
		if (!email || String(r[col('opt_in')]) !== 'yes') return;
		byEmail[email] = [email, r[col('first_name')], r[col('postal_code')], r[col('country')], r[col('received_at')]];
	});
	const sheet = sheet_('Opt-ins', true);
	sheet.clear();
	sheet.appendRow(['email', 'first_name', 'postal_code', 'country', 'opted_in_at']);
	const out = Object.keys(byEmail).map((email) => byEmail[email]);
	if (out.length) sheet.getRange(2, 1, out.length, 5).setValues(out);
	SpreadsheetApp.getActive().setActiveSheet(sheet);
	SpreadsheetApp.getUi().alert(out.length + ' opted-in supporter(s). File > Download > CSV, then import into EN.');
}

/** No names or emails; postal codes cut to 3 characters (ZIP3 / FSA); time cut to the date. */
function anonymisedExport() {
	const keep = ['received_at', 'log_type', 'packaging', 'split_status', 'box_fit', 'grouped_selected', 'vehicle', 'inside', 'sighting_where', 'sighting_when', 'postal_code', 'country'];
	const rows = logRows_();
	const sheet = sheet_('Public export', true);
	sheet.clear();
	sheet.appendRow(['date', 'log_type', 'packaging', 'split_status', 'box_fit', 'grouped_selected', 'vehicle', 'inside', 'sighting_where', 'sighting_when', 'postal_area', 'country']);
	const out = rows.map((r) =>
		keep.map((name) => {
			const v = r[COLUMNS.indexOf(name)];
			if (name === 'received_at') return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
			if (name === 'postal_code') return String(v).replace(/\s/g, '').slice(0, 3);
			return v;
		})
	);
	if (out.length) sheet.getRange(2, 1, out.length, keep.length).setValues(out);
	SpreadsheetApp.getActive().setActiveSheet(sheet);
}

function deleteMember() {
	const ui = SpreadsheetApp.getUi();
	const answer = ui.prompt('Delete a member', 'Email address to delete every log for:', ui.ButtonSet.OK_CANCEL);
	if (answer.getSelectedButton() !== ui.Button.OK) return;
	const email = answer.getResponseText().trim().toLowerCase();
	if (!email) return;
	const sheet = sheet_('Logs');
	const emailCol = COLUMNS.indexOf('email') + 1;
	const values = sheet.getLastRow() > 1 ? sheet.getRange(2, emailCol, sheet.getLastRow() - 1, 1).getValues() : [];
	let deleted = 0;
	for (let i = values.length - 1; i >= 0; i--) {
		if (String(values[i][0]).toLowerCase() === email) {
			sheet.deleteRow(i + 2);
			deleted++;
		}
	}
	clearStatsCache();
	ui.alert(deleted + ' log(s) deleted for ' + email + '. Also delete them from the Opt-ins tab and EN if imported.');
}

function clearStatsCache() {
	CacheService.getScriptCache().remove(STATS_CACHE_KEY);
}

// ---- Setup and helpers --------------------------------------------------------------------

/** Run once from the editor: creates the tabs, headers and settings. Safe to re-run. */
function setup() {
	const logs = sheet_('Logs', true);
	if (logs.getLastRow() === 0) {
		logs.appendRow(COLUMNS);
		logs.setFrozenRows(1);
		logs.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm:ss');
	}
	// Columns added after the sheet was first set up (e.g. opt_in) get their header filled in.
	logs.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS]).setFontWeight('bold');
	const settings = sheet_('Settings', true);
	if (settings.getLastRow() === 0) {
		settings.appendRow(['key', 'value', 'notes']);
		SETTINGS_DEFAULTS.forEach((row) => settings.appendRow(row));
		settings.setFrozenRows(1);
		settings.getRange('A1:C1').setFontWeight('bold');
	}
	const rejected = sheet_('Rejected', true);
	if (rejected.getLastRow() === 0) rejected.appendRow(['received_at', 'reason', 'payload (first 500 characters)']);
}

function sheet_(name, create) {
	const ss = SpreadsheetApp.getActive();
	let sheet = ss.getSheetByName(name);
	if (!sheet) {
		if (!create && name !== 'Rejected') throw new Error('Missing tab "' + name + '". Run setup() first.');
		sheet = ss.insertSheet(name);
	}
	return sheet;
}

function setting_(key) {
	const values = sheet_('Settings').getDataRange().getValues();
	for (let i = 1; i < values.length; i++) {
		if (values[i][0] === key) return values[i][1];
	}
	const fallback = SETTINGS_DEFAULTS.find((row) => row[0] === key);
	return fallback ? fallback[1] : '';
}

function json_(obj) {
	return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
