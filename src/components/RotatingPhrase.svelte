<script>
	import { onMount } from 'svelte';

	// Sits inside a heading: "Prime members want Amazon to do more on <RotatingPhrase />".
	let {
		phrases = [
			'climate',
			'AI data centers',
			'workers’ rights',
			'air quality',
			'warehouse conditions',
			'clean energy',
			'plastics pollution',
			'worker injuries',
			'packaging waste',
			'electrification'
		],
		interval = 2600
	} = $props();

	let index = $state(0);
	let previous = $state(-1);
	let paused = $state(false);

	const spoken = $derived(`${phrases.slice(0, -1).join(', ')} and ${phrases.at(-1)}.`);

	onMount(() => {
		// Visitors who ask for less motion get the first phrase, still.
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const timer = setInterval(() => {
			if (paused || document.hidden) return;
			previous = index;
			index = (index + 1) % phrases.length;
		}, interval);
		return () => clearInterval(timer);
	});
</script>

<span class="visually-hidden">{spoken}</span>
<span
	class="stack"
	aria-hidden="true"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
>
	{#each phrases as phrase, i}
		<span class="phrase" class:active={i === index} class:leaving={i === previous}>{phrase}</span>
	{/each}
</span>

<style>
	/* Every phrase shares one grid cell, so the heading is always as tall as the longest. */
	.stack {
		display: grid;
		justify-items: start;
		/* Each highlight hugs its own phrase instead of stretching to the tallest one. */
		align-items: start;
		margin-top: 0.15em;
	}

	.phrase {
		grid-area: 1 / 1;
		background: #ff9f2e;
		color: #000;
		padding: 0 0.25em;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
		opacity: 0;
		transform: translateY(0.45em);
		transition: opacity 0.4s ease, transform 0.4s ease;
	}

	.phrase.active {
		opacity: 1;
		transform: translateY(0);
	}

	.phrase.leaving {
		transform: translateY(-0.45em);
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		.phrase {
			transition: none;
		}
	}
</style>
