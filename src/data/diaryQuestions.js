// Delivery Diary and EV Spotter questions. `name` is the key each answer is sent under.

export const SPLIT_STILL_COMING = "No, more still coming";
export const WHERE_ELSEWHERE = "Somewhere else";

export const VEHICLE_OPTIONS = [
	"Branded electric van",
	"Branded gas/diesel van",
	"Unmarked personal car making Amazon deliveries",
	"USPS/UPS/other",
	"Didn't see",
	"Not sure"
];

// The Spotter is only about Amazon vehicles someone actually saw.
export const SPOTTER_VEHICLE_OPTIONS = VEHICLE_OPTIONS.filter(
	(o) => o !== "USPS/UPS/other" && o !== "Didn't see"
);

// `optional: true` questions can be skipped; every other question in a list is required.
export const diaryFast = [
	{
		name: "packaging",
		label: "How did it arrive?",
		options: ["Cardboard box", "Padded paper mailer", "Plastic/poly mailer", "Item in its own packaging", "Several of these"]
	},
	{
		name: "box_fit",
		label: "Was the box about right for what was inside?",
		options: ["About right", "Somewhat oversized", "Absurdly oversized"]
	},
	{ name: "vehicle", label: "What delivered it?", options: VEHICLE_OPTIONS, optional: true, vanHelp: true },
	{
		name: "split_status",
		label: "Did everything in this order come together?",
		options: ["Yes", SPLIT_STILL_COMING, "No, part already arrived", "Single-item order"],
		optional: true
	}
];

export const groupedSelected = {
	name: "grouped_selected",
	label: "Did you choose a grouped or slower delivery option at checkout?",
	options: ["Yes", "No", "Don't remember"]
};

export const diaryExpanded = [
	{
		name: "inside",
		label: "Anything inside?",
		options: ["Plastic air pillows", "Bubble wrap", "Paper filler", "Nothing", "Other"]
	}
];

export const spotter = [
	{ name: "vehicle", label: "What did you see?", options: SPOTTER_VEHICLE_OPTIONS, vanHelp: true },
	{ name: "sighting_where", label: "Where?", options: ["Near home", WHERE_ELSEWHERE] }
];

export const sightingWhen = {
	name: "sighting_when",
	label: "When?",
	options: ["Today", "This week", "Earlier"]
};

export const COUNTRIES = ["United States", "Canada", "Other"];
