<script>
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import EmbeddedForm from "$components/EmbeddedForm.svelte";
	import call from "$data/organizingCall.js";
	import { targetCount } from "$data/variables.json";

	const title = `Prime Members Organizing Call, ${call.shortDate} | Prime Members for a Cleaner Amazon`;
	const description = `An online organizing call for Prime members on ${call.dateLabel}. Get a campaign update and find out how to get more involved.`;
	const when = `${call.dateLabel}${call.time ? `, ${call.time}` : ''}`;
</script>

<Meta {title} {description} canonical="https://primemembers.earth/organizing-call/" noindex={!call.live} />

<!-- Story on the left, sign-up form sticky on the right (form follows the intro on mobile) -->
<section class="signup">
	<div class="signup-background" aria-hidden="true">
		<img src="{base}/hero-bg.webp" alt="" />
	</div>

	<div class="layout">
		<header class="intro">
			<p class="eyebrow">Online · {when}</p>
			<h1>Prime members organizing call</h1>
			<p class="subtitle">An online call with the Stand.earth team for Prime members who want to get more involved in the campaign. We'll share an update on our work and plan the next steps together.</p>
		</header>

		<aside class="form-column" id="register">
			<div class="form-card">
				<h2>Save your spot</h2>
				<EmbeddedForm src="https://act.stand.earth/page/104780/petition/1" title="Sign up for the organizing call" />
			</div>
		</aside>

		<div class="story">
			<section class="block">
				<h2>Why join</h2>
				<p>{targetCount.toLocaleString()} people have joined the campaign so far. This call is for those who want to do more than add their name. You'll meet other members and find out how you can take on a bigger role.</p>
			</section>

			<section class="block">
				<h2>What's on the agenda</h2>
				<ol class="agenda">
					<li>
						<h3><span class="agenda-number">1</span>Campaign update</h3>
						<p>What we've asked Amazon for, what people are reporting in the <a href="{base}/diary/">Delivery Diary</a>, and how Amazon has responded.</p>
					</li>
					<li>
						<h3><span class="agenda-number">2</span>Amazon's data centers</h3>
						<p>Amazon is building a gas plant in Texas to power an AI data center campus. We'll explain the plan and our <a href="{base}/texas-gas-plant/">petition</a> against it.</p>
					</li>
					<li>
						<h3><span class="agenda-number">3</span>Next steps</h3>
						<p>Ways to get more involved, and the upcoming moments when we can put pressure on Amazon.</p>
					</li>
				</ol>
			</section>

			<section class="block">
				<h2>Who should come</h2>
				<p>Prime members and other Amazon customers. You don't need any experience.</p>
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

	.agenda a {
		color: #ff9f2e;
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
