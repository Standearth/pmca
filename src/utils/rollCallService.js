// RollCall API service for Engaging Networks
const API_BASE = 'https://us.engagingnetworks.app/ea-dataservice/data.service';
const TOKEN = 'aa1b287e-1970-4265-a781-b2f9540e21e1';
const CAMPAIGN_ID = '88799';

/**
 * Fetch latest roll call data from Engaging Networks API
 * @param {number} detailRows - Number of rows to return (max 20)
 * @returns {Promise<Array>} Array of supporter data with firstName and city
 */
export async function fetchRollCall(detailRows = 10) {
	try {
		const params = new URLSearchParams({
			service: 'RollCall',
			token: TOKEN,
			campaignId: CAMPAIGN_ID,
			dataSet: '2', // 2 = City data (1 = Country data)
			detailRows: Math.min(detailRows, 20), // API max is 20
			contentType: 'json'
		});

		const response = await fetch(`${API_BASE}?${params}`);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		
		// Parse the XML-like structure if needed, or handle JSON directly
		if (data.EaData && data.EaData.EaRow) {
			return Array.isArray(data.EaData.EaRow) ? data.EaData.EaRow : [data.EaData.EaRow];
		}
		
		// Handle direct array response
		return Array.isArray(data) ? data : [];
	} catch (error) {
		console.error('Error fetching roll call data:', error);
		return [];
	}
}

/**
 * Generate a realistic time estimate for when someone signed
 * @param {number} index - Index in the array (0 = most recent)
 * @returns {string} Time estimate like "just now", "2 min ago", etc.
 */
export function generateTimeEstimate(index) {
	const timeOptions = [
		'just now',
		'1 min ago',
		'2 min ago',
		'3 min ago',
		'5 min ago',
		'8 min ago',
		'12 min ago',
		'15 min ago',
		'20 min ago',
		'25 min ago',
		'30 min ago',
		'35 min ago',
		'42 min ago',
		'48 min ago',
		'1 hour ago',
		'1 hour ago',
		'2 hours ago',
		'2 hours ago',
		'3 hours ago',
		'4 hours ago'
	];
	
	return timeOptions[Math.min(index, timeOptions.length - 1)] || '4 hours ago';
}

/**
 * Parse supporter data from API response
 * @param {Array} apiData - Raw API response data
 * @returns {Array} Parsed supporter objects with name, city, and timeAgo
 */
export function parseRollCallData(apiData) {
	return apiData.map((row, index) => {
		let firstName = '';
		let city = '';
		
		// Handle different response formats
		if (row.EaColumn) {
			// XML-like format with EaColumn array
			const columns = Array.isArray(row.EaColumn) ? row.EaColumn : [row.EaColumn];
			columns.forEach(col => {
				if (col.name === 'firstName') firstName = col.content || col.value || col;
				if (col.name === 'city') city = col.content || col.value || col;
			});
		} else {
			// Direct object format
			firstName = row.firstName || row.first_name || '';
			city = row.city || '';
		}
		
		return {
			name: firstName,
			city: city,
			timeAgo: generateTimeEstimate(index)
		};
	}).filter(supporter => supporter.name && supporter.city);
}
