<script>
	import { getContext, onMount } from "svelte";
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import TapeTransition from "$components/TapeTransition.svelte";
	
	let heroVideo;
	let currentCount = $state(0);
	const targetCount = 13428;
	let iframeSrc = $state("https://act.stand.earth/page/88799/petition/1");
	
	// const copy = getContext("copy");
	// const data = getContext("data");
	
	const preloadFont = [
		base+"/fonts/AmsiPro-Ultra.woff2",
		base+"/fonts/Carlito/Carlito-Regular.ttf",
		base+"/fonts/Carlito/Carlito-Bold.ttf"
	];

	// Page-specific structured data for Join page
	const joinPageStructuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Join Prime Members for Cleaner Amazon",
		"description": "Join the movement! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today.",
		"url": "https://primemembers.earth/join",
		"mainEntity": {
			"@type": "Organization",
			"name": "Prime Members for Cleaner Amazon",
			"url": "https://primemembers.earth",
			"description": "A campaign by Prime members demanding Amazon do more on climate change",
			"logo": "https://primemembers.earth/logo_black.svg",
			"sameAs": ["https://stand.earth"],
			"potentialAction": [
				{
					"@type": "JoinAction",
					"target": "https://primemembers.earth/join",
					"name": "Join the Campaign"
				},
				{
					"@type": "DonateAction",
					"target": "https://act.stand.earth/page/77077/donate/1",
					"name": "Donate to the Campaign"
				}
			]
		},
		"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://primemembers.earth"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Join",
					"item": "https://primemembers.earth/join"
				}
			]
		}
	};

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
		
		// Update iframe src with URL parameters
		iframeSrc = `https://act.stand.earth/page/88799/petition/1${window.location.search}`;
		
		return () => clearInterval(timer);
	});
</script>

<Meta 
	title="Join Prime Members for Cleaner Amazon" 
	description="Join the movement! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today." 
	url="https://primemembers.earth/join" 
	keywords="Amazon Prime, join campaign, climate action, electric delivery, renewable energy, environmental activism"
	ogType="website"
	structuredData={joinPageStructuredData}
	{preloadFont} 
/>
<Header />

<!-- Hero Section with Embedded Form -->
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
			<h1>Join Prime members demanding cleaner Amazon.</h1>
			<p class="hero-subtitle">Prime members agree that Amazon needs to do more on climate, from reducing emissions in its delivery fleet, to using renewable energy in its operations.</p>
            <h3>Use your Prime membership power to make Amazon deliver on climate!</h3>
		<!-- Counter -->
		<div class="counter">
			<div class="counter-circle">
				<div class="counter-number">{Math.floor(currentCount).toLocaleString()}</div>
				<div class="counter-text">Prime members<br>and counting!</div>
			</div>
		</div>
		</div>
		
		
		<!-- Embedded Signup Form -->
		<div class="signup-form">
			<iframe 
				src={iframeSrc}
				title="Join the campaign"
				class="signup-iframe"
				loading="eager"
			></iframe>
		</div>
		
		
	</div>
</section>

<!-- Demands Section -->
<section class="demands">
	<div class="container">
		<div class="demands-content">
			<div class="demands-text">
				<h2>Amazon isn't delivering on its climate promises.</h2>
				<p>Behind the fast deliveries, one-click orders, and flashy climate promises, Amazon's emissions are on the rise, mainly driven by the company's rapidly expanding data centers and delivery fleet.</p>
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
	</div>
</section>

<!-- Cancel Prime Page Plug -->
<section class="cancel-prime-plug">
	<div class="container">
		<div class="plug-content">
			<div class="plug-text">
				<h3>Considering canceling your Prime membership?</h3>
				<p>Amazon got into BIG trouble for making Prime cancellation deliberately difficult. Learn how the process works now.</p>
			</div>
			<div class="plug-cta">
				<a href="{base}/cancel-prime" class="btn btn-secondary">Learn about canceling Prime</a>
			</div>
		</div>
	</div>
</section>

<Footer />

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		overflow: hidden;
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
		color: white;
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem 4rem;
		display: grid;
		grid-template-columns: 1fr 400px;
		gap: 3rem;
		align-items: start;
	}

    .hero-text h3 {
		font-family: 'AmsiPro', sans-serif;
    }
	
	.hero-text h1 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: bold;
		margin-bottom: 1.5rem;
		line-height: 1.2;
		margin-top:5rem;
	}
	
	.hero-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		opacity: 0.95;
	}
	
	.signup-form {
		background: rgba(255, 255, 255, 0.98);
		border-radius: 0px;
		padding: 0rem;
		box-shadow: 0 8px 32px rgba(0,0,0,0.3);
		border: 10px solid #ff9f2e;
		height: 710px;
	}
	
	.signup-iframe {
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 8px;
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
	
	.demands {
		background: #1298ff;
		color: white;
		padding: 8rem 0 4rem;
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
		border: 10px solid #ff9f2e;
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
	
	.how {
		background: white url('{base}/bg2.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
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
		border-radius: 0px;
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
	
	.btn-secondary {
		background: transparent;
		color: #ff9f2e;
		border: 2px solid #ff9f2e;
		border-radius:0px;
	}
	
	.btn-secondary:hover {
		background: #ff9f2e;
		color:#000;
		transform: translateY(-2px);
	}
	
	/* Mobile Responsiveness */
	@media (max-width: 1024px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.hero-text {
			order: 1;
		}
		
		.counter {
			order: 2;
			text-align: center;
		}
		
		.signup-form {
			order: 3;
			height: 400px;
		}
	}
	
	@media (max-width: 768px) {
		.hero {
			min-height: auto;
		}
		
		.hero-content {
			padding: 8rem 1rem 2rem;
			gap: 1.5rem;
		}
		
		.hero-text h1 {
			font-size: clamp(1.8rem, 8vw, 2.5rem);
			margin-bottom: 1rem;
		}
		
		.hero-subtitle {
			font-size: 1.1rem;
			margin-bottom: 1rem;
		}
		
		.signup-form {
			height: 60vh;
			min-height: 500px;
			padding: 0.8rem;
			border-width: 6px;
		}
		
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
		
		.action-grid {
			grid-template-columns: 1fr;
		}
	}
	
	@media (max-width: 480px) {
		.hero-content {
			padding: 9rem 1rem 2rem;
		}
		
		.signup-form {
			height: 65vh;
			min-height: 450px;
			border-width: 4px;
		}
		
		.hero-text h1 {
			font-size: 2rem;
			line-height: 1.1;
		}
		
		.counter-circle {
			width: 120px;
			height: 120px;
		}
		
		.counter-number {
			font-size: 1.2rem;
		}
		
		.counter-text {
			font-size: 0.75rem;
		}
	}
</style>
