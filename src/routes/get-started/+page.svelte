<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import TapeTransition from "$components/TapeTransition.svelte";

	const title = "Get Started - Prime Members for Cleaner Amazon";
	const description = "Your Prime member power has been activated! Share your voice and help mobilize more Prime members.";
	
	let showDonationModal = $state(false);
	let donationAmount = $state(25);
	let uniqueShareUrl = $state('');
	let hasRef = $state(false);
	let refId = $state('');
	let copySuccess = $state(false);
	let typeformId = $state('');
	let urlHits = $state(0);
	let showBadge = $state(false);
	
	const API_ENDPOINT = "https://amazonpri.me/shorten";
	const LONG_URL_BASE = "https://primemembers.earth/?ref=";
	const BASE_SHARE_URL = "https://primemembers.earth/";
	
	function openDonationModal(amount) {
		donationAmount = amount;
		showDonationModal = true;
		document.body.style.overflow = 'hidden';
	}
	
	function closeDonationModal() {
		showDonationModal = false;
		document.body.style.overflow = 'auto';
	}
	
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(uniqueShareUrl);
			copySuccess = true;
			setTimeout(() => {
				copySuccess = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}
	
	function getShareUrl(platform) {
		const shareUrl = hasRef ? uniqueShareUrl : BASE_SHARE_URL;
		const text = "Prime members want Amazon to do more on climate. Join thousands of us demanding change!";
		
		switch (platform) {
			case 'facebook':
				return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
			case 'bluesky':
				return `https://bsky.app/intent/compose?text=${encodeURIComponent(text + ' ' + shareUrl)}`;
			case 'email':
				return `mailto:?subject=${encodeURIComponent('Join the Prime Members for Cleaner Amazon campaign')}&body=${encodeURIComponent(text + '\n\n' + shareUrl)}`;
			case 'whatsapp':
				return `https://wa.me/?text=${encodeURIComponent(text + ' ' + shareUrl)}`;
			case 'linkedin':
				return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
			default:
				return shareUrl;
		}
	}
	
	async function generateUniqueUrl(supporterId) {
		const fullUrl = LONG_URL_BASE + supporterId;
		const payload = {
			unique_id: supporterId,
			full_url: fullUrl
		};
		
		try {
			const response = await fetch(API_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload)
			});
			
			if (response.ok) {
				const data = await response.json();
				if (data.short_url) {
					uniqueShareUrl = data.short_url;
					// Handle hits count from API response
					if (data.hits !== undefined) {
						urlHits = data.hits;
						if (urlHits > 0) {
							showBadge = true;
						}
					}
				} else {
					console.error('API returned success but missing short_url');
					uniqueShareUrl = fullUrl; // fallback to long URL
				}
			} else {
				console.error('API call failed:', response.status, response.statusText);
				uniqueShareUrl = fullUrl; // fallback to long URL
			}
		} catch (error) {
			console.error('Error calling shortener API:', error);
			uniqueShareUrl = fullUrl; // fallback to long URL
		}
	}
	
	onMount(() => {
		// Extract ref parameter from URL
		const urlParams = new URLSearchParams(window.location.search);
		const refParam = urlParams.get('ref');
		
		if (refParam) {
			refId = refParam;
			hasRef = true;
			generateUniqueUrl(refParam);
			// Set typeform ID with ref parameter
			typeformId = `01K70GM4RX0NA2YJG92V2E4K4W?ref=${encodeURIComponent(refParam)}`;
		} else {
			// Set default typeform ID without ref parameter
			typeformId = '01K70GM4RX0NA2YJG92V2E4K4W';
		}
		
		// Load Typeform embed script
		const script = document.createElement('script');
		script.src = '//embed.typeform.com/next/embed.js';
		script.async = true;
		document.head.appendChild(script);
	});
</script>

<Meta {title} {description} />

<!-- Hero Section -->
<section class="hero">
	<div class="hero-background">
		<div class="hero-overlay"></div>
		<img src="{base}/hero-bg.webp" alt="Background" class="hero-image" />
	</div>
	
	<div class="hero-content">
		<div class="hero-text">
			<h1>Your Prime member power has been activated!</h1>
			<p class="hero-subtitle">You've joined thousands of Prime members demanding a cleaner Amazon.</p> 
			<div class="share-link-box">
					<h3>Our strength will come from numbers. Let's amplify your voice and mobilize more Prime members to join our movement.</h3>
			</div>
			
		</div>
	</div>
</section>

<!-- Social Sharing Section -->
<section class="social-sharing">
	<div class="container">
		<h2>Step 1: Spread the word</h2>
		<p class="section-intro">Help us reach more Prime members by sharing our campaign on your social networks.</p>
		{#if hasRef && uniqueShareUrl}
				<div class="share-link-box">
					<h3>Your Unique Share Link</h3>
					<div class="link-container">
						<input type="text" value={uniqueShareUrl} readonly class="share-input" />
						<button onclick={copyToClipboard} class="copy-btn" class:success={copySuccess}>
							{copySuccess ? '✓ Copied!' : 'Copy'}
						</button>
					</div>
					<p class="share-note">Share this link to see how many other Prime members you can bring to this campaign!</p>
				</div>
			{/if}
		<div class="social-buttons">
			<a href={getShareUrl('facebook')} target="_blank" class="social-btn facebook">
				<span class="social-icon">
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
					</svg>
				</span>
				<span>Facebook</span>
			</a>
			<a href={getShareUrl('bluesky')} target="_blank" class="social-btn bluesky">
				<span class="social-icon">
					<img src="{base}/Bluesky_Logo_White.svg" alt="Bluesky" />
				</span>
				<span>Bluesky</span>
			</a>
			<a href={getShareUrl('email')} class="social-btn email">
				<span class="social-icon">
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
				</span>
				<span>Email</span>
			</a>
			<a href={getShareUrl('whatsapp')} target="_blank" class="social-btn whatsapp">
				<span class="social-icon">
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
					</svg>
				</span>
				<span>WhatsApp</span>
			</a>
			<a href={getShareUrl('linkedin')} target="_blank" class="social-btn linkedin">
				<span class="social-icon">
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
				</span>
				<span>LinkedIn</span>
			</a>
		</div>
		{#if showBadge && urlHits > 0}
			<div class="engagement-badge">
				<div class="badge-content">
					<div class="badge-icon">🎉</div>
					<div class="badge-text">
						<div class="badge-number">{urlHits}</div>
						<div class="badge-label">{urlHits === 1 ? 'person has' : 'people have'} clicked your link!</div>
					</div>
				</div>
				<div class="badge-glow"></div>
			</div>
		{/if}
	</div>
</section>

<!-- Survey Section -->
<section class="survey">
	<div class="container">
		<h2>Step 2: Tell us more about your priorities</h2>
		<p class="section-intro">Help us understand what matters most to you as a Prime member so we can better represent your voice.</p>
		
		<div class="survey-container">
			{#if typeformId}
				<div data-tf-live={typeformId}></div>
			{/if}
		</div>
	</div>
</section>

<!-- Tape Transition -->
<TapeTransition />

<!-- Donation Section -->
<section class="donation">
	<div class="container">
		<h2>Step 3: Power our campaign with a donation</h2>
		<p class="section-intro">Your contribution helps us reach more Prime members and build the pressure needed to change Amazon.</p>
		
		<div class="donation-grid">
			<button onclick={() => openDonationModal(25)} class="donation-btn">$25</button>
			<button onclick={() => openDonationModal(50)} class="donation-btn">$50</button>
			<button onclick={() => openDonationModal(75)} class="donation-btn">$75</button>
			<button onclick={() => openDonationModal(100)} class="donation-btn">$100</button>
			<button onclick={() => openDonationModal(250)} class="donation-btn">$250</button>
			<button onclick={() => openDonationModal(500)} class="donation-btn">$500</button>
		</div>
	</div>
</section>

<!-- Donation Modal -->
<div class="modal-overlay" class:show={showDonationModal} onclick={closeDonationModal}>
	<div class="modal-content" onclick={(e) => e.stopPropagation()}>
		<button class="modal-close" onclick={closeDonationModal}>&times;</button>
		<iframe 
			src="https://act.stand.earth/page/77077/donate/1?transaction.donationAmt={donationAmount}"
			title="Make a donation"
			class="donation-iframe"
		></iframe>
	</div>
</div>

<Footer />

<style>
	/* Hero Section */
	.hero {
		position: relative;
		height: 70vh;
		min-height: 500px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: center;
		padding-top: 6rem;
	}
	
	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	
	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 1;
	}
	
	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 1000px;
		padding: 0 2rem;
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
	}
	
	.hero-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		opacity: 0.9;
	}
	
	.share-link-box {
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid #ff9f2e;
		border-radius: 12px;
		padding: 1rem;
		margin-top: 2rem;
		backdrop-filter: blur(10px);
		max-width:900px;
		margin-left:auto;
		margin-right:auto;
	}
	
	.share-link-box h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #ff9f2e;
	}
	
	.link-container {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	.share-input {
		flex: 1;
		padding: 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-family: 'Carlito', sans-serif;
	}
	
	.share-input:focus {
		outline: none;
		border-color: #ff9f2e;
	}
	
	.copy-btn {
		padding: 0.75rem 1.5rem;
		background: #ff9f2e;
		color: black;
		border: none;
		border-radius: 6px;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
		white-space: nowrap;
	}
	
	.copy-btn:hover {
		background: #e88a1a;
		transform: translateY(-1px);
	}
	
	.copy-btn.success {
		background: #28a745;
		color: white;
	}
	
	.share-note {
		font-family: 'Carlito', sans-serif;
		font-size: 0.9rem;
		opacity: 0.8;
		margin: 0;
	}
	
	/* Container */
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	/* Social Sharing Section */
	.social-sharing {
		background: white;
		padding: 4rem 0;
	}
	
	.social-sharing h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		color: black;
		margin-bottom: 1rem;
		text-align: center;
	}
	
	.section-intro {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		color: #666;
		text-align: center;
		max-width: 600px;
		margin: 0 auto 3rem auto;
	}
	
	.social-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
	
	.social-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		font-size: 1rem;
		color: white;
		transition: all 0.3s ease;
		min-width: 120px;
		justify-content: center;
	}
	
	.social-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.2);
	}
	
	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
	}
	
	.social-icon svg,
	.social-icon img {
		width: 100%;
		height: 100%;
	}
	
	.facebook { background: #1877F2; }
	.bluesky { background: #1DA1F2; }
	.email { background: #EA4335; }
	.whatsapp { background: #25D366; }
	.linkedin { background: #0A66C2; }
	
	/* Engagement Badge */
	.engagement-badge {
		position: relative;
		background: linear-gradient(135deg, #ff9f2e 0%, #ffb84d 50%, #ff9f2e 100%);
		border: 3px solid #fff;
		border-radius: 20px;
		padding: 1.5rem 2rem;
		margin: 2rem auto 3rem auto;
		max-width: 400px;
		box-shadow: 0 8px 25px rgba(255, 159, 46, 0.4);
		animation: badgePulse 2s ease-in-out infinite;
		overflow: hidden;
	}
	
	.badge-content {
		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		z-index: 2;
	}
	
	.badge-icon {
		font-size: 2.5rem;
		animation: iconBounce 2s ease-in-out infinite;
	}
	
	.badge-text {
		flex: 1;
	}
	
	.badge-number {
		font-family: 'AmsiPro', sans-serif;
		font-size: 2rem;
		float:left;
		display:inline;
		font-weight: bold;
		color: #000;
		margin-right:15px;
		line-height: 1;
		text-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
	
	.badge-label {
		font-family: 'Carlito', sans-serif;
		font-size: 1rem;
		float:left;
		display:inline;
		color: #000;
		font-weight: 600;
		margin-top: 0.25rem;
	}
	
	.badge-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
		animation: glowRotate 3s linear infinite;
		pointer-events: none;
	}
	
	@keyframes badgePulse {
		0%, 100% {
			transform: scale(1);
			box-shadow: 0 8px 25px rgba(255, 159, 46, 0.4);
		}
		50% {
			transform: scale(1.02);
			box-shadow: 0 12px 35px rgba(255, 159, 46, 0.6);
		}
	}
	
	@keyframes iconBounce {
		0%, 100% {
			transform: translateY(0) rotate(0deg);
		}
		25% {
			transform: translateY(-5px) rotate(-5deg);
		}
		75% {
			transform: translateY(-2px) rotate(5deg);
		}
	}
	
	@keyframes glowRotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	
	/* Survey Section */
	.survey {
		background: #1298ff;
		color: white;
		padding: 4rem 0;
	}
	
	.survey h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 1rem;
		text-align: center;
	}
	
	.survey .section-intro {
		color: white;
		opacity: 0.9;
	}
	
	.survey-container {
		border-radius: 0px;
		overflow: hidden;
	}
	
	.survey-container > div {
		width: 100%;
		min-height: 600px;
	}
	
	/* Donation Section */
	.donation {
		background: white;
		padding: 4rem 0;
	}
	
	.donation h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		color: black;
		margin-bottom: 1rem;
		text-align: center;
	}
	
	.donation-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
		max-width: 600px;
		margin: 0 auto;
	}
	
	.donation-btn {
		background: #ff9f2e;
		color: black;
		border: none;
		border-radius: 8px;
		padding: 2rem 1rem;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.5rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.donation-btn:hover {
		background: #e88a1a;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.2);
	}
	
	/* Modal Styles */
	.modal-overlay {
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
	
	.modal-overlay.show {
		opacity: 1;
		visibility: visible;
	}
	
	.modal-content {
		position: relative;
		width: 90%;
		max-width: 800px;
		height: 80%;
		background: white;
		border-radius: 12px;
		border: 4px solid #ff9f2e;
		overflow: hidden;
	}
	
	.modal-close {
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
	
	.donation-iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
	
	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.hero {
			height: auto;
			min-height: 70vh;
			padding-top: 8rem;
			padding-bottom: 4rem;
		}
		
		.hero-text h1 {
			font-size: clamp(1.5rem, 8vw, 2.5rem);
		}
		
		.hero-subtitle {
			font-size: 1rem;
		}
		
		.share-link-box {
			padding: 1.5rem;
		}
		
		.link-container {
			flex-direction: column;
		}
		
		.copy-btn {
			align-self: stretch;
		}
		
		.engagement-badge {
			padding: 1rem 1.5rem;
			margin: 1.5rem auto 2rem auto;
		}
		
		.badge-content {
			gap: 0.75rem;
		}
		
		.badge-icon {
			font-size: 2rem;
		}
		
		.badge-number {
			font-size: 1.5rem;
		}
		
		.badge-label {
			font-size: 0.9rem;
		}
		
		.social-buttons {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.social-btn {
			min-width: auto;
			font-size: 0.9rem;
		}
		
		.survey-container {
			min-height: 500px;
		}
		
		.survey-container > div {
			min-height: 500px;
		}
		
		.donation-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.modal-content {
			width: 95%;
			height: 90%;
		}
		
		.container {
			padding: 0 1rem;
		}
		
		.social-sharing,
		.survey,
		.donation {
			padding: 3rem 0;
		}
	}
	
	@media (max-width: 480px) {
		.hero {
			padding-top: 10rem;
		}
		
		.donation-grid {
			grid-template-columns: repeat(3, 1fr);
		}
		
		.donation-btn {
			padding: 1.5rem 0.5rem;
			font-size: 1.2rem;
		}
	}
</style>
