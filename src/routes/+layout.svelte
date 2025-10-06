<script>
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import FontLoader from "$components/FontLoader.svelte";

	let { children } = $props();
</script>

<FontLoader />
<Header />
<main id="content">
	{@render children?.()}
</main>
