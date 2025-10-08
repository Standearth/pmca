<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import TapeTransition from "$components/TapeTransition.svelte";
	import PopupModal from "$components/PopupModal.svelte";

	const title = "Cancel Prime - Prime Members for Cleaner Amazon";
	const description = "Learn how to cancel your Prime membership and use your consumer power for good.";
	
	let showPopup = $state(false);
	
	function openPopup() {
		showPopup = true;
		document.body.style.overflow = 'hidden';
	}
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
			<h1>Your Membership, Your Choice</h1>
			<p class="hero-subtitle">Amazon recently <a class="accent-orange" href="https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon" target="_blank" >got into BIG trouble</a> for making Prime cancellation deliberately difficult. If the right step for you is cancelling your membership, here is how to do it.</p>
	
		</div>
	</div>
</section>

<!-- Cancellation Guide Section -->
<section class="cancellation-guide">
	<div class="container">
		<h2>How to Cancel Your Prime Membership</h2>
		<p class="guide-intro">Thanks to the FTC settlement, the process is now more straightforward. Here's how to do it:</p>
		
		<div class="steps-container">
			<div class="step">
				<div class="step-number">1</div>
				<div class="step-content">
					<h3>Go to Your Amazon Account</h3>
					<p>Sign in to your Amazon account and go to "Manage Your Prime Membership" or visit <a href="https://www.amazon.com/gp/your-account/manage-prime" target="_blank">amazon.com/gp/your-account/manage-prime</a></p>
				</div>
			</div>
			
			<div class="step">
				<div class="step-number">2</div>
				<div class="step-content">
					<h3>Select "End Membership"</h3>
					<p>Look for the "End Membership" or "Cancel Prime" option. This should now be clearly visible thanks to the FTC settlement.</p>
				</div>
			</div>
			
			<div class="step">
				<div class="step-number">3</div>
				<div class="step-content">
					<h3>Choose Your Cancellation Option</h3>
					<p>Amazon will offer you two options:</p>
					<ul>
						<li><strong>End immediately:</strong> Cancel now and lose remaining benefits</li>
						<li><strong>End at current period:</strong> Keep benefits until your next billing date</li>
					</ul>
				</div>
			</div>
			
			<div class="step">
				<div class="step-number">4</div>
				<div class="step-content">
					<h3>Confirm Your Cancellation</h3>
					<p>Amazon may offer discounts or alternatives to keep you subscribed. If you want to cancel, stick to your decision and confirm the cancellation.</p>
				</div>
			</div>
		</div>
		
		<div class="alternative-box">
			<h3>💡 Alternative: Use Your Phone</h3>
			<p>You can also call Amazon customer service at <strong>1-888-280-4331</strong> and ask them to cancel your Prime membership. They are required to make this process simple and straightforward.</p>
		</div>
	</div>
</section>
<!-- Tape Transition -->
<TapeTransition />


<!-- Call to Action Section -->
<section class="cta">
	<div class="container">
		<h2>Not ready to cancel? User your Prime member power for good.</h2>
		<p>Use your Prime membership power to demand a cleaner Amazon. Join thousands of other members who are pushing for real change.</p>
		<div class="cta-buttons">
			<button class="btn btn-cta large" onclick={openPopup}>Keep Prime, Demand Change</button>
			<p class="small-text">You can always cancel later if Amazon doesn't listen</p>
		</div>
	</div>
</section>

<!-- Popup Modal -->
<PopupModal bind:show={showPopup} baseUrl="https://act.stand.earth/page/89116/petition/1" />

<Footer />

<style>
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
		padding-top: 3rem;
		line-height: 1.2;
	}
	
	.hero-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		opacity: 0.9;
	}
	
	.hero-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

    .accent-orange {
		text-decoration: underline;
        color:#fff;
		text-decoration-color: #ff9f2e;
		text-underline-offset: 2px;
		text-decoration-thickness: 4px;
		text-decoration-style: solid;
	}
	
	/* Button Styles */
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
		border-radius: 0px;
	}
	
	.btn-primary:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}
	
	.btn-cta {
		background: #ff9f2e;
		color: #000;
		font-size: 1.1rem;
		padding: 1rem 2rem;
		border-radius: 0px;
	}
	
	.btn-cta:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}
	
	.btn-cta.large {
		font-size: 1.3rem;
		padding: 1.2rem 3rem;
	}
	
	/* Container */
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	/* FTC Settlement Section */
	.ftc-settlement {
		background: white;
		padding: 4rem 0;
	}
	
	.ftc-settlement h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		color: #ff533d;
		margin-bottom: 1.5rem;
		text-align: center;
	}
	
	.section-intro {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		color: #666;
		text-align: center;
		max-width: 800px;
		margin: 0 auto 3rem auto;
	}
	
	.settlement-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.settlement-card {
		background: white;
		border: 3px solid #ff533d;
		border-radius: 12px;
		padding: 2rem;
		text-align: left;
	}
	
	.settlement-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		display: block;
	}
	
	.settlement-card h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.4rem;
		color: black;
		margin-bottom: 1rem;
	}
	
	.settlement-card p {
		font-family: 'Carlito', sans-serif;
		line-height: 1.6;
		color: #666;
		margin-bottom: 1rem;
	}
	
	.settlement-card ul {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}
	
	.settlement-card li {
		font-family: 'Carlito', sans-serif;
		line-height: 1.6;
		color: #666;
		margin-bottom: 0.5rem;
	}
	
	.learn-link {
		font-family: 'Carlito', sans-serif;
		color: #1298ff;
		text-decoration: none;
		font-weight: bold;
		transition: opacity 0.3s ease;
	}
	
	.learn-link:hover {
		opacity: 0.8;
	}
	
	/* Cancellation Guide Section */
	.cancellation-guide {
		background: #f8f9fa;
		padding: 4rem 0;
	}
	
	.cancellation-guide h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		color: black;
		margin-bottom: 1.5rem;
		text-align: center;
	}
	
	.guide-intro {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		color: #666;
		text-align: center;
		max-width: 800px;
		margin: 0 auto 3rem auto;
	}
	
	.steps-container {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.step {
		display: flex;
		align-items: flex-start;
		margin-bottom: 2rem;
		gap: 1.5rem;
	}
	
	.step-number {
		background: #1298ff;
		color: white;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.2rem;
		font-weight: bold;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	
	.step-content h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		color: black;
		margin-bottom: 0.5rem;
	}
	
	.step-content p {
		font-family: 'Carlito', sans-serif;
		line-height: 1.6;
		color: #666;
		margin-bottom: 0.5rem;
	}
	
	.step-content ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
	}
	
	.step-content li {
		font-family: 'Carlito', sans-serif;
		line-height: 1.6;
		color: #666;
		margin-bottom: 0.25rem;
	}
	
	.step-content a {
		color: #1298ff;
		text-decoration: underline;
	}
	
	.alternative-box {
		background: #1298ff;
		color: white;
		padding: 2rem;
		border-radius: 12px;
		margin-top: 3rem;
		text-align: center;
	}
	
	.alternative-box h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}
	
	.alternative-box p {
		font-family: 'Carlito', sans-serif;
		line-height: 1.6;
		margin: 0;
	}
	
	/* Better Choice Section */
	.better-choice {
		background: #1298ff;
		color: white;
		padding: 4rem 0;
	}
	
	.better-choice h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 2rem;
		text-align: center;
	}
	
	.choice-content {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.choice-text p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}
	
	.choice-reasons {
		margin: 2rem 0;
		padding-left: 1.5rem;
	}
	
	.choice-reasons li {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}
	
	.emphasis {
		font-size: 1.3rem !important;
		font-weight: bold;
		text-align: center;
		margin-top: 2rem !important;
	}
	
	/* Call to Action Section */
	.cta {
		background: white;
		padding: 4rem 0;
		text-align: center;
	}
	
	.cta h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		color: black;
		margin-bottom: 1rem;
	}
	
	.cta p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.cta-buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	
	.small-text {
		font-family: 'Carlito', sans-serif;
		font-size: 0.9rem;
		color: #999;
		font-style: italic;
		margin: 0;
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
			margin-bottom: 1rem;
		}
		
		.hero-subtitle {
			font-size: 1rem;
			margin-bottom: 1.5rem;
		}
		
		.hero-content {
			padding: 0 1rem;
		}
		
		.hero-buttons {
			flex-direction: column;
			align-items: center;
			gap: 0.75rem;
		}
		
		.btn {
			width: 200px;
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		
		.settlement-grid {
			grid-template-columns: 1fr;
		}
		
		.container {
			padding: 0 1rem;
		}
		
		.step {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}
		
		.step-number {
			margin: 0 auto;
		}
		
		.ftc-settlement,
		.cancellation-guide,
		.better-choice,
		.cta {
			padding: 3rem 0;
		}
	}
</style>
