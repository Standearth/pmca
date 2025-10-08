<script>
	import { getContext, onMount } from "svelte";
	import { base } from '$app/paths';
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import TapeTransition from "$components/TapeTransition.svelte";
	import PopupModal from "$components/PopupModal.svelte";
	
	let heroVideo;
	let currentCount = $state(0);
	const targetCount = 13428;
	let showPopup = $state(false);
	
	// const copy = getContext("copy");
	// const data = getContext("data");
	
	function openPopup() {
		showPopup = true;
		document.body.style.overflow = 'hidden';
	}
	
	onMount(() => {
		// Animate counter
		const duration = 2000;
		const increment = targetCount / (duration / 50);
		const timer = setInterval(() => {
			currentCount += increment;
			if (currentCount >= targetCount) {
				currentCount = targetCount;
				clearInterval(timer);
			}
		}, 50);
		
		return () => clearInterval(timer);
	});
</script>

<Header />

<!-- Hero Section -->
	<section class="hero">
		<div class="hero-background">
			<video 
				bind:this={heroVideo}
				autoplay 
				muted 
				playsinline 
				poster="{base}/hero-bg.webp"
				class="hero-video"
			>
				<source src="{base}/bg_video.mp4" type="video/mp4">
			</video>
		</div>
		
		<div class="hero-content">
			<div class="hero-text">
				<h1>Prime members want Amazon to do more on climate.</h1>
				<div class="hero-buttons">
					<button class="btn btn-primary" onclick={openPopup}>I want to join</button>
					<button class="btn btn-secondary"><a href="{base}/learn-more">Why this matters</a></button>
				</div>
			</div>
			
			<!-- Counter -->
			<div class="counter">
				<div class="counter-circle">
					<div class="counter-number">{Math.floor(currentCount).toLocaleString()}</div>
					<div class="counter-text">Prime members<br>and counting!</div>
				</div>
			</div>
		</div>
		
	</section>
	
	<!-- Demands Section -->
	<section class="demands">
		<div class="container">
			<div class="demands-content">
				<div class="demands-text">
					<h2>Here is the problem: Amazon isn't delivering on its climate promises.</h2>
					<p>Behind the fast deliveries, one-click orders, and flashy climate promises, Amazon's emissions are on the rise, mainly driven by the company’s rapidly expanding data centers and delivery fleet.</p>
					<h3><strong>As Prime members, we have the leverage to say our future is not for sale.</strong></h3>
				</div>
				
				<div class="demands-card">
					<div class="card-header">
						<strong>TO: Amazon</strong><br>
						<strong>FROM: Prime members</strong>
					</div>
					<p>As your most loyal customers, we are calling on you to:</p>
					<ol>
						<li><span class="accent-orange">Electrify your global delivery fleet</span> from dock to door</li>
						<li>Power every data center and warehouse with <span class="accent-orange">real renewable energy</span></li>
						<li>Create <span class="accent-orange">better working conditions</span>, including fair break times, safety standards, and protecting workers' right to organize</li>
					</ol>
					<button class="btn btn-cta" onclick={openPopup}>Add my name</button>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Tape Transition -->
	<TapeTransition />
	
	<!-- How Section -->
	<section class="how">
		<div class="container">
			<h2>Here is how we move Amazon</h2>
			<p class="how-subtitle">Recent polling showed 4 out of 5 Prime members want Amazon to do better on climate. Let's use our collective voice to demand a more ethical, sustainable Amazon.</p>
			
			<div class="action-grid">
				<div class="action-item">
					<div class="action-icon"><img src="{base}/marker.svg"></div>
					<h3>Build Power</h3>
					<p>Let's reach as many Prime members as possible. Share <span class="highlight">your unique link</span> and spread the word.</p>
				</div>
				
				<div class="action-item">
					<div class="action-icon"><img src="{base}/marker.svg"></div>
					<h3>Get Noticed</h3>
					<p>We need to make sure Amazon hears our demands loud and clear. We have <span class="highlight">just the tools</span> for the job.</p>
				</div>
				
				<div class="action-item">
					<div class="action-icon"><img src="{base}/marker.svg"></div>
					<h3>Organize</h3>
					<p>From <span class="highlight">Amazon employees</span>, to <span class="highlight">local communities</span>, our collective power can only grow from here.</p>
				</div>
			</div>
			
			<div class="ready-section">
				<button class="btn btn-cta large" onclick={openPopup}>I am ready to join</button>
			</div>
		</div>
	</section>

	<!-- Cancel Prime Page Plug -->
	<section class="cancel-prime-plug">
		<div class="container">
			<div class="plug-content">
				<div class="plug-text">
					<h3>Considering canceling your Prime membership?</h3>
					<p>Amazon just got in BIG trouble for making cancelling Prime membership deliberately difficult.. Learn how the process works now.</p>
				</div>
				<div class="plug-cta">
					<a href="{base}/cancel-prime" class="btn btn-secondary">Learn about canceling Prime</a>
				</div>
			</div>
		</div>
	</section>
	
<Footer />

<!-- Popup Modal -->
<PopupModal bind:show={showPopup} />

<style>
	.hero {
		position: relative;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	
	
	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	
	.hero-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.hero-content {
		position: relative;
		z-index: 2;
		text-align: left;
		color: white;
		max-width: 800px;
		padding: 0 2rem;
		margin-left: 2rem;
	}
	
	.hero-text h1 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 5vw, 4rem);
		font-weight: bold;
		margin-bottom: 2rem;
		line-height: 1.2;
	}
	
	.hero-buttons {
		display: flex;
		gap: 1rem;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-bottom: 4rem;
	}
	
	.btn {
		padding: 1rem 2rem;
		border: none;
		border-radius: 8px;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
	}
	
	.btn-primary {
		background: #ff9f2e;
		color: #000;
		border-radius:0px;
	}
	
	.btn-primary:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}
	
	.btn-secondary {
		background: transparent;
		color: #ff9f2e;
		border: 2px solid #ff9f2e;
		border-radius:0px;
	}

	.btn-secondary a {
		color:#ff9f2e;
		text-decoration:none;
	}

	.btn-secondary a:hover {
		color:#000;
		text-decoration:none;
	}
	
	.btn-secondary:hover {
		background: #ff9f2e;
		color:#000;
		transform: translateY(-2px);
	}
	
	.counter {
		margin-top: 2rem;
		z-index: 3;
	}
	
	.counter-circle {
		background: #1298ff;
		border-radius: 50%;
		width: 180px;
		height: 180px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
		box-shadow: 0 8px 32px rgba(0,0,0,0.3);
	}
	
	.counter-number {
		font-family: 'AmsiPro', sans-serif;
		font-size: 2.2rem;
		font-weight: bold;
		line-height: 1;
	}
	
	.counter-text {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		text-align: center;
		margin-top: 0.5rem;
		line-height: 1.2;
	}
	
	.markers {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}
	
	.marker {
		position: absolute;
		width: 20px;
		height: 20px;
		animation: pulse 2s infinite;
	}
	
	@keyframes pulse {
		0%, 100% { opacity: 0.6; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.2); }
	}
	
	.demands {
		background: #1298ff;
		color: white;
		padding: 4rem 0;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	.demands-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}
	
	.demands-text h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2.2rem, 4vw, 3rem);
		margin-bottom: 1.5rem;
		line-height: 1.2;
	}

	.demands-text h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.2rem, 3vw, 1.5rem);
	}
	
	.demands-text p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}
	
	.demands-card {
		background: white;
		font-size:1.6rem;
		color: black;
		padding: 2rem;
		border-radius: 0px;
		border: 4px solid #ff9f2e;
	}
	
	.card-header {
		font-family: 'Carlito', sans-serif;
		font-weight: bold;
		margin-bottom: 1rem;
	}
	
	.demands-card p {
		font-family: 'Carlito', sans-serif;
		margin-bottom: 1rem;
		
	}
	
	.demands-card ol {
		margin: 1.5rem 0;
		padding-left: 1.5rem;
	}
	
	.demands-card li {
		font-family: 'Carlito', sans-serif;
		margin-bottom: 0.8rem;
		line-height: 1.4;
	}
	
	.btn-cta {
		background: #ff9f2e;
		color: #000;
		font-size: 1.1rem;
		padding: 1rem 2rem;
		border-radius:0px;
	}
	
	.btn-cta:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}
	
	.btn-cta.large {
		font-size: 1.3rem;
		color:#000;
		padding: 1.2rem 3rem;
	}
	
	
	.how {
		background: white;
		padding: 4rem 0;
		text-align: center;
	}
	
	.how h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.8rem, 4vw, 3rem);
		color: black;
		margin-bottom: 1rem;
	}
	
	.how-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		color: #666;
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.action-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
	}
	
	.action-item {
		border: 3px solid #1298ff;
		padding: 2rem 1.5rem;
		border-radius: 12px;
		text-align: left;
	}
	
	.action-icon {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.action-icon img {
		width:40px;
		float:left;
	}
	
	.action-item h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		color: black;
		margin-bottom: 1rem;
	}
	
	.action-item p {
		font-family: 'Carlito', sans-serif;
		color: #666;
		line-height: 1.5;
	}
	
	.highlight {
		color: #1298ff;
		font-weight: bold;
	}
	
	.accent-orange {
		text-decoration: underline;
		text-decoration-color: #ff9f2e;
		text-underline-offset: 2px;
		text-decoration-thickness: 4px;
		text-decoration-style: solid;
	}
	
	.ready-section {
		margin-top: 3rem;
	}
	
	/* Cancel Prime Plug Section */
	.cancel-prime-plug {
		background: #f8f9fa;
		padding: 3rem 0;
	}
	
	.plug-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
		align-items: center;
		max-width: 1000px;
		margin: 0 auto;
	}
	
	.plug-text h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.3rem, 3vw, 1.8rem);
		color: black;
		margin-bottom: 1rem;
	}
	
	.plug-text p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.6;
		color: #666;
		margin: 0;
	}
	
	.plug-cta {
		text-align: center;
	}
	
	
	@media (max-width: 768px) {
		.plug-content {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 1.5rem;
		}
		
		.cancel-prime-plug {
			padding: 2rem 0;
		}
		.demands-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.counter-circle {
			width: 140px;
			height: 140px;
		}
		
		.counter-number {
			font-size: 1.4rem;
		}
		
		.counter-text {
			font-size: 0.8rem;
		}
		
		.hero-content {
			margin-left: 0;
			padding: 0 1rem;
		}
		
		.hero-buttons {
			flex-direction: column;
			align-items: flex-start;
		}
		
		.btn {
			width: 200px;
		}
		
		.action-grid {
			grid-template-columns: 1fr;
		}
		
	}
</style>
