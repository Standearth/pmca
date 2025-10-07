<script>
	import { onMount } from 'svelte';
	
	let { 
		show = $bindable(),
		baseUrl = "https://act.stand.earth/page/88799/petition/1"
	} = $props();
	
	let iframeSrc = $state(baseUrl);
	
	function closePopup() {
		show = false;
		document.body.style.overflow = 'auto';
	}
	
	onMount(() => {
		// Update iframe src with URL parameters
		iframeSrc = `${baseUrl}${window.location.search}`;
	});
</script>

<!-- Popup Modal - Preloaded iframe for better performance -->
<div class="popup-overlay" class:show onclick={closePopup}>
	<div class="popup-content" onclick={(e) => e.stopPropagation()}>
		<button class="popup-close" onclick={closePopup}>&times;</button>
		<iframe 
			src={iframeSrc}
			title="Join the campaign"
			class="popup-iframe"
			loading="eager"
		></iframe>
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
	}
	
	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.popup-content {
			width: 95%;
			height: 90%;
		}
	}
</style>
