<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import PopupModal from "$components/PopupModal.svelte";
	import call from "$data/organizingCall.js";

	let showPopup = $state(false);
	
	// const copy = getContext("copy");
	// const data = getContext("data");
	
	function openPopup() {
		showPopup = true;
		document.body.style.overflow = 'hidden';
	}

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
			<a href="{base}/" aria-label="Prime Members for Cleaner Amazon">
				<img src="{base}/logo_white.png" alt="Prime Members for Cleaner Amazon" />
			</a>
		</div>
		
		<!-- Top right: Join and the menu, with the Diary link underneath on every page -->
		<div class="nav-right">
			<div class="nav-actions">
				<button class="join-btn" onclick={openPopup}>Join</button>
				<button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu">
					<span class="hamburger-line"></span>
					<span class="hamburger-line"></span>
					<span class="hamburger-line"></span>
				</button>
			</div>
			<a href="{base}/diary/" class="diary-link">Delivery Diary</a>
		</div>
	</div>
	</div>
	
	{#if showMenu}
		<div class="nav-menu" class:show={showMenu}>
			<button class="menu-close" onclick={closeMenu} aria-label="Close menu">&times;</button>
			<nav>
				<a href="{base}/" onclick={closeMenu}>Home</a>
				<a href="{base}/diary/" onclick={closeMenu}>Delivery Diary</a>
				<a href="{base}/learn-more/" onclick={closeMenu}>Why it matters</a>
				<a href="{base}/stories/" onclick={closeMenu}>Member Stories</a>
				<a href="{base}/updates/" onclick={closeMenu}>Latest Updates</a>
				{#if call.live}<a href="{base}/organizing-call/" onclick={closeMenu}>Organizing Call</a>{/if}
				<a href="{base}/cancel-prime/" onclick={closeMenu}>Cancel Prime</a>
				<button class="get-started-cta" onclick={openPopup}>Join</button>
			</nav>
		</div>
	{/if}
</header>

<!-- Popup Modal -->
<PopupModal bind:show={showPopup} />

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
	
	.nav-right {
		margin-left: auto;
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.diary-link {
		color: white;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.05rem;
		text-shadow: 0 1px 6px rgba(0,0,0,0.5);
		text-decoration: underline;
		text-decoration-color: #ff9f2e;
		text-decoration-thickness: 3px;
		text-underline-offset: 6px;
		transition: opacity 0.3s ease;
	}

	.diary-link:hover {
		opacity: 0.8;
	}

	.join-btn {
		background: #ff9f2e;
		color: #000;
		border: none;
		border-radius: 0;
		padding: 0.6rem 1.4rem;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.05rem;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.join-btn:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}

	@media (max-width: 480px) {
		.nav-actions {
			gap: 0.75rem;
		}

		.join-btn {
			padding: 0.5rem 0.9rem;
			font-size: 0.95rem;
		}

		.diary-link {
			font-size: 0.95rem;
		}
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
		color: #000 !important;
		padding: 1rem 2rem !important;
		border-radius: 0px !important;
		font-family: 'AmsiPro', sans-serif;
		border: none !important;
		margin-top: 1rem !important;
		text-align: center !important;
		transition: all 0.3s ease !important;
		font-family:'AmsiPro' sans-serif;
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
