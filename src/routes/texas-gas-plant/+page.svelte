<script>
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import EmbeddedForm from "$components/EmbeddedForm.svelte";

	const title = "Stop Amazon's Texas Gas Plant | Prime Members for a Cleaner Amazon";
	const description = "Amazon co-founded the Climate Pledge. Now it's building what could be America's biggest gas plant to power AI in West Texas. Tell Amazon to keep its promise.";
</script>

<Meta {title} {description} canonical="https://primemembers.earth/texas-gas-plant/" />

<!-- Story on the left, petition form sticky on the right (form follows the hero on mobile) -->
<section class="petition">
	<div class="petition-background" aria-hidden="true">
		<img src="{base}/hero-bg.webp" alt="" />
	</div>

	<div class="layout">
		<header class="intro">
			<p class="eyebrow">Amazon's GW Ranch gas plant · West Texas</p>
			<h1>Amazon co-founded the Climate Pledge. Now it's building America's biggest gas plant to power AI.</h1>
			<p class="subtitle">Fully built, it could become the country's single largest source of climate pollution. Most of it isn't built yet. Tell Amazon to power it with clean energy instead.</p>
		</header>

		<aside class="form-column" id="sign">
			<div class="form-card">
				<h2>Sign the petition</h2>
				<p class="form-lead">Tell Amazon: no new gas for AI.</p>
				<div class="form-embed">
					<EmbeddedForm src="https://act.stand.earth/page/104779/petition/1" title="Sign the petition to Amazon" />
				</div>
			</div>
		</aside>

		<div class="story">
			<section class="block">
				<h2>What Amazon is building</h2>
				<p>Amazon's first off-grid AI data center campus, at GW Ranch in Pecos County, won't run on the grid. It will run on its own private gas plant.</p>
				<div class="stats">
					<div class="stat">
						<span class="stat-number">7.65 GW</span>
						<span class="stat-label">of gas power, which would make it the biggest gas plant in the US</span>
					</div>
					<div class="stat">
						<span class="stat-number">35</span>
						<span class="stat-label">gas turbines</span>
					</div>
					<div class="stat">
						<span class="stat-number">33M tons</span>
						<span class="stat-label">of CO2 a year allowed by its permit</span>
					</div>
				</div>
				<p>And it's not a one-off: GW Ranch is one of eight gas plants being built to serve Amazon data centers. Amazon says the world looks different than when it co-founded the Climate Pledge. But decades of burning gas can't be squared with a pledge to cut emissions in line with Paris.</p>
			</section>

			<section class="block">
				<h2>Why it's not too late</h2>
				<ol class="timeline">
					<li><span class="when">January</span> Texas grants the air permit</li>
					<li><span class="when">July</span> Land clearing starts</li>
					<li class="now"><span class="when">2027</span> First ~1 GW comes online</li>
					<li class="now"><span class="when">By 2031</span> Scales toward 5 GW and beyond</li>
				</ol>
				<p>The plant goes up in phases, and <strong>most of the pollution would come from phases Amazon hasn't built yet.</strong> The permit is granted, so this is now Amazon's call alone: it decides how every future phase is powered.</p>
				<p>And the ground is shifting. Texas has paused new data center permits while its grid operator runs an audit, and Amazon's new Data Center Commitment says nothing about gas or emissions limits.</p>
			</section>

			<section class="block">
				<h2>Our ask</h2>
				<div class="letter">
					<div class="letter-header">
						<strong>TO: Andy Jassy, CEO, Amazon, and Matt Garman, CEO, Amazon Web Services</strong><br>
						<span>CC: Kara Hurst, Chief Sustainability Officer</span><br>
						<strong>FROM: Prime members and Amazon customers</strong>
					</div>
					<p>Don't build what would be the country's single largest source of climate pollution. We're calling on you to:</p>
					<ol>
						<li>Power <span class="accent">every future phase</span> of GW Ranch with clean energy.</li>
						<li>Add a rule to your Data Center Commitment that <span class="accent">new data centers won't run on new gas</span>.</li>
					</ol>
				</div>
				<a class="btn btn-cta jump-to-form" href="#sign">Add my name</a>
			</section>
		</div>
	</div>
</section>

<Footer />

<style>
	.petition {
		position: relative;
		background: #000;
		color: white;
		overflow: clip;
	}

	/* The photo sits behind the intro and fades into the black page below. */
	.petition-background {
		position: absolute;
		inset: 0 0 auto;
		height: 760px;
		z-index: 0;
	}

	.petition-background img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.45;
	}

	.petition-background::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, rgba(0,0,0,0.2) 40%, #000);
	}

	.layout {
		position: relative;
		z-index: 1;
		max-width: 1200px;
		margin: 0 auto;
		padding: 11rem 2rem 5rem;
		display: grid;
		grid-template-columns: minmax(0, 1fr) 400px;
		grid-template-areas:
			"intro form"
			"story form";
		column-gap: 4rem;
		align-items: start;
	}

	.intro {
		grid-area: intro;
		margin-bottom: 3rem;
	}

	.eyebrow {
		font-family: 'AmsiPro', sans-serif;
		color: #ff9f2e;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	h1 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4.5vw, 3.2rem);
		line-height: 1.15;
		margin-bottom: 1.5rem;
	}

	.subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.3rem;
		line-height: 1.55;
		max-width: 640px;
	}

	/* The column spans both rows so the card can stick for the whole story. */
	.form-column {
		grid-area: form;
		align-self: stretch;
		scroll-margin-top: 1rem;
	}

	.form-card {
		position: sticky;
		top: 1.5rem;
		background: white;
		color: #000;
		border: 10px solid #ff9f2e;
		box-shadow: 0 8px 32px rgba(0,0,0,0.3);
		padding: 1.5rem;
	}

	.form-card h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.8rem;
		margin-bottom: 0.25rem;
	}

	.form-lead {
		font-family: 'Carlito', sans-serif;
		font-size: 1.15rem;
		color: #444;
		margin-bottom: 1rem;
	}


	.story {
		grid-area: story;
	}

	.block + .block {
		margin-top: 3.5rem;
		padding-top: 3rem;
		border-top: 2px solid rgba(255,255,255,0.15);
	}

	.block h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.6rem, 3.5vw, 2.2rem);
		margin-bottom: 1rem;
	}

	.block p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		opacity: 0.92;
	}

	.block p + p {
		margin-top: 1rem;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
		margin: 2rem 0;
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		border-top: 4px solid #ff9f2e;
		padding-top: 1rem;
	}

	.stat-number {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.9rem, 4vw, 2.6rem);
		color: #ff9f2e;
		line-height: 1;
	}

	.stat-label {
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		line-height: 1.35;
	}

	.timeline {
		list-style: none;
		padding: 0;
		margin: 0.5rem 0 1.75rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
	}

	.timeline li {
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		line-height: 1.35;
		padding: 0.9rem;
		background: rgba(255,255,255,0.08);
		border-left: 4px solid #666;
	}

	/* Phases not built yet: the part we can still change. */
	.timeline li.now {
		background: rgba(255,159,46,0.15);
		border-left-color: #ff9f2e;
	}

	.when {
		display: block;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.15rem;
		color: #ff9f2e;
		margin-bottom: 0.25rem;
	}

	.letter {
		background: white;
		color: #000;
		border: 10px solid #ff9f2e;
		padding: 1.75rem;
		font-family: 'Carlito', sans-serif;
		font-size: 1.25rem;
		line-height: 1.45;
		margin-bottom: 2rem;
	}

	.letter-header {
		font-size: 1.05rem;
		margin-bottom: 1rem;
	}

	.block .letter p {
		font-size: inherit;
		opacity: 1;
		margin-bottom: 1rem;
	}

	.letter ol {
		padding-left: 1.5rem;
	}

	.letter li {
		margin-bottom: 0.5rem;
	}

	.accent {
		color: #e88a1a;
		font-weight: bold;
	}

	.btn {
		display: inline-block;
		padding: 1rem 2.5rem;
		border: none;
		border-radius: 0;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.2rem;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.btn-cta {
		background: #ff9f2e;
		color: #000;
	}

	.btn-cta:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}

	/* Only needed once the form stops being in view beside the story. */
	.jump-to-form {
		display: none;
	}

	@media (max-width: 1024px) {
		.layout {
			grid-template-columns: minmax(0, 1fr);
			grid-template-areas:
				"intro"
				"form"
				"story";
			padding-top: 10rem;
		}

		.intro {
			text-align: center;
			margin-bottom: 2rem;
		}

		.subtitle {
			margin: 0 auto;
		}

		.form-column {
			max-width: 560px;
			width: 100%;
			margin: 0 auto 4rem;
		}

		.form-card {
			position: static;
		}

		.jump-to-form {
			display: inline-block;
		}

		.timeline {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.layout {
			padding: 9rem 1rem 4rem;
		}

		.stats {
			grid-template-columns: 1fr;
		}

		.form-card {
			padding: 1rem;
			border-width: 6px;
		}

		.letter {
			padding: 1.25rem;
			border-width: 6px;
			font-size: 1.15rem;
		}
	}
</style>
