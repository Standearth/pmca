<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { base } from '$app/paths';
	import { loadStories, shuffleArray } from "$utils/loadStories.js";
	
	let stories = $state([]);
	let currentIndex = $state(0);
	let carouselContainer;
	let autoplayInterval;
	let isLoading = $state(true);
	
	const storiesPerView = 3;
	const maxStoryLength = 150; // Character limit for preview
	
	async function fetchStories() {
		if (!browser) return;
		
		try {
			isLoading = true;
			const fetchedStories = await loadStories();
			// Get a random selection of stories for the carousel
			const shuffledStories = shuffleArray(fetchedStories);
			stories = shuffledStories.slice(0, 12); // Show up to 12 stories in carousel
		} catch (error) {
			console.error('Error loading stories for carousel:', error);
		} finally {
			isLoading = false;
		}
	}
	
	function truncateStory(story, maxLength) {
		if (story.length <= maxLength) return story;
		
		// Find the last complete word within the limit
		const truncated = story.substring(0, maxLength);
		const lastSpaceIndex = truncated.lastIndexOf(' ');
		
		if (lastSpaceIndex > 0) {
			return truncated.substring(0, lastSpaceIndex) + '...';
		}
		
		return truncated + '...';
	}
	
	function nextSlide() {
		if (stories.length === 0) return;
		currentIndex = (currentIndex + 1) % Math.max(1, stories.length - storiesPerView + 1);
	}
	
	function prevSlide() {
		if (stories.length === 0) return;
		currentIndex = currentIndex === 0 
			? Math.max(0, stories.length - storiesPerView) 
			: currentIndex - 1;
	}
	
	function goToSlide(index) {
		currentIndex = index;
	}
	
	function startAutoplay() {
		if (autoplayInterval) clearInterval(autoplayInterval);
		
		autoplayInterval = setInterval(() => {
			if (stories.length > storiesPerView) {
				nextSlide();
			}
		}, 4000); // Change slide every 4 seconds
	}
	
	function stopAutoplay() {
		if (autoplayInterval) {
			clearInterval(autoplayInterval);
			autoplayInterval = null;
		}
	}
	
	onMount(() => {
		fetchStories();
		
		return () => {
			stopAutoplay();
		};
	});
	
	// Start autoplay when stories are loaded
	$effect(() => {
		if (stories.length > storiesPerView && !isLoading) {
			startAutoplay();
		}
		
		return () => stopAutoplay();
	});
</script>

<section class="stories-carousel">
	<div class="container">
		<div class="carousel-header">
			<h2>Real Stories from Prime Members</h2>
			<p class="carousel-subtitle">
				Prime members are speaking up about their experiences with Amazon. 
				These voices are driving change for a more sustainable future.
			</p>
		</div>
		
		{#if isLoading}
			<div class="loading">
				<div class="loading-spinner"></div>
				<p>Loading member stories...</p>
			</div>
		{:else if stories.length === 0}
			<div class="no-stories">
				<p>Stories are currently unavailable. Please check back later.</p>
			</div>
		{:else}
			<div class="carousel-wrapper">
				<!-- Navigation arrows -->
				{#if stories.length > storiesPerView}
					<button 
						class="carousel-btn carousel-btn-prev" 
						onclick={prevSlide}
						onmouseenter={stopAutoplay}
						onmouseleave={startAutoplay}
						aria-label="Previous stories"
					>
						<svg viewBox="0 0 24 24" width="24" height="24">
							<path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
						</svg>
					</button>
					
					<button 
						class="carousel-btn carousel-btn-next" 
						onclick={nextSlide}
						onmouseenter={stopAutoplay}
						onmouseleave={startAutoplay}
						aria-label="Next stories"
					>
						<svg viewBox="0 0 24 24" width="24" height="24">
							<path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
						</svg>
					</button>
				{/if}
				
				<div 
					class="carousel-container"
					bind:this={carouselContainer}
					onmouseenter={stopAutoplay}
					onmouseleave={startAutoplay}
				>
					<div 
						class="carousel-track"
						style="transform: translateX(-{currentIndex * (100 / storiesPerView)}%)"
					>
						{#each stories as story, index}
							<div class="story-slide">
								<div class="story-preview-card">
									<div class="story-preview-content">
										<p class="story-preview-text">
											{truncateStory(story.story, maxStoryLength)}
										</p>
										{#if story.name}
											<div class="story-preview-author">– {story.name}</div>
										{/if}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
				
				<!-- Dots indicator -->
				{#if stories.length > storiesPerView}
					<div class="carousel-dots">
						{#each Array(Math.ceil(stories.length - storiesPerView + 1)) as _, index}
							<button 
								class="carousel-dot {currentIndex === index ? 'active' : ''}"
								onclick={() => goToSlide(index)}
								aria-label="Go to slide {index + 1}"
							></button>
						{/each}
					</div>
				{/if}
			</div>
			
			<div class="carousel-cta">
				<a href="{base}/stories" class="btn btn-outline">
					Read all member stories
				</a>
			</div>
		{/if}
	</div>
</section>

<style>
	.stories-carousel {
		background: #f8f9fa;
		padding: 4rem 0;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	.carousel-header {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.carousel-header h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		color: #333;
		margin-bottom: 1rem;
		line-height: 1.2;
	}
	
	.carousel-subtitle {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		color: #666;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.5;
	}
	
	.loading, .no-stories {
		text-align: center;
		padding: 3rem 0;
	}
	
	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid #e3e3e3;
		border-top: 3px solid #1298ff;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto 1rem;
	}
	
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	
	.carousel-wrapper {
		position: relative;
		margin-bottom: 2rem;
	}
	
	.carousel-container {
		overflow: hidden;
		margin: 0 3rem;
	}
	
	.carousel-track {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}
	
	.story-slide {
		flex: 0 0 calc(100% / 3);
		padding: 0 1rem;
	}
	
	.story-preview-card {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
		box-shadow: 0 4px 15px rgba(0,0,0,0.1);
		border-left: 4px solid #1298ff;
		height: 200px;
		display: flex;
		flex-direction: column;
		transition: all 0.3s ease;
		cursor: default;
	}
	
	.story-preview-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(0,0,0,0.15);
	}
	
	.story-preview-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.story-preview-text {
		font-family: 'Carlito', sans-serif;
		font-size: 0.95rem;
		line-height: 1.5;
		color: #333;
		margin: 0;
		flex: 1;
		overflow: hidden;
	}
	
	.story-preview-author {
		font-family: 'AmsiPro', sans-serif;
		font-size: 0.85rem;
		color: #1298ff;
		font-weight: bold;
		text-align: right;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #eee;
	}
	
	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: white;
		border: 2px solid #1298ff;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		z-index: 2;
		color: #1298ff;
	}
	
	.carousel-btn:hover {
		background: #1298ff;
		color: white;
		transform: translateY(-50%) scale(1.1);
	}
	
	.carousel-btn-prev {
		left: 0;
	}
	
	.carousel-btn-next {
		right: 0;
	}
	
	.carousel-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 2rem;
	}
	
	.carousel-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: none;
		background: #ccc;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.carousel-dot.active,
	.carousel-dot:hover {
		background: #1298ff;
	}
	
	.carousel-cta {
		text-align: center;
		margin-top: 2rem;
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
	
	/* Mobile responsiveness */
	@media (max-width: 1024px) {
		.story-slide {
			flex: 0 0 50%;
		}
		
		.carousel-container {
			margin: 0 2rem;
		}
	}
	
	@media (max-width: 768px) {
		.stories-carousel {
			padding: 3rem 0;
		}
		
		.story-slide {
			flex: 0 0 100%;
		}
		
		.carousel-container {
			margin: 0 1rem;
		}
		
		.carousel-btn {
			width: 40px;
			height: 40px;
		}
		
		.story-preview-card {
			height: 180px;
			padding: 1.2rem;
		}
		
		.story-preview-text {
			font-size: 0.9rem;
		}
		
		.carousel-header {
			margin-bottom: 2rem;
		}
	}
	
	@media (max-width: 480px) {
		.container {
			padding: 0 1rem;
		}
		
		.carousel-container {
			margin: 0;
		}
		
		.carousel-btn {
			width: 35px;
			height: 35px;
		}
		
		.story-preview-card {
			height: 160px;
			padding: 1rem;
		}
		
		.story-preview-text {
			font-size: 0.85rem;
			line-height: 1.4;
		}
	}
</style>
