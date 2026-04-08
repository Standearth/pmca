<script>
	import { getContext, onMount } from "svelte";
	import { targetCount } from "$data/variables.json";
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import TapeTransition from "$components/TapeTransition.svelte";
	import StoriesCarousel from "$components/StoriesCarousel.svelte";
	import PopupModal from "$components/PopupModal.svelte";
	import { trackCampaignAction, trackSocialShare, trackMetaPixelWhatsAppClick } from '$utils/analytics.js';

	let heroVideo;
	let currentCount = $state(0);
	let showPopup = $state(false);

	// UK-specific iframe URL with country pre-population
	const ukIframeBaseUrl = "https://act.stand.earth/page/88799/petition/1?supporter.country=Germany";

	const preloadFont = [
		base+"/fonts/AmsiPro-Ultra.woff2",
		base+"/fonts/Carlito/Carlito-Regular.ttf",
		base+"/fonts/Carlito/Carlito-Bold.ttf"
	];

	const ukPageStructuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Join Prime Members for Cleaner Amazon – Europe",
		"description": "Join the movement from the EU! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today.",
		"url": "https://primemembers.earth/eu",
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
					"target": "https://primemembers.earth/eu",
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
					"name": "Join – United Kingdom",
					"item": "https://primemembers.earth/eu"
				}
			]
		}
	};

	function openEmailPopup() {
		trackCampaignAction('join_email_popup_open', { country: 'Europe', page: 'eu' });
		showPopup = true;
		document.body.style.overflow = 'hidden';
	}

	function trackWhatsApp() {
		trackSocialShare('whatsapp', 'https://whatsapp.com/channel/0029VbCSWS0Lo4haOx1AWF0w');
		trackCampaignAction('join_whatsapp_click', { country: 'Europe', page: 'eu' });
		trackMetaPixelWhatsAppClick('eu', 'Europe');
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

<Meta 
	title="Join Prime Members for Cleaner Amazon – Europe" 
	description="Join the movement from the EU! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today." 
	url="https://primemembers.earth/eu" 
	keywords="Amazon Prime EU, join campaign, climate action, electric delivery, renewable energy, environmental activism"
	ogType="website"
	structuredData={ukPageStructuredData}
	{preloadFont} 
/>
<Header />

<!-- Popup Modal with UK country pre-population -->
<PopupModal bind:show={showPopup} baseUrl={ukIframeBaseUrl} />

<!-- Hero Section with Video Background -->
<section class="hero">
	<div class="hero-background">
		<video 
			bind:this={heroVideo}
			autoplay 
			muted 
			playsinline 
			poster="{base}/hero-uk.webp"
			class="hero-video"
		>
			<source src="{base}/bg_video_uk.mp4" type="video/mp4">
		</video>
	</div>
	
	<div class="hero-content">
		<div class="hero-text">
			<h1>Join Prime members across the EU for cleaner Amazon.</h1>
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

		<!-- UK CTA Block -->
		<div class="uk-cta">
			<h3>Ready to activate your Prime member power?</h3>
			<div class="cta-buttons">
				<a 
					href="https://whatsapp.com/channel/0029VbCSWS0Lo4haOx1AWF0w" 
					target="_blank" 
					rel="noopener noreferrer"
					class="btn btn-whatsapp"
					onclick={trackWhatsApp}
				>
					<svg class="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
					</svg>
					Join on WhatsApp
				</a>
				<button 
					class="btn btn-email"
					onclick={openEmailPopup}
				>
					<svg class="email-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
					Join with Email
				</button>
			</div>
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

<!-- Stories Carousel -->
<StoriesCarousel />

<!-- Tape Transition -->
<TapeTransition />

<!-- How Section -->
<section class="how">
	<div class="container">
		<h2>Here is how we move Amazon</h2>
		<p class="how-subtitle">Recent polling showed 4 out of 5 Prime members want Amazon to do better on climate. Let's use our collective voice to demand a more ethical, sustainable Amazon.</p>
		
		<div class="action-grid">
			<div class="action-item">
				<div class="action-icon"><img src="{base}/marker.svg" alt=""></div>
				<h3>Build Power</h3>
				<p>Let's reach as many Prime members as possible. Share <span class="highlight">your unique link</span> and spread the word.</p>
			</div>
			
			<div class="action-item">
				<div class="action-icon"><img src="{base}/marker.svg" alt=""></div>
				<h3>Get Noticed</h3>
				<p>We need to make sure Amazon hears our demands loud and clear. We have <span class="highlight">just the tools</span> for the job.</p>
			</div>
			
			<div class="action-item">
				<div class="action-icon"><img src="{base}/marker.svg" alt=""></div>
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
		margin-top: 5rem;
	}
	
	.hero-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		opacity: 0.95;
	}

	/* UK CTA Block */
	.uk-cta {
		background: rgba(255, 255, 255, 0.98);
		border: 10px solid #ff9f2e;
		box-shadow: 0 8px 32px rgba(0,0,0,0.3);
		padding: 2.5rem 2rem;
		color: #000;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-self: center;
		margin-top: 5rem;
	}

	.uk-cta h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.5rem, 3vw, 1.5rem);
		line-height: 1.2;
		margin: 0;
		color: #000;
	}

	.cta-buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.btn {
		padding: 1rem 1.5rem;
		border: none;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		font-size: 1.2rem;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		border-radius: 0px;
		width: 100%;
	}

	.btn-whatsapp {
		background: #25D366;
		color: white;
	}

	.btn-whatsapp:hover {
		background: #1db954;
		transform: translateY(-2px);
	}

	.btn-email {
		background: #1298ff;
		color: white;
	}

	.btn-email:hover {
		background: #0a7ee0;
		transform: translateY(-2px);
	}

	.whatsapp-icon,
	.email-icon {
		width: 1.4em;
		height: 1.4em;
		fill: currentColor;
		flex-shrink: 0;
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
		font-size: 1.6rem;
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
		background: white url('/bg2.png');
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
		width: 40px;
		float: left;
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
	
	.btn-secondary {
		background: transparent;
		color: #ff9f2e;
		border: 2px solid #ff9f2e;
		border-radius: 0px;
		padding: 1rem 2rem;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
		width: auto;
		flex-direction: row;
	}
	
	.btn-secondary:hover {
		background: #ff9f2e;
		color: #000;
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
		
		.uk-cta {
			order: 3;
			margin-top: 0;
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

		.uk-cta {
			padding: 1.5rem;
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
