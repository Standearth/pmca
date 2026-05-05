import { sanityClient, portableTextToPlainText } from '$utils/sanity.js';

const CACHE_KEY = 'pmca_updates_cache';
//const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const CACHE_DURATION = 0;

const ALL_UPDATES_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  image,
  body
}`;

const SINGLE_UPDATE_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  image,
  body
}`;

const ALL_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)].slug.current`;

/**
 * Fetch all updates from Sanity with localStorage caching
 */
export async function loadUpdates() {
	// Try to read from cache first
	try {
		const cached = localStorage.getItem(CACHE_KEY);
		if (cached) {
			const { data, timestamp } = JSON.parse(cached);
			const isExpired = Date.now() - timestamp > CACHE_DURATION;
			if (!isExpired && data && data.length > 0) {
				return data;
			}
		}
	} catch (error) {
		console.warn('Error reading updates from cache:', error);
	}

	// Fetch fresh data from Sanity
	try {
		const updates = await sanityClient.fetch(ALL_UPDATES_QUERY);

		// Enrich with a plain-text excerpt
		const enriched = updates.map(u => ({
			...u,
			excerpt: portableTextToPlainText(u.body, 180)
		}));

		// Cache the result
		try {
			localStorage.setItem(
				CACHE_KEY,
				JSON.stringify({ data: enriched, timestamp: Date.now() })
			);
		} catch (err) {
			console.warn('Error saving updates to cache:', err);
		}

		return enriched;
	} catch (error) {
		console.error('Error fetching updates from Sanity:', error);

		// Fall back to expired cache if available
		try {
			const cached = localStorage.getItem(CACHE_KEY);
			if (cached) {
				const { data } = JSON.parse(cached);
				if (data && data.length > 0) {
					console.warn('Using expired updates cache due to fetch error');
					return data;
				}
			}
		} catch (cacheError) {
			console.error('Error reading expired updates cache:', cacheError);
		}

		return [];
	}
}

/**
 * Fetch a single update by slug (no cache — used at build time and for fresh data)
 * @param {string} slug
 */
export async function loadUpdate(slug) {
	return sanityClient.fetch(SINGLE_UPDATE_QUERY, { slug });
}

/**
 * Fetch all post slugs (used by SvelteKit prerender entries)
 * @returns {Promise<string[]>}
 */
export async function loadAllSlugs() {
	return sanityClient.fetch(ALL_SLUGS_QUERY);
}

/**
 * Clear the updates cache (useful after publishing new content)
 */
export function clearUpdatesCache() {
	try {
		localStorage.removeItem(CACHE_KEY);
	} catch (error) {
		console.warn('Error clearing updates cache:', error);
	}
}

/**
 * Format a date string from Sanity into a human-readable form
 * @param {string} dateString - ISO date string
 * @returns {string}
 */
export function formatDate(dateString) {
	if (!dateString) return '';
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
