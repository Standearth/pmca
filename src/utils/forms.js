/*
 * Submission for the site's own forms (currently the Delivery Diary).
 *
 * Every form POSTs one JSON object to diary.json → forms.endpoint:
 *
 *   {
 *     "form": "diary",
 *     "ref": "<random id per form load>",      // drop repeats: double taps, retries
 *     "submitted_at_client": "<ISO time>",     // the endpoint should stamp its own time too
 *     "page": "/diary/",
 *     "utm": { "source", "medium", "campaign", "content", "term" },
 *     "supporter": { "email", "first_name", "postal_code", "country" },
 *     "answers": { ...form-specific fields },
 *     "trap": "",                              // hidden field; anything in it means a bot
 *     "elapsed_ms": 8200                       // time from form load to submit
 *   }
 *
 * Without an endpoint the forms run in test mode: they behave normally and tell the
 * visitor nothing was saved.
 *
 * The body is sent as text/plain so the browser skips the CORS preflight; most form
 * backends (Apps Script, serverless functions) read it with JSON.parse on the raw body.
 */
import diary from "$data/diary.json";

const SUPPORTER_KEY = "pmca-supporter";
const UTM_KEY = "pmca-utm";
const UTM_FIELDS = ["source", "medium", "campaign", "content", "term"];

export function newRef() {
	if (window.crypto?.randomUUID) return window.crypto.randomUUID();
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** UTM parameters from this visit, kept for the session so they survive navigating to /diary. */
export function getUtm() {
	const params = new URLSearchParams(window.location.search);
	const fromUrl = Object.fromEntries(
		UTM_FIELDS.map((f) => [f, params.get(`utm_${f}`) || ""]).filter(([, v]) => v)
	);
	try {
		if (Object.keys(fromUrl).length) {
			sessionStorage.setItem(UTM_KEY, JSON.stringify(fromUrl));
			return fromUrl;
		}
		return JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}");
	} catch {
		return fromUrl;
	}
}

/** The member's details, remembered on this device so they aren't asked every log. */
export function loadSupporter() {
	try {
		return JSON.parse(localStorage.getItem(SUPPORTER_KEY) || "null");
	} catch {
		return null;
	}
}

export function saveSupporter(supporter) {
	try {
		localStorage.setItem(SUPPORTER_KEY, JSON.stringify(supporter));
	} catch {
		// storage blocked; the member types their details again next time
	}
}

export function forgetSupporter() {
	try {
		localStorage.removeItem(SUPPORTER_KEY);
	} catch {
		// nothing stored
	}
}

/**
 * Send one form. Resolves { ok, preview } or throws with a message fit to show.
 */
export async function submitForm(form, { ref, supporter, answers, trap = "", startedAt }) {
	const payload = {
		form,
		ref,
		submitted_at_client: new Date().toISOString(),
		page: window.location.pathname,
		utm: getUtm(),
		supporter,
		answers,
		trap,
		elapsed_ms: startedAt ? Date.now() - startedAt : null
	};

	if (!diary.forms.endpoint) {
		console.info("Test mode submission (not saved):", payload);
		return { ok: true, preview: true };
	}

	let response;
	try {
		response = await fetch(diary.forms.endpoint, {
			method: "POST",
			headers: { "Content-Type": "text/plain;charset=utf-8" },
			body: JSON.stringify(payload)
		});
	} catch {
		throw new Error("We couldn't reach the server. Check your connection and try again.");
	}
	// Apps Script always answers 200, so the verdict is in the body.
	let result = {};
	try {
		result = await response.json();
	} catch {
		// unreadable body: judge by status alone
	}
	if (!response.ok || result.ok === false) throw new Error("Something went wrong saving that. Please check your answers and try again.");
	return { ok: true, preview: false };
}
