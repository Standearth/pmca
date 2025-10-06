<script>
	import { onMount } from 'svelte';
	
	let showMenu = $state(false);
	
	function toggleMenu() {
		showMenu = !showMenu;
	}
	
	function closeMenu() {
		showMenu = false;
	}
	
	onMount(() => {
		// Close menu when clicking outside
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
				showMenu = false;
			}
		});
	});
</script>

<header class="header">
	<div class="container">
	<div class="nav-container">
		<div class="logo">
			<a href="/" aria-label="Prime Members for Cleaner Amazon">
				<img src="/logo_white.png" alt="Prime Members for Cleaner Amazon" />
			</a>
		</div>
		
		<button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu">
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
		</button>
	</div>
	</div>
	
	{#if showMenu}
		<div class="nav-menu" class:show={showMenu}>
			<button class="menu-close" onclick={closeMenu} aria-label="Close menu">&times;</button>
			<nav>
				<a href="/" onclick={closeMenu}>Home</a>
				<a href="/learn-more" onclick={closeMenu}>Learn More</a>
				<a href="/leaderboard" onclick={closeMenu}>Leaderboard</a>
				<a href="/get-started" class="get-started-cta" onclick={closeMenu}>Get Started</a>
			</nav>
		</div>
	{/if}
</header>

<style>
	.header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: transparent;
		padding: 1rem 0;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}
	
	.nav-container {
		display: flex;
		align-items: center;
		position: relative;
	}
	
	.logo {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top:10%;
	}
	
	.logo img {
		height: 150px;
		width: auto;
	}
	
	.hamburger {
		margin-left: auto;
	}
	
	.hamburger {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 40px;
		height: 40px;
		margin-top: 40px;
	}
	
	.hamburger-line {
		width: 100%;
		height: 3px;
		background: white;
		border-radius: 2px;
		transition: all 0.3s ease;

	}
	
	.nav-menu {
		position: fixed;
		top: 0;
		right: -300px;
		width: 300px;
		height: 100vh;
		background: rgba(18, 152, 255, 0.95);
		backdrop-filter: blur(10px);
		transition: right 0.3s ease;
		padding-top: 100px;
	}
	
	.nav-menu.show {
		right: 0;
	}
	
	.nav-menu nav {
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}
	
	.nav-menu nav a {
		color: white;
		text-decoration: none;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		transition: opacity 0.3s ease;
	}
	
	.nav-menu nav a:hover {
		opacity: 0.8;
	}
	
	.menu-close {
		position: absolute;
		top: 20px;
		right: 20px;
		background: none;
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s ease;
	}
	
	.menu-close:hover {
		opacity: 0.7;
	}
	
	.get-started-cta {
		background: #ff9f2e !important;
		color: white !important;
		padding: 1rem 2rem !important;
		border-radius: 8px !important;
		border: none !important;
		margin-top: 1rem !important;
		text-align: center !important;
		transition: all 0.3s ease !important;
	}
	
	.get-started-cta:hover {
		background: #e88a1a !important;
		opacity: 1 !important;
		transform: translateY(-2px);
	}
	
	@media (max-width: 768px) {
		.logo img {
			height: 100px;
		}
		
		.hamburger {
			width: 40px;
			height: 40px;
		}
		
		.nav-menu {
			width: 280px;
		}
	}
</style>
