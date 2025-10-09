const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRS8H-swB-iWOqUboB_WynsaJaQgPdpfde28vCciioq98LWSytyFR0UVnd6G8sOR9EMCB7EZ1vb7qwm/pub?gid=0&single=true&output=csv';
const CACHE_KEY = 'prime_stories_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

/**
 * Parse CSV text into array of objects
 */
function parseCSV(csvText) {
	const lines = csvText.trim().split('\n');
	const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
	const stories = [];
	
	let currentRow = [];
	let inQuotes = false;
	let currentField = '';
	
	for (let i = 1; i < lines.length; i++) {
		const line = lines[i];
		currentRow = [];
		currentField = '';
		inQuotes = false;
		
		for (let j = 0; j < line.length; j++) {
			const char = line[j];
			
			if (char === '"') {
				if (inQuotes && line[j + 1] === '"') {
					// Escaped quote
					currentField += '"';
					j++; // Skip next quote
				} else {
					// Toggle quote state
					inQuotes = !inQuotes;
				}
			} else if (char === ',' && !inQuotes) {
				// Field separator
				currentRow.push(currentField.trim());
				currentField = '';
			} else {
				currentField += char;
			}
		}
		
		// Add the last field
		currentRow.push(currentField.trim());
		
		// Create story object
		if (currentRow.length >= 2) {
			const story = currentRow[0].replace(/"/g, '').trim();
			const name = currentRow[1].replace(/"/g, '').trim();
			
			if (story) {
				stories.push({
					story,
					name: name || null,
					id: Math.random().toString(36).substr(2, 9)
				});
			}
		}
	}
	
	return stories;
}

/**
 * Fetch stories with caching
 */
export async function loadStories() {
	try {
		// Check cache first
		const cached = localStorage.getItem(CACHE_KEY);
		if (cached) {
			const { data, timestamp } = JSON.parse(cached);
			const isExpired = Date.now() - timestamp > CACHE_DURATION;
			
			if (!isExpired && data && data.length > 0) {
				return data;
			}
		}
	} catch (error) {
		console.warn('Error reading from cache:', error);
	}
	
	try {
		// Fetch fresh data
		const response = await fetch(CSV_URL);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		const csvText = await response.text();
		const stories = parseCSV(csvText);
		
		// Cache the data
		try {
			localStorage.setItem(CACHE_KEY, JSON.stringify({
				data: stories,
				timestamp: Date.now()
			}));
		} catch (error) {
			console.warn('Error saving to cache:', error);
		}
		
		return stories;
	} catch (error) {
		console.error('Error fetching stories:', error);
		
		// Try to return cached data even if expired
		try {
			const cached = localStorage.getItem(CACHE_KEY);
			if (cached) {
				const { data } = JSON.parse(cached);
				if (data && data.length > 0) {
					console.warn('Using expired cached data due to fetch error');
					return data;
				}
			}
		} catch (cacheError) {
			console.error('Error reading expired cache:', cacheError);
		}
		
		// Fallback to empty array
		return [];
	}
}

/**
 * Shuffle array randomly
 */
export function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

/**
 * Clear stories cache
 */
export function clearStoriesCache() {
	try {
		localStorage.removeItem(CACHE_KEY);
	} catch (error) {
		console.warn('Error clearing cache:', error);
	}
}
