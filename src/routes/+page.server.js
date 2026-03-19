import { parseCSV } from '$utils/loadStories.js';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRS8H-swB-iWOqUboB_WynsaJaQgPdpfde28vCciioq98LWSytyFR0UVnd6G8sOR9EMCB7EZ1vb7qwm/pub?gid=0&single=true&output=csv';

export async function load() {
	let ssrStories = [];

	try {
		const response = await fetch(CSV_URL);
		if (response.ok) {
			const csvText = await response.text();
			const allStories = parseCSV(csvText);
			// Take the first 6 stories for server-side rendering
			ssrStories = allStories.slice(0, 6);
		}
	} catch (error) {
		console.warn('SSR stories fetch failed:', error);
	}

	return { ssrStories };
}
