<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import { initGA, trackPageView } from '$utils/analytics.js';

	let { children } = $props();

	onMount(() => {
		// Initialize Google Analytics
		initGA();
	});

	// Track page views on navigation
	$effect(() => {
		if ($page.url) {
			// Wait a bit for GA to initialize then track page view
			setTimeout(() => {
				trackPageView($page.url.pathname, $page.url.href);
			}, 500);
		}
	});
</script>

<Header />
<main id="content">
	{@render children?.()}
</main>
