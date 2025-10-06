<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

	let { data } = $props();

	version();

	const preloadFont = [
		`${base}/fonts/AmsiPro-Ultra.woff2`,
		`${base}/fonts/Carlito/Carlito-Regular.ttf`,
		`${base}/fonts/Carlito/Carlito-Bold.ttf`
	];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<Index />
