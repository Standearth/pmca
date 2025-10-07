<script>
	import { base } from '$app/paths';
</script>

<footer class="campaign-footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-logo">
				<a target="_new" href="https://stand.earth/"><img src="{base}/stand_white.png" alt="Stand.earth" /></a>
			</div>
			
			<nav class="footer-nav">
				<a href="{base}/learn-more">Learn More</a>
				<a href="{base}/get-started" class="get-involved-btn">Get Involved</a>
			</nav>
		</div>
	</div>
</footer>

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
	
	.footer-nav {
		display: flex;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
	}
	
	.footer-nav a {
		color: white;
		text-decoration: none;
		font-family: 'Carlito', sans-serif;
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
