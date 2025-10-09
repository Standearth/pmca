<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import { loadStories, shuffleArray } from "$utils/loadStories.js";
	
	let stories = $state([]);
	let displayedStories = $state([]);
	let isLoading = $state(true);
	let storiesPerBatch = 12;
	let currentBatch = 0;
	let loadingMore = $state(false);
	let gradualLoadingActive = $state(false);
	
	const preloadFont = [
		base+"/fonts/AmsiPro-Ultra.woff2",
		base+"/fonts/Carlito/Carlito-Regular.ttf",
		base+"/fonts/Carlito/Carlito-Bold.ttf"
	];

	// Page-specific structured data
	const storiesPageStructuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Prime Member Stories - Climate Action",
		"description": "Real stories from Amazon Prime members sharing their experiences and calling for climate action. Join the movement for a more sustainable Amazon.",
		"url": "https://primemembers.earth/stories",
		"mainEntity": {
			"@type": "Organization",
			"name": "Prime Members for Cleaner Amazon",
			"url": "https://primemembers.earth"
		}
	};

	async function fetchAndShuffleStories() {
		if (!browser) return;
		
		try {
			isLoading = true;
			const fetchedStories = await loadStories();
			stories = shuffleArray(fetchedStories);
			loadInitialBatch();
		} catch (error) {
			console.error('Error loading stories:', error);
		} finally {
			isLoading = false;
		}
	}

	function loadInitialBatch() {
		currentBatch = 0;
		const endIndex = Math.min(storiesPerBatch, stories.length);
		displayedStories = stories.slice(0, endIndex);
	}

	function loadMoreStories() {
		if (loadingMore || displayedStories.length >= stories.length) return;
		
		loadingMore = true;
		
		setTimeout(() => {
			currentBatch++;
			const startIndex = currentBatch * storiesPerBatch;
			const endIndex = Math.min(startIndex + storiesPerBatch, stories.length);
			const newStories = stories.slice(startIndex, endIndex);
			displayedStories = [...displayedStories, ...newStories];
			loadingMore = false;
		}, 500); // Small delay for smooth UX
	}

	function handleScroll() {
		if (!browser) return;
		
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		const isNearBottom = scrollTop + clientHeight >= scrollHeight - 1000;
		
		if (isNearBottom && !loadingMore && displayedStories.length < stories.length) {
			loadMoreStories();
		}
	}

	function reshuffleStories() {
		if (!browser || stories.length === 0) return;
		
		stories = shuffleArray(stories);
		loadInitialBatch();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	async function addStoriesGradually() {
		if (!browser || stories.length === 0 || gradualLoadingActive) return;
		
		gradualLoadingActive = true;
		
		// Get new shuffled stories
		const newShuffledStories = shuffleArray(stories);
		const maxStoriesToShow = Math.min(storiesPerBatch, newShuffledStories.length);
		
		// Clear current display
		displayedStories = [];
		
		// Add stories one by one with delay
		for (let i = 0; i < maxStoriesToShow; i++) {
			if (!gradualLoadingActive) break; // Allow interruption
			
			displayedStories = [...displayedStories, newShuffledStories[i]];
			
			// Wait before adding next story (2-4 seconds random interval)
			if (i < maxStoriesToShow - 1) {
				await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
			}
		}
		
		gradualLoadingActive = false;
	}

	onMount(() => {
		fetchAndShuffleStories();
		
		// Add scroll listener for infinite loading
		window.addEventListener('scroll', handleScroll);
		
		// Auto-refresh stories periodically to show dynamic content
		const refreshInterval = setInterval(() => {
			if (!loadingMore && !gradualLoadingActive) {
				addStoriesGradually();
			}
		}, 45000); // Refresh every 45 seconds to allow for gradual loading
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearInterval(refreshInterval);
			gradualLoadingActive = false; // Stop any ongoing gradual loading
		};
	});
</script>

<Meta 
	title="Prime Member Stories - Climate Action" 
	description="Real stories from Amazon Prime members sharing their experiences and calling for climate action. Join the movement for a more sustainable Amazon." 
	url="https://primemembers.earth/stories" 
	keywords="Amazon Prime stories, member testimonials, climate action, environmental activism, sustainable shipping"
	ogType="website"
	structuredData={storiesPageStructuredData}
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
		<h1>Stories from Prime Members</h1>
		<p class="hero-subtitle">Real experiences and voices calling for Amazon to do better on climate. These are the stories driving our movement for change.</p>
		
		<div class="hero-actions">
			<button class="btn btn-primary" onclick={reshuffleStories}>
				Show me other stories
			</button>
			<a href="{base}/join" class="btn btn-secondary">Join and share your story</a>
		</div>
	</div>
</section>

<!-- Stories Grid -->
<section class="stories-section">
	<div class="container">
		{#if isLoading}
			<div class="loading">
				<div class="loading-spinner"></div>
				<p>Loading stories from Prime members...</p>
			</div>
		{:else if displayedStories.length === 0}
			<div class="no-stories">
				<h3>No stories found</h3>
				<p>We're having trouble loading stories right now. Please try again later.</p>
			</div>
		{:else}
			<div class="stories-grid">
				{#each displayedStories as story, index}
					<div class="story-card" style="animation-delay: {(index % storiesPerBatch) * 0.1}s">
						<div class="story-content">
							<p class="story-text">{story.story}</p>
							{#if story.name}
								<div class="story-author">– {story.name}</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
			
			{#if loadingMore}
				<div class="loading-more">
					<div class="loading-spinner small"></div>
					<p>Loading more stories...</p>
				</div>
			{/if}
			
			{#if displayedStories.length < stories.length}
				<div class="load-more-section">
					<button class="btn btn-outline" onclick={loadMoreStories} disabled={loadingMore}>
						{loadingMore ? 'Loading...' : 'Load more stories'}
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
		padding-top: 6rem; /* Account for header */
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
		background: rgba(0,0,0,0.5);
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
	
	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.btn {
		padding: 1rem 2rem;
		border: none;
		border-radius: 0px;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
	}
	
	.btn-primary {
		background: #ff9f2e;
		color: #000;
	}
	
	.btn-primary:hover {
		background: #e88a1a;
		transform: translateY(-2px);
	}
	
	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}
	
	.btn-secondary:hover {
		background: white;
		color: #1298ff;
		transform: translateY(-2px);
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
	
	.stories-section {
		background: #f8f9fa;
		padding: 4rem 0;
		min-height: 60vh;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	.loading, .no-stories {
		text-align: center;
		padding: 4rem 0;
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
	
	.stories-grid {
		column-count: 3;
		column-gap: 2rem;
		margin-bottom: 3rem;
	}
	
	.story-card {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
		border-left: 4px solid #1298ff;
		transition: all 0.3s ease;
		animation: fadeInUp 0.6s ease-out both;
		position: relative;
		display: flex;
		flex-direction: column;
		break-inside: avoid; /* Prevents breaking in the middle of a column */
		margin-bottom: 2rem; /* Add space between stacked cards */
		width: 100%; /* Ensure full width within column */
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
	
	.story-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 30px rgba(0,0,0,0.15);
	}
	
	.story-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.story-text {
		font-family: 'Carlito', sans-serif;
		font-size: 1rem;
		line-height: 1.6;
		color: #333;
		margin: 0 0 1rem 0;
		flex: 1;
	}
	
	.story-author {
		font-family: 'AmsiPro', sans-serif;
		font-size: 0.9rem;
		color: #1298ff;
		font-weight: bold;
		text-align: right;
		margin-top: auto;
		padding-top: 1rem;
	}
	
	.loading-more {
		text-align: center;
		padding: 2rem 0;
	}
	
	.load-more-section {
		text-align: center;
		padding: 2rem 0;
	}
	
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
	
	@media (max-width: 768px) {
		.hero {
			height: auto;
			min-height: 70vh;
			padding-top: 8rem; /* More space for mobile header */
			padding-bottom: 4rem;
		}
		
		.hero-content {
			padding: 0 1rem;
		}
		
		.hero h1 {
			font-size: clamp(2rem, 8vw, 2.5rem);
		}
		
		.hero-actions, .cta-actions {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			width: 250px;
			text-align: center;
		}
		
		.stories-grid {
			column-count: 2;
			column-gap: 1.5rem;
		}
		
		.story-card {
			margin-bottom: 1.5rem;
		}
		
		.story-card {
			padding: 1.5rem;
		}
		
		.stories-section {
			padding: 3rem 0;
		}
		
		.cta-section {
			padding: 3rem 0;
		}
	}
	
	@media (max-width: 480px) {
		.hero {
			padding-top: 10rem;
			min-height: 80vh;
		}
		
		.container {
			padding: 0 1rem;
		}
		
		.stories-grid {
			column-count: 1;
		}
		
		.story-card {
			padding: 1.2rem;
			margin-bottom: 1.2rem;
		}
		
		.story-text {
			font-size: 0.95rem;
		}
	}
</style>
