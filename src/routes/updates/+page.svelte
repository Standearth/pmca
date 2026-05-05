<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import { loadUpdates, formatDate } from "$utils/loadUpdates.js";
	import { buildImageUrl } from "$utils/sanity.js";

	let updates = $state([]);
	let displayedUpdates = $state([]);
	let isLoading = $state(true);
	let loadingMore = $state(false);
	let updatesPerBatch = 12;
	let currentBatch = $state(0);

	const preloadFont = [
		base + "/fonts/AmsiPro-Ultra.woff2",
		base + "/fonts/Carlito/Carlito-Regular.ttf",
		base + "/fonts/Carlito/Carlito-Bold.ttf"
	];

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "Campaign Updates - Prime Members for Cleaner Amazon",
		"description": "The latest news and updates from the Prime Members for Cleaner Amazon campaign.",
		"url": "https://primemembers.earth/updates"
	};

	async function fetchUpdates() {
		if (!browser) return;
		try {
			isLoading = true;
			updates = await loadUpdates();
			loadInitialBatch();
		} catch (error) {
			console.error('Error loading updates:', error);
		} finally {
			isLoading = false;
		}
	}

	function loadInitialBatch() {
		currentBatch = 0;
		displayedUpdates = updates.slice(0, updatesPerBatch);
	}

	function loadMoreUpdates() {
		if (loadingMore || displayedUpdates.length >= updates.length) return;
		loadingMore = true;
		setTimeout(() => {
			currentBatch++;
			const start = currentBatch * updatesPerBatch;
			const end = Math.min(start + updatesPerBatch, updates.length);
			displayedUpdates = [...displayedUpdates, ...updates.slice(start, end)];
			loadingMore = false;
		}, 400);
	}

	function handleScroll() {
		if (!browser) return;
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		if (scrollTop + clientHeight >= scrollHeight - 1000 && !loadingMore && displayedUpdates.length < updates.length) {
			loadMoreUpdates();
		}
	}

	onMount(() => {
		fetchUpdates();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<Meta
	title="Latest Updates - Prime Members for Cleaner Amazon"
	description="The latest news and updates from the Prime Members for Cleaner Amazon campaign."
	url="https://primemembers.earth/updates"
	keywords="Amazon Prime updates, campaign news, climate action updates, prime members news"
	ogType="website"
	structuredData={structuredData}
	{preloadFont}
/>

<Header />

<!-- Hero Section -->
<section class="hero">
	<div class="hero-background">
		<div class="hero-overlay"></div>
		<img src="{base}/hero-bg.webp" alt="Background" class="hero-image" />
	</div>

	<div class="hero-content">
		<h1>Latest Updates</h1>
		<p class="hero-subtitle">Stay up to date with the latest news, milestones, and actions from the Prime Members for Cleaner Amazon campaign.</p>
	</div>
</section>

<!-- Updates Grid -->
<section class="updates-section">
	<div class="container">
		{#if isLoading}
			<div class="loading">
				<div class="loading-spinner"></div>
				<p>Loading updates...</p>
			</div>
		{:else if displayedUpdates.length === 0}
			<div class="no-updates">
				<h3>No updates yet</h3>
				<p>Check back soon for the latest campaign news.</p>
			</div>
		{:else}
			<div class="updates-grid">
				{#each displayedUpdates as update, index}
					{@const imageUrl = buildImageUrl(update.image, { width: 600, height: 400 })}
					<a
						href="{base}/updates/{update.slug}"
						class="update-card"
						style="animation-delay: {(index % updatesPerBatch) * 0.07}s"
					>
						{#if imageUrl}
							<div class="update-image">
								<img src={imageUrl} alt={update.image?.alt ?? update.title} loading="lazy" />
							</div>
						{/if}
						<div class="update-content">
							<div class="update-meta">
								<time class="update-date" datetime={update.publishedAt}>
									{formatDate(update.publishedAt)}
								</time>
							</div>
							<h2 class="update-title">{update.title}</h2>
							{#if update.excerpt}
								<p class="update-excerpt">{update.excerpt}</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>

			{#if loadingMore}
				<div class="loading-more">
					<div class="loading-spinner small"></div>
					<p>Loading more updates...</p>
				</div>
			{/if}

			{#if displayedUpdates.length < updates.length}
				<div class="load-more-section">
					<button class="btn btn-outline" onclick={loadMoreUpdates} disabled={loadingMore}>
						{loadingMore ? 'Loading...' : 'Load more updates'}
					</button>
				</div>
			{/if}
		{/if}
	</div>
</section>

<!-- CTA Section -->
<section class="cta-section">
	<div class="container">
		<div class="cta-content">
			<h2>Ready to add your voice?</h2>
			<p>Join thousands of Prime members calling for Amazon to do better on climate.</p>
			<div class="cta-actions">
				<a href="{base}/join" class="btn btn-cta">Join the campaign</a>
			</div>
		</div>
	</div>
</section>

<Footer />

<style>
	.hero {
		position: relative;
		height: 70vh;
		min-height: 500px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: center;
		padding-top: 6rem;
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 800px;
		padding: 0 2rem;
	}

	.hero h1 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: bold;
		margin-bottom: 1.5rem;
		line-height: 1.2;
	}

	.hero-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2.5rem;
		opacity: 0.95;
	}

	/* ─── Updates Section ─────────────────────────────── */
	.updates-section {
		background: #f8f9fa;
		padding: 4rem 0;
		min-height: 60vh;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.loading,
	.no-updates {
		text-align: center;
		padding: 4rem 0;
	}

	.loading p,
	.no-updates p {
		font-family: 'Carlito', sans-serif;
		color: #666;
	}

	.no-updates h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 0.5rem;
	}

	.loading-spinner {
		width: 50px;
		height: 50px;
		border: 4px solid #e3e3e3;
		border-top: 4px solid #1298ff;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto 1rem;
	}

	.loading-spinner.small {
		width: 30px;
		height: 30px;
		border-width: 3px;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	/* ─── Grid ─────────────────────────────────────────── */
	.updates-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 3rem;
	}

	/* ─── Card ─────────────────────────────────────────── */
	.update-card {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		border-left: 4px solid #1298ff;
		overflow: hidden;
		transition: all 0.3s ease;
		animation: fadeInUp 0.6s ease-out both;
		display: flex;
		flex-direction: column;
		/* <a> resets */
		text-decoration: none;
		color: inherit;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.update-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
	}

	.update-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
	}

	.update-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.update-card:hover .update-image img {
		transform: scale(1.04);
	}

	.update-content {
		padding: 1.5rem 2rem 2rem;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.update-meta {
		margin-bottom: 0.6rem;
	}

	.update-date {
		font-family: 'Carlito', sans-serif;
		font-size: 0.85rem;
		color: #1298ff;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.update-title {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.25rem;
		color: #111;
		line-height: 1.3;
		margin: 0 0 0.75rem;
	}

	.update-excerpt {
		font-family: 'Carlito', sans-serif;
		font-size: 0.97rem;
		line-height: 1.6;
		color: #555;
		margin: 0;
	}

	/* ─── Load More ─────────────────────────────────────── */
	.loading-more {
		text-align: center;
		padding: 2rem 0;
	}

	.load-more-section {
		text-align: center;
		padding: 2rem 0;
	}

	.btn {
		padding: 1rem 2rem;
		border: none;
		border-radius: 0;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
	}

	.btn-outline {
		background: transparent;
		color: #1298ff;
		border: 2px solid #1298ff;
	}

	.btn-outline:hover {
		background: #1298ff;
		color: white;
		transform: translateY(-2px);
	}

	/* ─── CTA Section ───────────────────────────────────── */
	.cta-section {
		background: linear-gradient(135deg, #1298ff 0%, #0d7ad9 100%);
		color: white;
		padding: 4rem 0;
		text-align: center;
	}

	.cta-content h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.cta-content p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.95;
	}

	.cta-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-cta {
		background: #ff9f2e;
		color: #000;
		font-size: 1.2rem;
		padding: 1.2rem 2.5rem;
	}

	.btn-cta:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}

	/* ─── Responsive ────────────────────────────────────── */
	@media (max-width: 1024px) {
		.updates-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.hero {
			height: auto;
			min-height: 70vh;
			padding-top: 8rem;
			padding-bottom: 4rem;
		}

		.hero-content {
			padding: 0 1rem;
		}

		.hero h1 {
			font-size: clamp(2rem, 8vw, 2.5rem);
		}

		.updates-section {
			padding: 3rem 0;
		}

		.update-content {
			padding: 1.2rem 1.5rem 1.5rem;
		}

		.cta-section {
			padding: 3rem 0;
		}

		.cta-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			width: 250px;
			text-align: center;
		}
	}

	@media (max-width: 640px) {
		.updates-grid {
			grid-template-columns: 1fr;
			gap: 1.2rem;
		}

		.container {
			padding: 0 1rem;
		}

		.update-content {
			padding: 1rem 1.2rem 1.2rem;
		}

		.update-title {
			font-size: 1.1rem;
		}
	}
</style>
