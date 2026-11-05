<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { targetCount } from "$data/variables.json";
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import TapeTransition from "$components/TapeTransition.svelte";
	import DiaryForm from "$components/forms/DiaryForm.svelte";
	import diary from "$data/diary.json";
	import quotes from "$data/diaryQuotes.js";
	import { diaryStats, loadDiaryStats } from "$runes/diaryStats.svelte.js";

	const title = "Delivery Diary & EV Spotter | Prime Members for a Cleaner Amazon";
	const description = "For anyone Amazon delivers to. Log a package that arrived or an Amazon van you saw. Twenty seconds turns an annoyance on your porch into evidence Amazon can't ignore.";

	let door = $state('');
	let formSection;

	function chooseDoor(choice) {
		door = choice;
		formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(() => {
		const initialDoor = new URLSearchParams(window.location.search).get('door');
		if (['diary', 'spotter'].includes(initialDoor)) door = initialDoor;

		loadDiaryStats();
	});
</script>

<Meta {title} {description} canonical="https://primemembers.earth/diary/" />

<!-- Hero -->
<section class="hero">
	<div class="hero-background">
		<div class="hero-overlay"></div>
		<img src="{base}/hero-bg.webp" alt="" class="hero-image" />
	</div>

	<div class="hero-content">
		<p class="eyebrow">Delivery Diary &amp; EV Spotter</p>
		<h1>Amazon makes big promises. Your doorstep shows what it actually delivers.</h1>
		<p class="hero-subtitle">Prime member or not, if Amazon delivers to your door, you're one of the customers it depends on. Log what lands on your porch, or an Amazon van you see. Twenty seconds turns an annoyance into evidence Amazon can't ignore.</p>

		<div class="doors">
			<button class="door" onclick={() => chooseDoor('diary')}>
				<span class="door-icon" aria-hidden="true">📦</span>
				<span class="door-label">A package arrived</span>
			</button>
			<button class="door" onclick={() => chooseDoor('spotter')}>
				<span class="door-icon" aria-hidden="true">🚐</span>
				<span class="door-label">I saw an Amazon van</span>
			</button>
		</div>

		<div class="counters">
			<div class="counter-circle">
				<div class="counter-number">{targetCount.toLocaleString()}</div>
				<div class="counter-text">people<br>joined</div>
			</div>
			<div class="counter-circle orange">
				<div class="counter-number">{diaryStats.count.toLocaleString()}</div>
				<div class="counter-text">deliveries &amp;<br>sightings logged</div>
			</div>
		</div>
	</div>
</section>

<!-- Why it exists -->
<section class="why">
	<div class="container">
		<h2>Why the Diary exists</h2>
		<p class="why-lead">Amazon tells its own story about deliveries. The Diary lets its customers tell theirs, with evidence Amazon can't wave away.</p>
		<div class="why-grid">
			<div class="why-item">
				<h3>Amazon's green options go unchecked</h3>
				<p>Amazon offers grouped and slower delivery as the greener choice. Members keep telling us those orders still arrive in pieces, but nobody counts how often. Your logs do.</p>
			</div>
			<div class="why-item">
				<h3>Amazon won't say how many vans are electric</h3>
				<p>It doesn't publish the share of its deliveries made by electric vehicles. Members counting the vans on their own streets is how we find out.</p>
			</div>
			<div class="why-item">
				<h3>One porch is easy to ignore. Thousands aren't.</h3>
				<p>Every log joins everyone else's. We add them up and show the totals back to you right here.</p>
			</div>
		</div>
	</div>
</section>

<!-- The form -->
<section class="log-section" bind:this={formSection} id="log">
	<div class="container">
		<h2>{door === 'spotter' ? 'Log an Amazon vehicle' : door === 'diary' ? 'Log a delivery' : 'Log it now'}</h2>
		<DiaryForm bind:door />
	</div>
</section>

<!-- Members' stories -->
<section class="findings">
	<div class="container">
		<h2>In members' own words</h2>
		<p class="findings-lead">Prime members told us what turns up at their door. Their answers to our member survey are why the Diary asks what it asks.</p>
		<div class="quotes-grid">
			{#each quotes as quote}
				<figure class="quote">
					<span class="quote-theme">{quote.theme}</span>
					<blockquote>“{quote.text}”</blockquote>
					<figcaption>Prime member</figcaption>
				</figure>
			{/each}
		</div>
		<p class="quotes-cta"><a href="#log">Seen the same at your door? Log it.</a> <span class="divider" aria-hidden="true">·</span> <a href="{base}/stories/">Read more member stories</a></p>
	</div>
</section>

<TapeTransition />

<!-- What the logs are for: the theory of change -->
<section class="how-used">
	<div class="container">
		<h2>From your porch to Amazon's boardroom</h2>
		<p class="how-lead">The numbers are the evidence. <strong>The power is the people behind them.</strong> Amazon listens to its customers, so every log is also a signal that one more customer is paying attention and wants Amazon to do more.</p>

		<ol class="change-steps">
			<li class="change-step">
				<span class="change-number">1</span>
				<h3>You log it</h3>
				<p>Twenty seconds, from your porch or the sidewalk. A package that arrived in pieces, a box ten times too big, a gas van idling down your street.</p>
			</li>
			<li class="change-step">
				<span class="change-number">2</span>
				<h3>It adds up</h3>
				<p>Your log joins everyone else's in the totals on this page. One porch is easy to ignore. Thousands of customers saying the same thing aren't.</p>
			</li>
			<li class="change-step">
				<span class="change-number">3</span>
				<h3>We take it to Amazon</h3>
				<p>We use the totals to show Amazon, the press and the public the gap between Amazon's promises and what customers see, and to back our demands: electric vans, clean energy and better conditions for workers.</p>
			</li>
			<li class="change-step">
				<span class="change-number">4</span>
				<h3>Amazon has to answer</h3>
				<p>The more people logging, the bigger the group Amazon has to answer to. That's how customers move a company that size: together, and with proof.</p>
			</li>
		</ol>

		<div class="how-grid">
			<div class="how-item">
				<h3>We show our working</h3>
				<p>Each figure says how many people logged and what it can and can't tell us. People choose what to log, so the totals show what customers saw, not how often it happens everywhere. Counts, never made-up percentages.</p>
			</div>
			<div class="how-item">
				<h3>Your details stay yours</h3>
				<p>All we need is your ZIP or postal code. Your name and email are optional, and we only send you campaign updates if you tick the box to ask for them.</p>
			</div>
		</div>

		<div class="privacy">
			<h3>What stays private</h3>
			<ul>
				<li>No photos, and nothing from inside your Amazon account: no order numbers, no screenshots.</li>
				<li>Location is only your postal code, or a postal code or town you type. Never a street address, never your phone's GPS.</li>
				<li>Nothing location-level is shown publicly.</li>
				<li>Never photograph, follow or report on delivery drivers. Most are contractors on monitored routes, and this campaign stands with them.</li>
				{#if diary.retention}<li>{diary.retention}</li>{/if}
			</ul>
		</div>
	</div>
</section>

<Footer />

<style>
	.hero {
		position: relative;
		min-height: 80vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: center;
		padding: 12rem 0 4rem;
	}

	.hero-background {
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0,0,0,0.55);
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
		max-width: 900px;
		padding: 0 1rem;
	}

	.eyebrow {
		font-family: 'AmsiPro', sans-serif;
		color: #ff9f2e;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.hero h1 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.8rem, 5vw, 3.2rem);
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}

	.hero-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.25rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.doors {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		max-width: 640px;
		margin: 0 auto;
	}

	.door {
		background: #ff9f2e;
		color: #000;
		border: 4px solid #ff9f2e;
		border-radius: 0;
		padding: 1.5rem 1rem;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		transition: all 0.3s ease;
	}

	.door:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}



	.door-icon {
		font-size: 2.2rem;
	}


	.counters {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 2.5rem;
		flex-wrap: wrap;
	}

	.counter-circle {
		background: #1298ff;
		border-radius: 50%;
		width: 160px;
		height: 160px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
		box-shadow: 0 8px 32px rgba(0,0,0,0.3);
	}

	.counter-circle.orange {
		background: #ff9f2e;
		color: #000;
	}

	.counter-number {
		font-family: 'AmsiPro', sans-serif;
		font-size: 2rem;
		line-height: 1;
	}

	.counter-text {
		font-family: 'Carlito', sans-serif;
		font-size: 1rem;
		margin-top: 0.5rem;
		line-height: 1.2;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.why {
		background: #000;
		color: white;
		padding: 4rem 0;
	}

	.why h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		margin-bottom: 1rem;
		text-align: center;
	}

	.why-lead {
		font-family: 'Carlito', sans-serif;
		font-size: 1.25rem;
		line-height: 1.6;
		max-width: 760px;
		margin: 0 auto 2.5rem;
		text-align: center;
	}

	.why-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.why-item {
		border-top: 4px solid #ff9f2e;
		padding-top: 1.25rem;
	}

	.why-item h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.25rem;
		line-height: 1.3;
		margin-bottom: 0.75rem;
	}

	.why-item p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.55;
		opacity: 0.9;
	}

	.log-section {
		background: white;
		padding: 4rem 0;
		text-align: center;
		scroll-margin-top: 1rem;
	}

	.log-section h2,
	.findings h2,
	.how-used h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		margin-bottom: 1.5rem;
	}




	.findings {
		background: #1298ff;
		color: white;
		padding: 4rem 0;
		text-align: center;
	}





	.findings-lead {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		max-width: 720px;
		margin: -0.5rem auto 2rem;
	}




	.quotes-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
		text-align: left;
	}

	.quote {
		background: white;
		color: #000;
		margin: 0;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.quote-theme {
		align-self: flex-start;
		background: #ff9f2e;
		color: #000;
		font-family: 'AmsiPro', sans-serif;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: 0.25rem 0.6rem;
	}

	.quote blockquote {
		margin: 0;
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.5;
		flex: 1;
	}

	.quote figcaption {
		font-family: 'Carlito', sans-serif;
		font-size: 0.95rem;
		color: #666;
	}

	.quotes-cta {
		margin-top: 2rem;
		color: white;
	}

	.divider {
		margin: 0 0.75rem;
		opacity: 0.6;
	}

	.quotes-cta a {
		color: white;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.15rem;
		text-decoration-color: #ff9f2e;
		text-decoration-thickness: 3px;
		text-underline-offset: 5px;
	}


	.how-used {
		background: white;
		padding: 4rem 0;
		text-align: center;
	}

	.how-lead {
		font-family: 'Carlito', sans-serif;
		font-size: 1.25rem;
		line-height: 1.6;
		max-width: 760px;
		margin: -0.5rem auto 2.5rem;
	}

	.change-steps {
		list-style: none;
		padding: 0;
		margin: 0 0 3rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
		text-align: left;
	}

	.change-step {
		position: relative;
		background: #000;
		color: white;
		padding: 2.75rem 1.25rem 1.5rem;
	}

	.change-number {
		position: absolute;
		top: -1.1rem;
		left: 1.25rem;
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
		background: #ff9f2e;
		color: #000;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.change-step h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.25rem;
		margin-bottom: 0.6rem;
	}

	.change-step p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		line-height: 1.5;
		opacity: 0.9;
	}

	.how-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
		text-align: left;
	}

	.how-item {
		border: 3px solid #1298ff;
		padding: 2rem 1.5rem;
		border-radius: 12px;
	}

	.how-item h3,
	.privacy h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}

	.how-item p,
	.privacy li {
		font-family: 'Carlito', sans-serif;
		color: #444;
		line-height: 1.5;
	}

	.privacy {
		background: #f8f9fa;
		padding: 2rem;
		text-align: left;
		max-width: 800px;
		margin: 0 auto 3rem;
	}

	.privacy ul {
		padding-left: 1.25rem;
	}

	.privacy li {
		margin-bottom: 0.5rem;
	}


	@media (max-width: 1023px) {
		.quotes-grid,
		.change-steps {
			grid-template-columns: repeat(2, 1fr);
		}

		.change-steps {
			row-gap: 2.25rem;
		}
	}

	@media (max-width: 768px) {
		.hero {
			padding-top: 9rem;
		}

		.doors {
			grid-template-columns: 1fr;
		}

		.counter-circle {
			width: 130px;
			height: 130px;
		}

		.counter-number {
			font-size: 1.4rem;
		}

		.counter-text {
			font-size: 0.85rem;
		}

		.container {
			padding: 0 1rem;
		}

		.why-grid,
		.quotes-grid,
		.change-steps {
			grid-template-columns: 1fr;
		}
	}
</style>
