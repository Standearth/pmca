<script>
	import { onMount } from 'svelte';
	import { fetchRollCall, parseRollCallData } from '../utils/rollCallService.js';

	let supporters = $state([]);
	let currentIndex = $state(0);
	let isVisible = $state(true);
	let isLoading = $state(true);
	
	// Fetch data and cycle through supporters
	onMount(async () => {
		try {
			const apiData = await fetchRollCall(15);
			supporters = parseRollCallData(apiData);
			isLoading = false;
			
			// Start cycling if we have supporters
			if (supporters.length > 0) {
				startCycling();
			}
		} catch (error) {
			console.error('Failed to load roll call data:', error);
			isLoading = false;
		}
		
		// Refresh data every 2 minutes
		const refreshInterval = setInterval(async () => {
			try {
				const apiData = await fetchRollCall(15);
				const newSupporters = parseRollCallData(apiData);
				if (newSupporters.length > 0) {
					supporters = newSupporters;
				}
			} catch (error) {
				console.error('Failed to refresh roll call data:', error);
			}
		}, 120000);
		
		return () => clearInterval(refreshInterval);
	});
	
	function startCycling() {
		if (supporters.length === 0) return;
		
		const cycle = () => {
			// Fade out
			isVisible = false;
			
			setTimeout(() => {
				// Change to next supporter
				currentIndex = (currentIndex + 1) % supporters.length;
				// Fade in
				isVisible = true;
			}, 500); // Half second fade out
		};
		
		// Start cycling every 3 seconds
		const cyclingInterval = setInterval(cycle, 3000);
		
		return () => clearInterval(cyclingInterval);
	}
	
	const currentSupporter = $derived(supporters[currentIndex]);
</script>

{#if !isLoading && supporters.length > 0 && currentSupporter}
	<div class="roll-call">
		<div class="supporter-info" class:visible={isVisible}>
			<div class="supporter-name">{currentSupporter.name}</div>
			<div class="supporter-details">from {currentSupporter.city}</div>
			<div class="supporter-time">{currentSupporter.timeAgo}</div>
		</div>
	</div>
{/if}

<style>
	.roll-call {
		position: absolute;
		right: -220px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 4;
	}
	
	.supporter-info {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		padding: 1rem 1.2rem;
		border-radius: 20px;
		border: 2px solid #1298ff;
		box-shadow: 0 4px 20px rgba(18, 152, 255, 0.3);
		text-align: center;
		min-width: 180px;
		opacity: 0;
		transform: translateX(-10px) scale(0.95);
		transition: all 0.5s ease;
		position: relative;
	}
	
	.supporter-info::before {
		content: '';
		position: absolute;
		left: -8px;
		top: 50%;
		transform: translateY(-50%);
		width: 0;
		height: 0;
		border-top: 8px solid transparent;
		border-bottom: 8px solid transparent;
		border-right: 8px solid rgba(255, 255, 255, 0.95);
		z-index: -1;
	}
	
	.supporter-info.visible {
		opacity: 1;
		transform: translateX(0) scale(1);
	}
	
	.supporter-name {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.1rem;
		font-weight: bold;
		color: #1298ff;
		margin-bottom: 0.3rem;
	}
	
	.supporter-details {
		font-family: 'Carlito', sans-serif;
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 0.2rem;
	}
	
	.supporter-time {
		font-family: 'Carlito', sans-serif;
		font-size: 0.8rem;
		color: #ff9f2e;
		font-weight: bold;
	}
	
	/* Curved positioning for different screen sizes */
	@media (max-width: 1200px) {
		.roll-call {
			right: -200px;
		}
	}
	
	@media (max-width: 992px) {
		.roll-call {
			right: -180px;
			top: 60%;
		}
		
		.supporter-info {
			min-width: 160px;
			padding: 0.8rem 1rem;
		}
		
		.supporter-name {
			font-size: 1rem;
		}
		
		.supporter-details {
			font-size: 0.85rem;
		}
	}
	
	@media (max-width: 768px) {
		.roll-call {
			position: static;
			margin-top: 1rem;
			text-align: center;
		}
		
		.supporter-info {
			display: inline-block;
			min-width: 200px;
		}
		
		.supporter-info::before {
			display: none;
		}
	}
	
	@media (max-width: 480px) {
		.supporter-info {
			min-width: 180px;
			padding: 0.7rem 0.9rem;
		}
		
		.supporter-name {
			font-size: 0.95rem;
		}
		
		.supporter-details, .supporter-time {
			font-size: 0.8rem;
		}
	}
</style>
