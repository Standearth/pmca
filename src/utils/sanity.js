import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: '6mclpc7f',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: true // Use CDN for faster reads
});

/**
 * Build a Sanity image URL using the CDN
 * @param {Object} imageRef - Sanity image reference object
 * @param {Object} options - Width, height, quality options
 * @returns {string} Full image URL
 */
export function buildImageUrl(imageRef, options = {}) {
	if (!imageRef?.asset?._ref) return null;

	const { width = 800, height, quality = 80 } = options;

	// Parse the asset reference: image-{id}-{dimensions}-{format}
	const ref = imageRef.asset._ref;
	const [, id, dimensions, format] = ref.split('-');
	const [w, h] = dimensions ? dimensions.split('x') : ['800', '600'];

	let url = `https://cdn.sanity.io/images/6mclpc7f/production/${id}-${w}x${h}.${format}`;

	const params = new URLSearchParams();
	if (width) params.set('w', String(width));
	if (height) params.set('h', String(height));
	params.set('q', String(quality));
	params.set('auto', 'format');
	if (imageRef.hotspot) {
		params.set('fp-x', String(imageRef.hotspot.x));
		params.set('fp-y', String(imageRef.hotspot.y));
	}

	return `${url}?${params.toString()}`;
}

/**
 * Extract plain text from Portable Text blocks (for previews/excerpts)
 * @param {Array} blocks - Array of Portable Text blocks
 * @param {number} maxLength - Max character length for excerpt
 * @returns {string}
 */
export function portableTextToPlainText(blocks = [], maxLength = 200) {
	const text = blocks
		.filter(block => block._type === 'block')
		.map(block => block.children?.map(child => child.text).join('') ?? '')
		.join(' ')
		.trim();

	if (text.length <= maxLength) return text;

	const truncated = text.substring(0, maxLength);
	const lastSpace = truncated.lastIndexOf(' ');
	return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '…';
}
