<script>
	import { onMount } from 'svelte';
	import { preloadIframe, createVisibleIframe, isIframeCached, getCacheStats } from '$utils/iframeCache.js';
	
	let { 
		show = $bindable(),
		baseUrl = "https://act.stand.earth/page/88799/petition/1"
	} = $props();
	
	let iframeSrc = $state(baseUrl);
	let iframeContainer;
	let isIframeReady = $state(false);
	
	function closePopup() {
		show = false;
		document.body.style.overflow = 'auto';
	}
	
	// Create or show the iframe when popup becomes visible
	$effect(() => {
		if (show && iframeContainer && iframeSrc) {
			showIframe();
		}
	});
	
	function showIframe() {
		if (!iframeContainer) return;
		
		// Try to use cached iframe first
		const visibleIframe = createVisibleIframe(iframeSrc, iframeContainer);
		
		if (visibleIframe) {
			console.log('Using cached iframe for popup');
			isIframeReady = true;
		} else {
			// Fallback: create new iframe if cache failed
			console.log('Creating fallback iframe for popup');
			createFallbackIframe();
		}
	}
	
	function createFallbackIframe() {
		if (!iframeContainer) return;
		
		const iframe = document.createElement('iframe');
		iframe.src = iframeSrc;
		iframe.title = 'Join the campaign';
		iframe.style.width = '100%';
		iframe.style.height = '100%';
		iframe.style.border = 'none';
		
		iframe.onload = () => {
			isIframeReady = true;
		};
		
		iframeContainer.innerHTML = '';
		iframeContainer.appendChild(iframe);
	}
	
	onMount(() => {
		// Update iframe src with URL parameters
		iframeSrc = `${baseUrl}${window.location.search}`;
		
		// Preload iframe immediately (only happens once globally)
		preloadIframe(iframeSrc).then(() => {
			console.log('Popup iframe preloaded successfully');
		}).catch((error) => {
			console.error('Failed to preload popup iframe:', error);
		});
		
		// Debug: Log cache statistics
		console.log('Iframe cache stats:', getCacheStats());
	});
</script>

<!-- Popup Modal - Uses cached iframe for better performance -->
<div class="popup-overlay" class:show onclick={closePopup}>
	<div class="popup-content" onclick={(e) => e.stopPropagation()}>
		<button class="popup-close" onclick={closePopup}>&times;</button>
		
		<!-- Iframe container -->
		<div class="popup-iframe" bind:this={iframeContainer}>
			{#if !isIframeReady}
				<div class="iframe-loading">
					<p>Loading...</p>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Popup Styles */
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10000;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
	}
	
	.popup-overlay.show {
		opacity: 1;
		visibility: visible;
	}
	
	.popup-content {
		position: relative;
		width: 90%;
		max-width: 440px;
		height: 80%;
		background: white;
		border-radius: 0px;
		border: 10px solid #ff9f2e;
		overflow: hidden;
	}
	
	.popup-close {
		position: absolute;
		top: 15px;
		right: 20px;
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		z-index: 10001;
		color: #666;
	}
	
	.popup-iframe {
		width: 100%;
		height: 100%;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.iframe-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background: #f8f9fa;
	}
	
	.iframe-loading p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		color: #666;
		margin: 0;
	}
	
	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.popup-content {
			width: 95%;
			height: 90%;
		}
	}
</style>
