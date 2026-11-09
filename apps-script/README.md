# Delivery Diary: Google Sheet and Apps Script endpoint

The /diary form posts each log to an Apps Script web app, which validates it, filters spam and appends a row to a Google Sheet. The same web app serves the site's live count and electric share.

## Set up (about 15 minutes, once)

1. Create a Google Sheet named **Delivery Diary** in the campaign's shared drive. Share it with the 2–3 staff who look after the Diary. Nobody else: it holds emails and postal codes.
2. In the Sheet, open **Extensions → Apps Script**.
3. Replace the contents of `Code.gs` with [Code.gs](Code.gs).
4. **Project Settings → Show "appsscript.json" manifest file in editor**, then replace that file with [appsscript.json](appsscript.json). This sets the time zone to US/Eastern.
5. Choose `setup` in the function menu and click **Run**. Approve the permissions prompt. It creates the **Logs**, **Settings** and **Rejected** tabs.
6. **Deploy → New deployment → Web app.** Execute as: **Me**. Who has access: **Anyone**. Copy the URL ending in `/exec`.
7. Open that URL in a browser. You should see `{"count":0,"electricShare":null}`.
8. Put the URL in `src/data/diary.json` as `forms.endpoint`, then build and deploy the site. The form leaves test mode at that point.

**Changing the script later:** use **Deploy → Manage deployments → Edit → Version: New version**. A new deployment gets a new URL and the site would stop saving.

## Tabs

| Tab | What it holds | Edit by hand? |
| --- | --- | --- |
| Logs | One row per accepted log, stamped with the server time | Never. Use the menu to delete a member |
| Settings | The spam and display thresholds | Yes |
| Rejected | Spam and invalid submissions, with the reason | No; check it if real logs seem to go missing |
| Summary, Opt-ins, Public export | Built by the **Delivery Diary** menu | No, rebuilt each time |

## Spam protection

- **Hidden field:** a field people never see. Bots that fill it are dropped.
- **Time check:** a form submitted less than `min_seconds_to_submit` (3) seconds after loading is dropped.
- **Daily cap:** more than `max_logs_per_email_per_day` (30) logs from one email in a day are dropped.
- **Required fields:** only the postal code. Name and email are optional; logs without an email are counted in the totals but aren't covered by the daily cap. Ticking "Keep me updated" makes email required and is stored as `opt_in` (yes/no).
- **Option check:** any answer that isn't one of the form's options is rejected. Typed text has spreadsheet formulas defused.

Spam gets a normal-looking reply, so bots can't tell they were caught. Everything dropped lands in **Rejected** with its reason.

## Numbers for staff

**Delivery Diary → Show current numbers** builds a Summary tab with all-time and last-7-day counts. It's for the team only; the site shows just the logged count and the electric share.

The electric share updates itself. It stays hidden until `min_vehicles_for_share` (25) Amazon vehicles are logged. It counts Spotter logs plus the Diary's "What delivered it?", and leaves out "Not sure", "Didn't see" and USPS/UPS.

## Adding opt-ins to EN

1. **Delivery Diary → Build opt-in list.** One row per email that ticked "Keep me updated on this campaign", with the latest name, postal code and country.
2. **File → Download → CSV**, then import into EN with campaign opt-in. **Only people on this list may be subscribed:** logging alone is not consent to email.

## Requests and reports

- **Deletion:** Delivery Diary → **Delete a member's logs**, enter the email. Also remove them from EN if they were imported as an opt-in.
- **Anonymised dataset**, for sharing the data beyond the team: Delivery Diary → **Build anonymised export**. It has no names or emails, postal codes cut to 3 characters, and dates without times. Free-text comments are left out too, since people may write personal details in them; read them in the Logs tab (`comment` column).
- **Evidence rule:** publish counts, never rates. Members choose what to log.

## Keep in sync

The answer options in `Code.gs` (`OPTIONS`) must match `src/data/diaryQuestions.js`. Change both together, or logs with the new wording will be rejected.
