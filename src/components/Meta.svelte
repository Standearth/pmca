<script>
	let {
		title = "Prime Members for Clean Amazon",
		description = "Prime members want Amazon to do more on climate",
		url = "https://primemembers.earth",
		keywords = "",
		preloadFont = []
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Prime Members for Cleaner Amazon" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Prime Members for Cleaner Amazon" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content="{url}/static/hero-bg.webp" />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="628" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="" />
	<meta name="twitter:creator" content="" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content="{url}/static/hero-bg.webp" />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />
	
	<link rel="icon" type="image/svg+xml" href="/marker.svg" />
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />

	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each}
</svelte:head>
