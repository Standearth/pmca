// The next members' organizing call. Used by /organizing-call and the homepage banner.
// `time` shows next to the date once it's set, e.g. "5pm PT / 8pm ET".
// The banner hides itself once `endsAt` has passed.
// `live: false` hides the banner, menu and homepage links, and keeps the page out of search;
// the page still works at its URL for previewing.

export default {
	live: false,
	dateLabel: "Wednesday, December 9",
	shortDate: "Dec 9",
	time: "",
	endsAt: "2026-12-10T08:00:00Z"
};
