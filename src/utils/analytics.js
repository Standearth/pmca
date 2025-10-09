/**
 * Google Analytics utilities for SvelteKit
 * Handles gtag initialization and event tracking
 */

import { browser } from '$app/environment';

export const GA_ID = 'G-8SZBSE6Y23';

/**
 * Initialize Google Analytics
 * This should be called once when the app starts
 */
export function initGA(gtagId = GA_ID) {
	if (!browser || !gtagId) return;

	try {
		// Check if gtag is already loaded
		if (window.gtag) {
			console.log('Google Analytics already initialized');
			return;
		}

		// Load gtag script
		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
		document.head.appendChild(script);

		// Initialize dataLayer and gtag
		window.dataLayer = window.dataLayer || [];
		function gtag(...args) {
			window.dataLayer.push(args);
		}
		window.gtag = gtag;

		// Configure gtag when script loads
		script.onload = () => {
			gtag('js', new Date());
			gtag('config', gtagId, {
				send_page_view: false // We'll send page views manually
			});
			console.log('Google Analytics initialized successfully');
		};

		script.onerror = () => {
			console.error('Failed to load Google Analytics');
		};

	} catch (error) {
		console.error('Error initializing Google Analytics:', error);
	}
}

/**
 * Send a page view event
 */
export function trackPageView(title, location) {
	if (!browser || !window.gtag) return;
	
	try {
		window.gtag('config', GA_ID, {
			page_title: title,
			page_location: location
		});
		
		// Also send as an event
		window.gtag('event', 'page_view', {
			page_title: title,
			page_location: location
		});
	} catch (error) {
		console.error('Error tracking page view:', error);
	}
}

/**
 * Track custom events
 */
export function trackEvent(eventName, parameters = {}) {
	if (!browser || !window.gtag) return;
	
	try {
		window.gtag('event', eventName, parameters);
	} catch (error) {
		console.error('Error tracking event:', error);
	}
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonName, location = null) {
	trackEvent('button_click', {
		button_name: buttonName,
		page_location: location || window.location.href
	});
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName, success = true) {
	trackEvent('form_submit', {
		form_name: formName,
		success: success,
		page_location: window.location.href
	});
}

/**
 * Track campaign actions
 */
export function trackCampaignAction(action, details = {}) {
	trackEvent('campaign_action', {
		action: action,
		...details,
		page_location: window.location.href
	});
}

/**
 * Track social shares
 */
export function trackSocialShare(platform, url = null) {
	trackEvent('share', {
		method: platform,
		content_type: 'campaign',
		item_id: url || window.location.href
	});
}

/**
 * Track popup modal opens
 */
export function trackPopupOpen(sourcePage) {
	trackEvent('popup_opened', {
		source_page: sourcePage,
		page_location: window.location.href,
		page_path: window.location.pathname
	});
}

/**
 * Track get-started page visits with ref parameter (key conversion)
 */
export function trackGetStartedRefConversion(refId) {
	trackEvent('conversion', {
		event_category: 'get_started',
		event_label: 'ref_visit',
		ref_id: refId,
		page_location: window.location.href,
		custom_parameters: {
			conversion_type: 'ref_visit',
			campaign_source: 'referral'
		}
	});
}

/**
 * Track social button clicks on get-started page
 */
export function trackSocialButtonClick(platform, hasRef = false, refId = null) {
	trackEvent('social_share_click', {
		social_platform: platform,
		has_ref: hasRef,
		ref_id: refId,
		page_location: window.location.href,
		page_path: '/get-started'
	});
}

/**
 * Check if GA is loaded and ready
 */
export function isGAReady() {
	return browser && window.gtag && typeof window.gtag === 'function';
}
