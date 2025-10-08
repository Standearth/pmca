<script>
	import { base } from '$app/paths';
	import PopupModal from "$components/PopupModal.svelte";

	let showPopup = $state(false);
		
	function openPopup() {
		showPopup = true;
		document.body.style.overflow = 'hidden';
	}

</script>

<footer class="campaign-footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-logo">
				<a target="_new" href="https://stand.earth/"><img src="{base}/stand_white.png" alt="Stand.earth" /></a>
			</div>
			
			<nav class="footer-nav">
				<a href="{base}/learn-more">Learn More</a>
				<button class="get-started-cta" onclick={openPopup}>Get Started</button>
			</nav>
		</div>
	</div>
</footer>
<!-- Popup Modal -->
<PopupModal bind:show={showPopup} />
<style>
	.campaign-footer {
		background: #1298ff;
		padding: 2rem 0;
		margin-top: 0;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	.footer-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 2rem;
	}
	
	.footer-logo img {
		height: 40px;
		width: auto;
	}

	.get-started-cta {
		background: #ff9f2e !important;
		color: #000 !important;
		padding: 1rem 2rem !important;
		border-radius: 0px !important;
		font-family: 'AmsiPro', sans-serif;
		border: none !important;
		text-align: center !important;
		transition: all 0.3s ease !important;
		font-family:'AmsiPro' sans-serif;
	}
	
	.get-started-cta:hover {
		background: #e88a1a !important;
		opacity: 1 !important;
		transform: translateY(-2px);
	}
	
	.footer-nav {
		display: flex;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
	}
	
	.footer-nav a {
		color: white;
		text-decoration: none;
		font-family:'AmsiPro', sans-serif;
		font-size: 1rem;
		font-weight: 500;
		transition: opacity 0.3s ease;
	}
	
	.footer-nav a:hover {
		opacity: 0.8;
	}
	
	.get-involved-btn {
		background: #ff9f2e;
		color: #000 !important;
		padding: 0.8rem 2rem;
		border-radius: 0px;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		transition: all 0.3s ease;
	}
	
	.get-involved-btn:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}
	
	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			text-align: center;
		}
		
		.footer-nav {
			justify-content: center;
			flex-wrap: wrap;
		}
		
		.footer-nav a {
			font-size: 0.9rem;
		}
		
		.get-involved-btn {
			padding: 0.7rem 1.5rem;
			font-size: 0.9rem;
		}
	}
</style>
