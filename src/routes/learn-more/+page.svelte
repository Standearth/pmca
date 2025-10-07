<script>
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";

	const title = "Learn More - Prime Members for Cleaner Amazon";
	const description = "Learn more about how Prime members can push Amazon to do more on climate.";
	
	let showPopup = $state(false);
	
	function openPopup() {
		showPopup = true;
		document.body.style.overflow = 'hidden';
	}
	
	function closePopup() {
		showPopup = false;
		document.body.style.overflow = 'auto';
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
			<h1>The full story: Why Prime members have the power to change Amazon</h1>
			<p class="hero-subtitle">Amazon has the resources to lead the world toward a clean future. Here's why your membership matters—and what we can achieve together.</p>
			<div class="hero-buttons">
				<button class="btn btn-primary" onclick={openPopup}>Join the movement</button>
			</div>
		</div>
	</div>
</section>

<!-- The Problem Section -->
<section class="problem">
	<div class="container">
		<h2>The Problem: A Dirty Amazon</h2>
		<p class="section-intro">This is what we mean by a dirty Amazon: deliveries that pollute, warehouses and data centers powered by fossil fuels, and corporate money propping up climate denial politics.</p>
		
		<div class="problem-grid">
			<div class="problem-card">
				<div class="problem-icon">🚚</div>
				<h3>Prime Polluter</h3>
				<p>According to Stand.earth's 2024 Prime Polluter report, Amazon's delivery operations alone generated <strong>71 million metric tons of carbon emissions in 2022</strong>. That's more than the annual emissions of Austria. Much of this comes from the company's massive last-mile delivery fleet.</p>
				<a href="https://publications.stand.earth/prime-polluter" target="_blank" class="learn-link">Read the full report →</a>
			</div>
			
			<div class="problem-card">
				<div class="problem-icon">⚡</div>
				<h3>The Renewable Energy Illusion</h3>
				<p>Amazon claims its data centers run on clean energy. Research from the Amazon Employees for Climate Justice (AECJ) shows the company leans heavily on <strong>Renewable Energy Credits (RECs)</strong> to make this claim. These are accounting tricks that let companies pretend to be green while still burning fossil fuels.</p>
				<a href="https://stand.earth/press-releases/amazons-2024-sustainability-report-reveals-companys-direct-emissions-have-increased-162-since-announcing-climate-pledge-in-2019/" target="_blank" class="learn-link">Read the analysis →</a>
			</div>
			
			<div class="problem-card">
				<div class="problem-icon">👥</div>
				<h3>Prime Members Want Change</h3>
				<p>A Morning Consult poll found that <strong>80% of Prime members want Amazon to do more</strong> to cut delivery and transportation emissions. This isn't just activists talking. It's Amazon's most loyal customers.</p>
				<a href="https://stand.earth/press-releases/new-morning-consult-poll-finds-80-of-prime-members-want-amazon-to-take-stronger-action-on-delivery-and-transportation-emissions/" target="_blank" class="learn-link">Read the poll results →</a>
			</div>
		</div>
	</div>
</section>

<!-- Good News Section -->
<section class="good-news">
	<div class="container">
		<h2>The Good News: Real Solutions Exist</h2>
		<div class="good-news-content">
			<div class="good-news-text">
				<p>Amazon has the scale, innovation, and resources to lead the world toward a clean future. With the same boldness it used to redefine retail, Amazon could:</p>
				<ul class="solutions-list">
					<li><strong>Electrify its global delivery fleet.</strong></li>
					<li><strong>Power every data center and warehouse with real renewable energy</strong>, not accounting tricks</li>
					<li><strong>Use its influence to support solutions</strong> that reflect the needs and values of communities</li>
				</ul>
				<p class="emphasis">The technology exists. The money exists. The only thing missing? The will. And that's where Prime members come in.</p>
			</div>
		</div>
	</div>
</section>
<!-- Tape Transition -->
<div class="tape-section">
	<img src="{base}/tape.png" alt="Tape" class="tape-image" />
</div>

<!-- Our Demands Section -->
<section class="demands">
	<div class="container">
		<h2>Our Demands</h2>
		<p class="demands-intro">We aren't just customers. As Prime members, we fund Amazon's business and shape its reputation. Together, we're calling for:</p>
		
		<div class="demands-grid">
			<div class="demand-card">
				<div class="demand-number">1</div>
				<h3>Zero-Emission Deliveries by 2030</h3>
				<p>Amazon must commit to transitioning its entire delivery network to zero-emission vehicles, starting with the elimination of emissions from last-mile fleets by 2030.</p>
			</div>
			
			<div class="demand-card">
				<div class="demand-number">2</div>
				<h3>Full Renewable Energy Across Operations</h3>
				<p>Beyond delivery fleets, Amazon must power all of its warehouses, data centers, and offices with real, verifiable renewable energy. This means no reliance on offsets or accounting tricks, but a genuine transition to clean power that aligns with global climate goals.</p>
			</div>
			
			<div class="demand-card">
				<div class="demand-number">3</div>
				<h3>Respect for Local Communities</h3>
				<p>Amazon must operate in ways that respect and protect the health, safety, and rights of the communities where it does business. This includes addressing environmental justice concerns, ensuring fair labor practices, and preventing pollution and harm in frontline neighborhoods.</p>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action Section -->
<section class="cta">
	<div class="container">
		<h2>Ready to use your Prime Power?</h2>
		<p>Join thousands of Prime members who are demanding a cleaner Amazon. Your voice matters.</p>
		<button class="btn btn-cta large" onclick={openPopup}>Join the Movement</button>
	</div>
</section>

<!-- Popup Modal -->
{#if showPopup}
	<div class="popup-overlay" onclick={closePopup}>
		<div class="popup-content" onclick={(e) => e.stopPropagation()}>
			<button class="popup-close" onclick={closePopup}>&times;</button>
			<iframe 
				src="https://act.stand.earth/page/88799/petition/1{typeof window !== 'undefined' ? window.location.search : ''}"
				title="Join the campaign"
				class="popup-iframe"
				loading="eager"
			></iframe>
		</div>
	</div>
{/if}

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
		padding-top:3rem;
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
	
	.btn-secondary {
		background: transparent;
		color: #ff9f2e;
		border: 2px solid #ff9f2e;
		border-radius: 0px;
	}
	
	.btn-secondary:hover {
		background: #ff9f2e;
		color: #000;
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
	
	/* The Problem Section */
	.problem {
		background: white;
		padding: 4rem 0;
	}
	
	.problem h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		color: black;
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
	
	.problem-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.problem-card {
		background: white;
		border: 3px solid #1298ff;
		border-radius: 12px;
		padding: 2rem;
		text-align: left;
	}
	
	.problem-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		display: block;
	}
	
	.problem-card h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.4rem;
		color: black;
		margin-bottom: 1rem;
	}
	
	.problem-card p {
		font-family: 'Carlito', sans-serif;
		line-height: 1.6;
		color: #666;
		margin-bottom: 1.5rem;
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
	
	/* Good News Section */
	.good-news {
		background: #1298ff;
		color: white;
		padding: 4rem 0;
	}
	
	.good-news h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 2rem;
		text-align: center;
	}
	
	.good-news-content {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.good-news-text p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}
	
	.solutions-list {
		margin: 2rem 0;
		padding-left: 1.5rem;
	}
	
	.solutions-list li {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}
	
	.emphasis {
		font-size: 1.3rem !important;
		font-weight: bold;
		text-align: center;
	}
	
	/* Our Demands Section */
	.demands {
		background: white;
		padding: 4rem 0;
	}
	
	.demands h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		color: black;
		margin-bottom: 1.5rem;
		text-align: center;
	}
	
	.demands-intro {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		color: #666;
		text-align: center;
		max-width: 800px;
		margin: 0 auto 3rem auto;
	}
	
	.demands-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.demand-card {
		background: white;
		border: 4px solid #ff9f2e;
		border-radius: 12px;
		padding: 2rem;
		position: relative;
	}
	
	.demand-number {
		position: absolute;
		top: -15px;
		left: 2rem;
		background: #ff9f2e;
		color: black;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.5rem;
		font-weight: bold;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.demand-card h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		color: black;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
	
	.demand-card p {
		font-family: 'Carlito', sans-serif;
		line-height: 1.6;
		color: #666;
	}
	
	/* Call to Action Section */
	.cta {
		background: #1298ff;
		color: white;
		padding: 4rem 0;
		text-align: center;
	}
	
	.cta h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 1rem;
	}
	
	.cta p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	/* Popup Styles */
	.popup-overlay {
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
	}
	
	.popup-content {
		position: relative;
		width: 90%;
		max-width: 440px;
		height: 80%;
		background: white;
		border-radius: 0px;
		border: 10px solid #ff9f2e;
		overflow: hidden;
	}
	
	.popup-close {
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
	
	.popup-iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
	
	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.hero {
			height: 60vh;
			min-height: 400px;
		}
		
		.hero-content {
			padding: 0 1rem;
		}
		
		.hero-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			width: 200px;
		}
		
		.problem-grid,
		.demands-grid {
			grid-template-columns: 1fr;
		}
		
		.popup-content {
			width: 95%;
			height: 90%;
		}
		
		.container {
			padding: 0 1rem;
		}
	}
</style>
