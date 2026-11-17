<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import call from '$data/organizingCall.js';

	// Floating promo for the organizing call. Closing it is remembered on this device.
	const DISMISS_KEY = `pmca-call-banner-${call.endsAt}`;

	let visible = $state(false);

	onMount(() => {
		if (!call.live || Date.now() > new Date(call.endsAt).getTime()) return;
		try {
			if (localStorage.getItem(DISMISS_KEY)) return;
		} catch {
			// storage blocked: show it anyway
		}
		// Let the hero land first.
		const timer = setTimeout(() => (visible = true), 1500);
		return () => clearTimeout(timer);
	});

	function dismiss() {
		visible = false;
		try {
			localStorage.setItem(DISMISS_KEY, '1');
		} catch {
			// storage blocked: it comes back next visit
		}
	}
</script>

{#if visible}
	<aside class="call-banner" aria-label="Organizing call">
		<button type="button" class="close" aria-label="Hide this" onclick={dismiss}>&times;</button>
		<p class="eyebrow">Live organizing call · {call.shortDate}</p>
		<p class="headline">Prime members: let's plan what's next, together.</p>
		<p class="sub">{call.dateLabel}{call.time ? `, ${call.time}` : ''}. Online, free.</p>
		<a class="cta" href="{base}/organizing-call/">Save my spot</a>
	</aside>
{/if}

<style>
	.call-banner {
		position: fixed;
		right: 1.25rem;
		bottom: 1.25rem;
		z-index: 900;
		width: min(360px, calc(100vw - 2rem));
		background: #000;
		color: white;
		border: 4px solid #ff9f2e;
		padding: 1.25rem 1.25rem 1.25rem;
		box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
		animation: rise 0.4s ease;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.close {
		position: absolute;
		top: 0.35rem;
		right: 0.5rem;
		background: none;
		border: none;
		color: white;
		font-size: 1.7rem;
		line-height: 1;
		cursor: pointer;
		padding: 0.25rem;
	}

	.eyebrow {
		font-family: 'AmsiPro', sans-serif;
		color: #ff9f2e;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.85rem;
		margin: 0 2rem 0.4rem 0;
	}

	.headline {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.3rem;
		line-height: 1.25;
		margin: 0 0 0.4rem;
	}

	.sub {
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		opacity: 0.9;
		margin: 0 0 1rem;
	}

	.cta {
		display: block;
		text-align: center;
		background: #ff9f2e;
		color: #000;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.1rem;
		padding: 0.75rem 1rem;
		text-decoration: none;
		transition: background 0.2s ease;
	}

	.cta:hover {
		background: #e88a1a;
	}

	@media (max-width: 480px) {
		.call-banner {
			right: 1rem;
			left: 1rem;
			bottom: 1rem;
			width: auto;
			padding: 1rem;
		}

		.headline {
			font-size: 1.15rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.call-banner {
			animation: none;
		}
	}
</style>
