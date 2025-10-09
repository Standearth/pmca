/**
 * Iframe preload cache manager
 * Prevents duplicate iframe loading across components and pages
 */

import { browser } from '$app/environment';

// Global cache for preloaded iframes
const iframeCache = new Map();
const preloadingPromises = new Map();

/**
 * Preload an iframe source and cache it
 * @param {string} src - The iframe source URL
 * @returns {Promise<HTMLIFrameElement>} - Promise that resolves when iframe is loaded
 */
export function preloadIframe(src) {
	if (!browser) return Promise.resolve(null);
	
	// Return cached iframe if it exists
	if (iframeCache.has(src)) {
		return Promise.resolve(iframeCache.get(src));
	}
	
	// Return existing preload promise if already in progress
	if (preloadingPromises.has(src)) {
		return preloadingPromises.get(src);
	}
	
	// Create new preload promise
	const preloadPromise = new Promise((resolve, reject) => {
		const iframe = document.createElement('iframe');
		
		// Set iframe properties
		iframe.src = src;
		iframe.style.display = 'none';
		iframe.style.position = 'absolute';
		iframe.style.left = '-9999px';
		iframe.style.width = '1px';
		iframe.style.height = '1px';
		
		// Handle iframe load
		iframe.onload = () => {
			// Store in cache
			iframeCache.set(src, iframe);
			preloadingPromises.delete(src);
			console.log(`Iframe preloaded and cached: ${src}`);
			resolve(iframe);
		};
		
		// Handle iframe error
		iframe.onerror = (error) => {
			preloadingPromises.delete(src);
			console.error(`Failed to preload iframe: ${src}`, error);
			reject(error);
		};
		
		// Add to DOM to trigger loading
		document.body.appendChild(iframe);
		
		console.log(`Starting iframe preload: ${src}`);
	});
	
	// Store the promise to prevent duplicates
	preloadingPromises.set(src, preloadPromise);
	
	return preloadPromise;
}

/**
 * Get a cached iframe or create a new one
 * @param {string} src - The iframe source URL
 * @returns {HTMLIFrameElement|null} - Cached iframe or null
 */
export function getCachedIframe(src) {
	if (!browser) return null;
	return iframeCache.get(src) || null;
}

/**
 * Check if an iframe is cached
 * @param {string} src - The iframe source URL
 * @returns {boolean} - True if cached
 */
export function isIframeCached(src) {
	return iframeCache.has(src);
}

/**
 * Check if an iframe is currently preloading
 * @param {string} src - The iframe source URL
 * @returns {boolean} - True if preloading
 */
export function isIframePreloading(src) {
	return preloadingPromises.has(src);
}

/**
 * Create a visible iframe from cached preloaded iframe
 * @param {string} src - The iframe source URL
 * @param {HTMLElement} container - Container element to append iframe
 * @returns {HTMLIFrameElement|null} - The visible iframe element
 */
export function createVisibleIframe(src, container) {
	if (!browser || !container) return null;
	
	const cachedIframe = getCachedIframe(src);
	
	if (cachedIframe) {
		// Clone the cached iframe for display
		const visibleIframe = cachedIframe.cloneNode(true);
		visibleIframe.style.display = 'block';
		visibleIframe.style.position = 'static';
		visibleIframe.style.left = 'auto';
		visibleIframe.style.width = '100%';
		visibleIframe.style.height = '100%';
		visibleIframe.style.border = 'none';
		
		// Clear any existing content and add the iframe
		container.innerHTML = '';
		container.appendChild(visibleIframe);
		
		return visibleIframe;
	}
	
	return null;
}

/**
 * Clear iframe cache (useful for memory management)
 */
export function clearIframeCache() {
	if (!browser) return;
	
	// Remove cached iframes from DOM
	iframeCache.forEach((iframe) => {
		if (iframe.parentNode) {
			iframe.parentNode.removeChild(iframe);
		}
	});
	
	// Clear caches
	iframeCache.clear();
	preloadingPromises.clear();
	
	console.log('Iframe cache cleared');
}

/**
 * Get cache statistics for debugging
 * @returns {object} - Cache statistics
 */
export function getCacheStats() {
	return {
		cached: iframeCache.size,
		preloading: preloadingPromises.size,
		cachedUrls: Array.from(iframeCache.keys()),
		preloadingUrls: Array.from(preloadingPromises.keys())
	};
}
