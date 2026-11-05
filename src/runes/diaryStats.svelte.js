import diary from "$data/diary.json";

const CACHE_KEY = "pmca-diary-stats";
// The endpoint caches for 10 minutes too, so polling faster gains nothing.
const CACHE_MS = 10 * 60 * 1000;

/**
 * Logged count and electric share, shared by every page.
 * Starts from the fallbacks in diary.json and switches to the endpoint's live values.
 */
export const diaryStats = $state({
	count: diary.loggedFallback,
	electricShare: diary.electricShare.total ? { ...diary.electricShare } : null,
	live: false
});

let loading = null;

function apply(data) {
	diaryStats.count = Number(data.count) || 0;
	diaryStats.electricShare = data.electricShare?.total ? data.electricShare : null;
	diaryStats.live = true;
}

export function loadDiaryStats() {
	if (loading || !diary.forms.endpoint) return loading;
	loading = (async () => {
		try {
			const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
			if (cached && Date.now() - cached.at < CACHE_MS) return apply(cached.data);
		} catch {
			// storage blocked; fetch instead
		}
		try {
			const response = await fetch(diary.forms.endpoint);
			if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
			const data = await response.json();
			if (!Number.isFinite(Number(data.count))) throw new Error("No count in response");
			apply(data);
			try {
				localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
			} catch {
				// storage blocked; nothing to cache
			}
		} catch (error) {
			console.warn("Diary stats fetch failed; showing fallbacks:", error);
		}
	})();
	return loading;
}

/** "11 of 94 Amazon vehicles members logged were electric.", or null before there's enough data. */
export function electricShareText(share) {
	if (!share?.total) return null;
	return `${Number(share.electric).toLocaleString()} of ${Number(share.total).toLocaleString()} Amazon vehicles members logged were electric.`;
}
