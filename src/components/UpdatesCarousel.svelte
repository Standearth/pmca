<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { base } from '$app/paths';
	import { loadUpdates, formatDate } from "$utils/loadUpdates.js";
	import { buildImageUrl } from "$utils/sanity.js";

	const storiesPerView = 3;

	let updates = $state([]);
	let currentIndex = $state(0);
	let carouselContainer;
	let autoplayInterval;
	let isLoading = $state(true);

	async function fetchUpdates() {
		if (!browser) return;
		try {
			if (updates.length === 0) isLoading = true;
			updates = await loadUpdates();
		} catch (error) {
			console.error('Error loading updates for carousel:', error);
		} finally {
			isLoading = false;
		}
	}

	function nextSlide() {
		if (updates.length === 0) return;
		currentIndex = (currentIndex + 1) % Math.max(1, updates.length - storiesPerView + 1);
	}

	function prevSlide() {
		if (updates.length === 0) return;
		currentIndex =
			currentIndex === 0
				? Math.max(0, updates.length - storiesPerView)
				: currentIndex - 1;
	}

	function goToSlide(index) {
		currentIndex = index;
	}

	function startAutoplay() {
		if (autoplayInterval) clearInterval(autoplayInterval);
		autoplayInterval = setInterval(() => {
			if (updates.length > storiesPerView) nextSlide();
		}, 4500);
	}

	function stopAutoplay() {
		if (autoplayInterval) {
			clearInterval(autoplayInterval);
			autoplayInterval = null;
		}
	}

	onMount(() => {
		fetchUpdates();
		return () => stopAutoplay();
	});

	$effect(() => {
		if (updates.length > storiesPerView && !isLoading) {
			startAutoplay();
		}
		return () => stopAutoplay();
	});
</script>

<section class="updates-carousel">
	<div class="container">
		<div class="carousel-header">
			<h2>Latest Updates</h2>
			<p class="carousel-subtitle">
				Follow the latest news and milestones from our campaign to push Amazon on climate.
			</p>
		</div>

		{#if isLoading}
			<div class="loading">
				<div class="loading-spinner"></div>
				<p>Loading updates...</p>
			</div>
		{:else if updates.length === 0}
			<div class="no-updates">
				<p>No updates yet. Check back soon.</p>
			</div>
		{:else}
			<div class="carousel-wrapper">
				<!-- Prev button -->
				{#if updates.length > storiesPerView}
					<button
						class="carousel-btn carousel-btn-prev"
						onclick={prevSlide}
						onmouseenter={stopAutoplay}
						onmouseleave={startAutoplay}
						aria-label="Previous updates"
					>
						<svg viewBox="0 0 24 24" width="24" height="24">
							<path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
						</svg>
					</button>

					<button
						class="carousel-btn carousel-btn-next"
						onclick={nextSlide}
						onmouseenter={stopAutoplay}
						onmouseleave={startAutoplay}
						aria-label="Next updates"
					>
						<svg viewBox="0 0 24 24" width="24" height="24">
							<path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
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
						{#each updates as update}
							{@const imageUrl = buildImageUrl(update.image, { width: 480, height: 300 })}
							<div class="update-slide">
								<a href="{base}/updates/{update.slug}" class="update-preview-card">
									{#if imageUrl}
										<div class="card-image">
											<img src={imageUrl} alt={update.image?.alt ?? update.title} loading="lazy" />
										</div>
									{/if}
									<div class="card-body">
										<time class="card-date" datetime={update.publishedAt}>
											{formatDate(update.publishedAt)}
										</time>
										<h3 class="card-title">{update.title}</h3>
										{#if update.excerpt}
											<p class="card-excerpt">{update.excerpt}</p>
										{/if}
									</div>
								</a>
							</div>
						{/each}
					</div>
				</div>

				<!-- Dot indicators -->
				{#if updates.length > storiesPerView}
					<div class="carousel-dots">
						{#each Array(Math.max(1, updates.length - storiesPerView + 1)) as _, index}
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
				<a href="{base}/updates" class="btn btn-outline">
					View all updates
				</a>
			</div>
		{/if}
	</div>
</section>

<style>
	.updates-carousel {
		background: #f8f9fa;
		padding: 4rem 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* ─── Header ─────────────────────────────────────── */
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

	/* ─── Loading / Empty ────────────────────────────── */
	.loading,
	.no-updates {
		text-align: center;
		padding: 3rem 0;
	}

	.loading p,
	.no-updates p {
		font-family: 'Carlito', sans-serif;
		color: #666;
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

	/* ─── Carousel wrapper ───────────────────────────── */
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

	/* ─── Slide ──────────────────────────────────────── */
	.update-slide {
		flex: 0 0 calc(100% / 3);
		padding: 0 1rem;
	}

	.update-preview-card {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		border-left: 4px solid #1298ff;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: all 0.3s ease;
		cursor: pointer;
		height: 100%;
		/* <a> resets */
		text-decoration: none;
		color: inherit;
	}

	.update-preview-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}

	.card-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		flex-shrink: 0;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.update-preview-card:hover .card-image img {
		transform: scale(1.04);
	}

	.card-body {
		padding: 1.25rem 1.5rem 1.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.card-date {
		font-family: 'Carlito', sans-serif;
		font-size: 0.78rem;
		color: #1298ff;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		display: block;
		margin-bottom: 0.4rem;
	}

	.card-title {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.05rem;
		color: #111;
		line-height: 1.3;
		margin: 0 0 0.6rem;
	}

	.card-excerpt {
		font-family: 'Carlito', sans-serif;
		font-size: 0.88rem;
		line-height: 1.5;
		color: #555;
		margin: 0;
		flex: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	/* ─── Navigation Buttons ─────────────────────────── */
	.carousel-btn {
		position: absolute;
		top: 40%;
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

	.carousel-btn-prev { left: 0; }
	.carousel-btn-next { right: 0; }

	/* ─── Dots ───────────────────────────────────────── */
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

	/* ─── CTA ────────────────────────────────────────── */
	.carousel-cta {
		text-align: center;
		margin-top: 2rem;
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

	/* ─── Responsive ─────────────────────────────────── */
	@media (max-width: 1024px) {
		.update-slide {
			flex: 0 0 50%;
		}

		.carousel-container {
			margin: 0 2rem;
		}
	}

	@media (max-width: 768px) {
		.updates-carousel {
			padding: 3rem 0;
		}

		.update-slide {
			flex: 0 0 100%;
		}

		.carousel-container {
			margin: 0 1rem;
		}

		.carousel-btn {
			width: 40px;
			height: 40px;
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
	}
</style>
