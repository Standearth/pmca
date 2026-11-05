<script>
	import { onMount } from 'svelte';

	// An Engaging Networks page in an iframe. The page's own URL parameters (utm, ref…) are passed through.
	let { src, title, height = 710 } = $props();

	let iframeSrc = $state(src);

	onMount(() => {
		const params = window.location.search;
		if (params) iframeSrc = `${src}${src.includes('?') ? '&' + params.slice(1) : params}`;
	});
</script>

<iframe src={iframeSrc} {title} style="height: {height}px" loading="eager"></iframe>

<style>
	iframe {
		display: block;
		width: 100%;
		border: none;
	}
</style>
