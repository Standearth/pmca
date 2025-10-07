<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";

	const title = "Get Started - Prime Members for Cleaner Amazon";
	const description = "Your Prime member power has been activated! Share your voice and help mobilize more Prime members.";
	
	let showDonationModal = $state(false);
	let donationAmount = $state(25);
	let uniqueShareUrl = $state('');
	let hasRef = $state(false);
	let refId = $state('');
	let copySuccess = $state(false);
	let typeformSrc = $state('');
	
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
			// Set typeform URL with ref parameter
			typeformSrc = `https://primemembers.typeform.com/to/YOUR_FORM_ID?ref=${encodeURIComponent(refParam)}`;
		} else {
			// Set default typeform URL without ref parameter
			typeformSrc = 'https://primemembers.typeform.com/to/YOUR_FORM_ID';
		}
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
			<p class="hero-subtitle">You've joined thousands of Prime members demanding a cleaner Amazon. Now let's amplify your voice and mobilize more members to join our movement.</p>
			
			{#if hasRef && uniqueShareUrl}
				<div class="share-link-box">
					<h3>Your Unique Share Link</h3>
					<div class="link-container">
						<input type="text" value={uniqueShareUrl} readonly class="share-input" />
						<button onclick={copyToClipboard} class="copy-btn" class:success={copySuccess}>
							{copySuccess ? '✓ Copied!' : 'Copy'}
						</button>
					</div>
					<p class="share-note">Share this link to get credit for new supporters you recruit!</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Social Sharing Section -->
<section class="social-sharing">
	<div class="container">
		<h2>Spread the word on social media</h2>
		<p class="section-intro">Help us reach more Prime members by sharing our campaign on your social networks.</p>
		
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
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
					</svg>
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
	</div>
</section>

<!-- Survey Section -->
<section class="survey">
	<div class="container">
		<h2>Tell us more about your priorities</h2>
		<p class="section-intro">Help us understand what matters most to you as a Prime member so we can better represent your voice.</p>
		
		<div class="survey-container">
			{#if typeformSrc}
				<iframe src={typeformSrc} title="Prime Member Survey" class="survey-iframe"></iframe>
			{/if}
		</div>
	</div>
</section>

<!-- Tape Transition -->
<div class="tape-section">
	<img src="{base}/tape.png" alt="Tape" class="tape-image" />
</div>

<!-- Donation Section -->
<section class="donation">
	<div class="container">
		<h2>Power our campaign with a donation</h2>
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
		max-width: 800px;
		padding: 0 2rem;
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
		padding: 2rem;
		margin-top: 2rem;
		backdrop-filter: blur(10px);
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
	
	.social-icon svg {
		width: 100%;
		height: 100%;
	}
	
	.facebook { background: #1877F2; }
	.bluesky { background: #1DA1F2; }
	.email { background: #EA4335; }
	.whatsapp { background: #25D366; }
	.linkedin { background: #0A66C2; }
	
	/* Tape Section */
	.tape-section {
		width: 100%;
		overflow: hidden;
	}
	
	.tape-image {
		width: 100%;
		min-width: 1600px;
		height: auto;
		display: block;
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
		background: white;
		border-radius: 12px;
		overflow: hidden;
		height: 600px;
		box-shadow: 0 8px 32px rgba(0,0,0,0.2);
	}
	
	.survey-iframe {
		width: 100%;
		height: 100%;
		border: none;
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
		
		.social-buttons {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.social-btn {
			min-width: auto;
			font-size: 0.9rem;
		}
		
		.survey-container {
			height: 500px;
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
