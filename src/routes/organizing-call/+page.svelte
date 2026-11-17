<script>
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import EmbeddedForm from "$components/EmbeddedForm.svelte";
	import call from "$data/organizingCall.js";

	const title = `Every Package Counts: ${call.shortDate} on Zoom | Prime Members for a Cleaner Amazon`;
	const description = `An online gathering of Amazon customers this holiday season. ${call.dateLabel}${call.time ? `, ${call.time}` : ''}, on Zoom.`;
</script>

<Meta {title} {description} canonical="https://primemembers.earth/organizing-call/" noindex={!call.live} />

<!-- Story on the left, sign-up form sticky on the right (form follows the intro on mobile) -->
<section class="signup">
	<div class="signup-background" aria-hidden="true">
		<img src="{base}/hero-bg.webp" alt="" />
	</div>

	<div class="layout">
		<header class="intro">
			<p class="eyebrow">Online organizing call</p>
			<h1>Every Package Counts</h1>
			<p class="subtitle">An online gathering of Amazon customers this holiday season</p>
			<p class="when">
				<span class="when-date">{call.dateLabel}</span>
				<span class="when-time">{call.time}{call.time ? ' · ' : ''}on Zoom</span>
			</p>
		</header>

		<aside class="form-column" id="register">
			<div class="form-card">
				<h2>Save your spot</h2>
				<EmbeddedForm src="https://act.stand.earth/page/104780/petition/1" title="Sign up for the organizing call" />
				<p class="form-note">Can't make it live? Sign up and we'll send you the recording.</p>
			</div>
		</aside>

		<div class="story">
			<section class="block">
				<h2>Why join</h2>
				<p>A lot of us rely on Amazon and have mixed feelings about what that convenience costs. Last year, Amazon's climate pollution jumped 16%. And it's backing a huge new gas plant in Texas to power a data center.</p>
				<p>Amazon has the money and technology to choose cleaner options. What will move it is us, its customers. When we organize and speak up together, we put at risk what Amazon protects most: our loyalty.</p>
				<p>The holiday shopping season is Amazon's busiest time of year, when our voices carry furthest. That's why we're meeting now.</p>
			</section>

			<section class="block">
				<h2>What we'll do together</h2>
				<ol class="agenda">
					<li>
						<h3><span class="agenda-number">1</span>Hear from members</h3>
						<p>PMCA members will share why they got involved and what happened when we took our concerns directly to Amazon.</p>
					</li>
					<li>
						<h3><span class="agenda-number">2</span>Start our Delivery Diary together</h3>
						<p>We'll kick off the <a href="{base}/diary/">Delivery Diary</a> holiday push, with everyone logging a first entry live. Together we'll build the record Amazon won't publish: how our packages actually arrive.</p>
					</li>
					<li>
						<h3><span class="agenda-number">3</span>Choose your next step</h3>
						<p>We'll share what comes next and the ways you can step up, from signing our <a href="{base}/texas-gas-plant/">Texas gas plant petition</a> to joining PMCA's leadership team.</p>
					</li>
				</ol>
				<p class="takeaway">You'll leave with one concrete thing to do this holiday season.</p>
			</section>

			<section class="block">
				<h2>Who should come</h2>
				<p>Any Amazon customer, whether you're brand new or have been with us from the start. No experience needed.</p>
				<p>If you can, have a recent Amazon delivery in mind. We'll log it together.</p>
				<p class="hosts">Hosted by Prime members across the US and Canada.</p>
				<a class="btn btn-cta jump-to-form" href="#register">Save my spot</a>
			</section>
		</div>
	</div>
</section>

<Footer />

<style>
	.signup {
		position: relative;
		background: #000;
		color: white;
		overflow: clip;
	}

	/* The photo sits behind the intro and fades into the black page below. */
	.signup-background {
		position: absolute;
		inset: 0 0 auto;
		height: 760px;
		z-index: 0;
	}

	.signup-background img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.45;
	}

	.signup-background::after {
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
		font-size: 1.4rem;
		line-height: 1.45;
		max-width: 640px;
	}

	/* The date is the one thing everyone needs to remember, so it gets its own block. */
	.when {
		display: inline-flex;
		flex-direction: column;
		gap: 0.35rem;
		margin-top: 2rem;
		padding: 1rem 1.5rem;
		background: #ff9f2e;
		color: #000;
		font-family: 'AmsiPro', sans-serif;
		line-height: 1.1;
	}

	.when-date {
		font-size: clamp(1.6rem, 3.5vw, 2.3rem);
	}

	.when-time {
		font-size: clamp(1.15rem, 2.2vw, 1.4rem);
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
		margin-bottom: 1rem;
	}

	.form-note {
		font-family: 'Carlito', sans-serif;
		font-size: 1rem;
		color: #555;
		margin-top: 0.75rem;
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

	.block a:not(.btn) {
		color: #ff9f2e;
		font-weight: bold;
	}

	.block .takeaway {
		margin-top: 1.75rem;
		font-weight: bold;
		opacity: 1;
	}

	.block .hosts {
		margin-top: 1.5rem;
		font-style: italic;
	}

	/* Numbers start on the same left edge as the paragraphs around them. */
	.agenda {
		list-style: none;
		padding: 0;
		margin: 0.5rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}

	.agenda h3 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}

	.agenda-number {
		flex-shrink: 0;
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 50%;
		background: #ff9f2e;
		color: #000;
		font-size: 1.1rem;
		display: flex;
		align-items: center;
		justify-content: center;
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
		margin-top: 2rem;
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
	}

	@media (max-width: 768px) {
		.layout {
			padding: 9rem 1rem 4rem;
		}

		.form-card {
			padding: 1rem;
			border-width: 6px;
		}
	}
</style>
