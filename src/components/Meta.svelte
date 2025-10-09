<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { initGA, trackPageView } from '$utils/analytics.js';
	
	let {
		title = "Join Prime members demanding cleaner Amazon.",
		description = "Use your Prime membership power to make Amazon deliver on climate!",
		url = "https://primemembers.earth",
		keywords = "",
		preloadFont = [],
		ogType = "website",
		structuredData = null
	} = $props();

	// Default structured data
	const defaultStructuredData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Prime Members for Cleaner Amazon",
		"url": url,
		"description": description,
		"logo": `${url}${base}/logo_black.svg`,
		"sameAs": [
			"https://stand.earth"
		],
		"contactPoint": {
			"@type": "ContactPoint",
			"contactType": "Customer Service",
			"url": url
		},
		"potentialAction": {
			"@type": "JoinAction",
			"target": `${url}/join`,
			"name": "Join the Campaign"
		}
	};

	const finalStructuredData = structuredData || defaultStructuredData;

	// Initialize Google Analytics and track page view
	onMount(() => {
		// Initialize GA (will only initialize once)
		initGA();
		
		// Track page view after a small delay to ensure GA is loaded
		setTimeout(() => {
			trackPageView(title, url);
		}, 100);
	});
</script>

<svelte:head>
	<!-- Basic SEO -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Prime Members for Cleaner Amazon" />
	<meta name="news_keywords" content={keywords} />
	<meta name="theme-color" content="#1298ff" />
	<meta name="msapplication-TileColor" content="#1298ff" />
	
	<!-- Mobile optimization -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="Prime Members for Cleaner Amazon" />

	<!-- Language and region -->
	<meta name="language" content="English" />
	<meta http-equiv="Content-Language" content="en-US" />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Prime Members for Cleaner Amazon" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="{url}/pmca_og.jpg" />
	<meta property="og:image:alt" content="Prime Members for Cleaner Amazon - Join the movement" />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@standearth" />
	<meta name="twitter:creator" content="@standearth" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{url}/pmca_og.jpg" />
	<meta name="twitter:image:alt" content="Prime Members for Cleaner Amazon - Join the movement" />

	<!-- LinkedIn -->
	<meta property="og:image:secure_url" content="{url}/pmca_og.jpg" />
	

	<!-- Search engine directives -->
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

	<!-- Canonical URL -->
	<link rel="canonical" href={url} />
	
	<!-- Favicon and icons -->
	<link rel="icon" type="image/svg+xml" href="{base}/marker.svg" />
	<link rel="apple-touch-icon" href="{base}/logo_black.png" />
	<link rel="manifest" href="{base}/manifest.json" />

	<!-- DNS prefetch for performance -->
	<link rel="dns-prefetch" href="//act.stand.earth" />
	<link rel="dns-prefetch" href="//primemembers.earth" />
	<link rel="dns-prefetch" href="//fonts.googleapis.com" />
	<link rel="dns-prefetch" href="//www.googletagmanager.com" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(finalStructuredData)}</script>`}

	<!-- Font preloading -->
	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin="anonymous" />
	{/each}
</svelte:head>
