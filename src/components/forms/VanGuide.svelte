<script>
	import { onMount } from 'svelte';

	// A "?" next to the vehicle question. Hover previews it on desktop; a tap or click pins it open.
	let hovering = $state(false);
	let pinned = $state(false);
	let wrapper;

	const open = $derived(hovering || pinned);

	onMount(() => {
		const onClick = (e) => {
			if (pinned && !wrapper?.contains(e.target)) pinned = false;
		};
		const onKey = (e) => {
			if (e.key === 'Escape') {
				pinned = false;
				hovering = false;
			}
		};
		document.addEventListener('click', onClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('click', onClick);
			document.removeEventListener('keydown', onKey);
		};
	});
</script>

<span
	class="van-guide"
	bind:this={wrapper}
	role="presentation"
	onmouseenter={(e) => window.matchMedia('(hover: hover)').matches && (hovering = true)}
	onmouseleave={() => (hovering = false)}
>
	<button
		type="button"
		class="help"
		aria-expanded={open}
		aria-controls="van-guide-panel"
		aria-label="How to tell electric and gas vans apart"
		onclick={() => (pinned = !pinned)}
	>?</button>

	{#if open}
		<span class="panel" id="van-guide-panel" role="dialog" aria-label="Electric or gas?">
			<button type="button" class="close" aria-label="Close" onclick={() => { pinned = false; hovering = false; }}>&times;</button>
			<strong class="panel-title">Electric or gas? What to look for</strong>
			<span class="cols">
				<span class="col electric">
					<strong>⚡ Electric</strong>
					<span>Most of Amazon's electric vans are tall, rounded Rivian vans with a smooth, closed front and no grille.</span>
					<span>Round headlights joined by a light bar across the front.</span>
					<span>No tailpipe, and almost silent when it pulls away.</span>
				</span>
				<span class="col gas">
					<strong>⛽ Gas or diesel</strong>
					<span>Boxy Ford Transit, Ram ProMaster or Mercedes Sprinter vans with a grille on the front.</span>
					<span>A tailpipe under the back bumper.</span>
					<span>You can hear the engine idle and rev.</span>
				</span>
			</span>
			<span class="note">Some Ford and Mercedes vans are electric too and look almost the same as gas ones. If you can't tell, pick "Not sure". A wrong guess hurts the count more than a blank.</span>
		</span>
	{/if}
</span>

<style>
	.van-guide {
		display: inline-block;
		vertical-align: middle;
		margin-left: 0.4rem;
	}

	.help {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		border: 2px solid #1298ff;
		background: white;
		color: #1298ff;
		font-family: 'AmsiPro', sans-serif;
		font-size: 0.95rem;
		line-height: 1;
		cursor: pointer;
		padding: 0;
	}

	.help:hover,
	.help[aria-expanded='true'] {
		background: #1298ff;
		color: white;
	}

	.help:focus-visible {
		outline: 3px solid #ff9f2e;
		outline-offset: 2px;
	}

	/* Positioned against the question's fieldset, so it spans the full form width. */
	.panel {
		position: absolute;
		top: 2.25rem;
		left: 0;
		right: 0;
		z-index: 20;
		display: block;
		background: white;
		border: 3px solid #1298ff;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		padding: 1.25rem;
		font-family: 'Carlito', sans-serif;
		font-size: 1rem;
		line-height: 1.45;
		color: #000;
		text-align: left;
	}

	.panel-title {
		display: block;
		font-family: 'AmsiPro', sans-serif;
		font-weight: normal;
		font-size: 1.1rem;
		margin: 0 2rem 0.75rem 0;
	}

	.close {
		position: absolute;
		top: 0.4rem;
		right: 0.6rem;
		background: none;
		border: none;
		font-size: 1.6rem;
		line-height: 1;
		cursor: pointer;
		color: #444;
	}

	.cols {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding-left: 0.75rem;
		border-left: 4px solid #1298ff;
	}

	.col.gas {
		border-left-color: #ff9f2e;
	}

	.col strong {
		font-family: 'AmsiPro', sans-serif;
		font-weight: normal;
	}

	.note {
		display: block;
		margin-top: 0.9rem;
		color: #555;
		font-size: 0.95rem;
	}

	@media (max-width: 480px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}
</style>
