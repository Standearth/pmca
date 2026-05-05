import { error } from '@sveltejs/kit';
import { loadUpdate, loadAllSlugs } from '$utils/loadUpdates.js';

// Pre-render a static HTML file for every published post at build time.
export const prerender = true;

/**
 * Tell SvelteKit which slug values exist so it can pre-render each one.
 * Runs once during `npm run build`.
 */
export async function entries() {
	try {
		const slugs = await loadAllSlugs();
		return slugs.map(slug => ({ slug }));
	} catch (err) {
		console.error('Error fetching post slugs for prerender entries:', err);
		return [];
	}
}

/**
 * Load the post data for this slug.
 * Runs at build time (SSR pre-render) and again client-side on navigation.
 */
export async function load({ params }) {
	const post = await loadUpdate(params.slug);

	if (!post) {
		error(404, 'Update not found');
	}

	return { post };
}
