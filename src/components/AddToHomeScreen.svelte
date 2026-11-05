<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	// `prominent` is the full card for /get-started; the default is the small prompt used on /diary.
	let { dark = false, prominent = false } = $props();

	const DIARY_URL = 'https://primemembers.earth/diary/';

	// Chrome and Edge hand us an install prompt; Safari and other browsers need instructions.
	let installEvent = $state(null);
	let platform = $state(''); // ios | android | desktop
	let installed = $state(false);
	let onDiary = $state(false);
	let showIosSteps = $state(false);

	const emailLink = `mailto:?subject=${encodeURIComponent('Delivery Diary')}&body=${encodeURIComponent(
		`Open this on my phone and add it to my home screen: ${DIARY_URL}?utm_source=homescreen_email&utm_medium=email`
	)}`;

	onMount(() => {
		installed = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
		const ua = navigator.userAgent;
		platform = /iphone|ipad|ipod/i.test(ua) ? 'ios' : /android/i.test(ua) ? 'android' : 'desktop';
		onDiary = window.location.pathname.startsWith(`${base}/diary`);

		const onPrompt = (e) => {
			e.preventDefault();
			installEvent = e;
		};
		const onInstalled = () => {
			installed = true;
			installEvent = null;
		};
		window.addEventListener('beforeinstallprompt', onPrompt);
		window.addEventListener('appinstalled', onInstalled);
		return () => {
			window.removeEventListener('beforeinstallprompt', onPrompt);
			window.removeEventListener('appinstalled', onInstalled);
		};
	});

	async function install() {
		if (!installEvent) return;
		installEvent.prompt();
		await installEvent.userChoice;
		installEvent = null;
	}
</script>

{#if prominent && platform && !installed}
	<div class="card">
		<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true">
			<rect x="6" y="2" width="12" height="20" rx="2.5" fill="none" stroke="currentColor" stroke-width="2" />
			<line x1="10.5" y1="18.5" x2="13.5" y2="18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
		<div class="card-body">
			<h3>Put the Diary on your home screen</h3>
			<p class="card-lead">Next time a package lands on your porch, the Diary is one tap away, like an app.</p>

			{#if installEvent}
				<button class="card-btn" onclick={install}>Add to home screen</button>
			{:else if platform === 'ios'}
				<ol class="card-steps">
					{#if !onDiary}<li><a href="{base}/diary/">Open the Delivery Diary</a> in Safari.</li>{/if}
					<li>Tap the <strong>Share</strong> button (the square with an arrow).</li>
					<li>Scroll down and tap <strong>Add to Home Screen</strong>, then <strong>Add</strong>.</li>
				</ol>
			{:else if platform === 'android'}
				<ol class="card-steps">
					{#if !onDiary}<li><a href="{base}/diary/">Open the Delivery Diary</a>.</li>{/if}
					<li>Open your browser's menu (<strong>⋮</strong>).</li>
					<li>Tap <strong>Add to Home screen</strong> or <strong>Install app</strong>.</li>
				</ol>
			{:else}
				<p class="card-desktop">On your phone, open <strong>primemembers.earth/diary</strong> and add it to your home screen.</p>
				<a class="card-btn" href={emailLink}>Email me the link</a>
			{/if}
		</div>
	</div>
{:else if !prominent && !installed && (installEvent || platform === 'ios')}
	<div class="a2hs" class:dark>
		<p class="a2hs-lead">Put the Diary one tap from your porch.</p>
		{#if installEvent}
			<button class="a2hs-btn" onclick={install}>Add the Diary to your home screen</button>
		{:else}
			<button class="a2hs-btn" onclick={() => (showIosSteps = !showIosSteps)} aria-expanded={showIosSteps}>
				Add the Diary to your home screen
			</button>
			{#if showIosSteps}
				<ol class="a2hs-steps">
					<li>Tap the Share button in Safari's toolbar.</li>
					<li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
					<li>Tap <strong>Add</strong>. The Diary now opens from your home screen.</li>
				</ol>
			{/if}
		{/if}
	</div>
{/if}

<style>
	/* Prominent card */
	.card {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
		max-width: 620px;
		margin: 2.5rem auto 0;
		padding: 1.75rem;
		background: white;
		color: #000;
		border: 6px solid #ff9f2e;
		text-align: left;
	}

	.card-icon {
		width: 3rem;
		height: 3rem;
		flex-shrink: 0;
		color: #1298ff;
	}

	.card h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.5rem;
		line-height: 1.2;
		margin-bottom: 0.5rem;
	}

	.card-lead,
	.card-desktop {
		font-family: 'Carlito', sans-serif;
		font-size: 1.15rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.card-steps {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.6;
		padding-left: 1.25rem;
		margin: 0;
	}

	.card-steps a {
		color: #1298ff;
		font-weight: bold;
	}

	.card-btn {
		display: inline-block;
		background: #ff9f2e;
		color: #000;
		border: none;
		border-radius: 0;
		padding: 0.9rem 1.75rem;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.1rem;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.card-btn:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}

	@media (max-width: 480px) {
		.card {
			flex-direction: column;
			gap: 0.75rem;
			padding: 1.25rem;
		}

		.card-icon {
			width: 2.25rem;
			height: 2.25rem;
		}
	}

	/* Small prompt */
	.a2hs {
		border: 2px dashed #1298ff;
		padding: 1rem 1.25rem;
		margin: 1.5rem auto 0;
		max-width: 520px;
		text-align: left;
	}

	.a2hs.dark {
		border-color: rgba(255, 255, 255, 0.6);
		color: white;
	}

	.a2hs-lead {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		margin: 0 0 0.75rem;
	}

	.a2hs-btn {
		background: transparent;
		color: inherit;
		border: 2px solid #ff9f2e;
		border-radius: 0;
		padding: 0.6rem 1.2rem;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1rem;
		cursor: pointer;
	}

	.a2hs-btn:hover {
		background: #ff9f2e;
		color: #000;
	}

	.a2hs-steps {
		font-family: 'Carlito', sans-serif;
		margin: 0.75rem 0 0;
		padding-left: 1.25rem;
		line-height: 1.5;
	}
</style>
