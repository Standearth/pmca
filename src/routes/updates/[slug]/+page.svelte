<script>
	import { base } from '$app/paths';
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import { formatDate } from "$utils/loadUpdates.js";
	import { buildImageUrl } from "$utils/sanity.js";

	let { data } = $props();
	const post = $derived(data.post);

	const preloadFont = [
		base + "/fonts/AmsiPro-Ultra.woff2",
		base + "/fonts/Carlito/Carlito-Regular.ttf",
		base + "/fonts/Carlito/Carlito-Bold.ttf"
	];

	/**
	 * Escape special HTML characters in plain text spans.
	 */
	function escapeHtml(str) {
		return String(str ?? '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	/**
	 * Convert a single span's text + marks array into an HTML string.
	 */
	function renderSpan(span, markDefs = []) {
		let text = escapeHtml(span.text ?? '');
		for (const mark of span.marks ?? []) {
			switch (mark) {
				case 'strong':        text = `<strong>${text}</strong>`; break;
				case 'em':            text = `<em>${text}</em>`; break;
				case 'underline':     text = `<u>${text}</u>`; break;
				case 'code':          text = `<code>${text}</code>`; break;
				case 'strike-through': text = `<s>${text}</s>`; break;
				default: {
					// Annotation key (e.g. link)
					const def = markDefs.find(d => d._key === mark);
					if (def?._type === 'link') {
						const isExternal = /^https?:\/\//.test(def.href);
						const target = isExternal ? ' target="_blank"' : '';
						const rel = isExternal ? ' rel="noopener noreferrer"' : '';
						text = `<a href="${escapeHtml(def.href)}"${target}${rel}>${text}</a>`;
					}
				}
			}
		}
		return text;
	}

	/**
	 * Convert an array of Portable Text blocks into an HTML string.
	 * Handles paragraphs, headings, blockquotes, and bullet/numbered lists.
	 */
	function portableTextToHtml(blocks = []) {
		let html = '';
		let i = 0;

		while (i < blocks.length) {
			const block = blocks[i];

			// Skip non-block types (images in body, etc.)
			if (block._type !== 'block') { i++; continue; }

			// ── List items ────────────────────────────────────────────
			if (block.listItem) {
				const tag = block.listItem === 'number' ? 'ol' : 'ul';
				let listHtml = `<${tag}>`;
				while (i < blocks.length && blocks[i].listItem === block.listItem) {
					const inner = (blocks[i].children ?? []).map(s => renderSpan(s, blocks[i].markDefs)).join('');
					listHtml += `<li>${inner}</li>`;
					i++;
				}
				listHtml += `</${tag}>`;
				html += listHtml;
				continue;
			}

			// ── Regular blocks ────────────────────────────────────────
			const inner = (block.children ?? []).map(s => renderSpan(s, block.markDefs)).join('');
			switch (block.style ?? 'normal') {
				case 'h1':         html += `<h1>${inner}</h1>`; break;
				case 'h2':         html += `<h2>${inner}</h2>`; break;
				case 'h3':         html += `<h3>${inner}</h3>`; break;
				case 'h4':         html += `<h4>${inner}</h4>`; break;
				case 'h5':         html += `<h5>${inner}</h5>`; break;
				case 'h6':         html += `<h6>${inner}</h6>`; break;
				case 'blockquote': html += `<blockquote><p>${inner}</p></blockquote>`; break;
				default:           html += inner ? `<p>${inner}</p>` : ''; break;
			}
			i++;
		}

		return html;
	}

	const heroImageUrl = $derived(
		buildImageUrl(post?.image, { width: 1400, height: 600 }) ?? `${base}/hero-bg.webp`
	);
	const bodyHtml = $derived(portableTextToHtml(post?.body ?? []));
	const ogImageUrl = $derived(
		buildImageUrl(post?.image, { width: 1200, height: 630 })
	);
</script>

<Meta
	title="{post.title} – Campaign Updates"
	description={post.excerpt ?? `Read the latest campaign update: ${post.title}`}
	url="https://primemembers.earth/updates/{post.slug}"
	ogType="article"
	ogImage={ogImageUrl}
	{preloadFont}
/>

<Header />

<!-- Post Hero -->
<section class="post-hero" style="background-image: url('{heroImageUrl}')">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<nav class="breadcrumb" aria-label="Breadcrumb">
			<a href="{base}/updates">← All Updates</a>
		</nav>
		<time class="post-date" datetime={post.publishedAt}>
			{formatDate(post.publishedAt)}
		</time>
		<h1>{post.title}</h1>
	</div>
</section>

<!-- Post Body -->
<article class="post-article">
	<div class="container">
		<div class="post-body prose">
			{@html bodyHtml}
		</div>

		<!-- Back link -->
		<div class="post-footer">
			<a href="{base}/updates" class="btn btn-outline">← Back to all updates</a>
		</div>
	</div>
</article>

<!-- CTA -->
<section class="cta-section">
	<div class="container">
		<h2>Ready to add your voice?</h2>
		<p>Join thousands of Prime members calling for Amazon to do better on climate.</p>
		<a href="{base}/join" class="btn btn-cta">Join the campaign</a>
	</div>
</section>

<Footer />

<style>
	/* ─── Hero ────────────────────────────────────────── */
	.post-hero {
		position: relative;
		min-height: 55vh;
		display: flex;
		align-items: flex-end;
		background-size: cover;
		background-position: center;
		color: white;
		padding-top: 6rem;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 860px;
		margin: 0 auto;
		width: 100%;
		padding: 3rem 2rem 3.5rem;
	}

	.breadcrumb {
		margin-bottom: 1.2rem;
	}

	.breadcrumb a {
		font-family: 'Carlito', sans-serif;
		font-size: 0.95rem;
		color: rgba(255,255,255,0.8);
		text-decoration: none;
		transition: color 0.2s;
	}

	.breadcrumb a:hover {
		color: #fff;
	}

	.post-date {
		display: block;
		font-family: 'Carlito', sans-serif;
		font-size: 0.85rem;
		color: #ff9f2e;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.75rem;
	}

	.post-hero h1 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: bold;
		line-height: 1.2;
		margin: 0;
	}

	/* ─── Article ─────────────────────────────────────── */
	.post-article {
		background: #fff;
		padding: 4rem 0 3rem;
	}

	.container {
		max-width: 860px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* ─── Prose (body content) ────────────────────────── */
	.prose :global(p) {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: #333;
		margin: 0 0 1.4rem;
	}

	.prose :global(h1),
	.prose :global(h2),
	.prose :global(h3),
	.prose :global(h4),
	.prose :global(h5),
	.prose :global(h6) {
		font-family: 'AmsiPro', sans-serif;
		color: #111;
		line-height: 1.3;
		margin: 2rem 0 0.75rem;
	}

	.prose :global(h2) { font-size: clamp(1.5rem, 3vw, 2rem); }
	.prose :global(h3) { font-size: clamp(1.2rem, 2.5vw, 1.6rem); }

	.prose :global(blockquote) {
		margin: 2rem 0;
		padding: 1rem 1.5rem;
		border-left: 4px solid #1298ff;
		background: #f0f7ff;
		border-radius: 0 8px 8px 0;
	}

	.prose :global(blockquote p) {
		font-size: 1.15rem;
		font-style: italic;
		color: #1a5a8c;
		margin: 0;
	}

	.prose :global(ul),
	.prose :global(ol) {
		font-family: 'Carlito', sans-serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: #333;
		margin: 0 0 1.4rem;
		padding-left: 1.8rem;
	}

	.prose :global(li) {
		margin-bottom: 0.4rem;
	}

	.prose :global(strong) { font-weight: 700; }
	.prose :global(em)     { font-style: italic; }
	.prose :global(u)      { text-decoration: underline; }
	.prose :global(s)      { text-decoration: line-through; }

	.prose :global(code) {
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
		background: #f4f4f4;
		padding: 0.1em 0.4em;
		border-radius: 4px;
	}

	.prose :global(a) {
		color: #1298ff;
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.prose :global(a:hover) {
		color: #0d7ad9;
	}

	/* ─── Footer ──────────────────────────────────────── */
	.post-footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #e8e8e8;
	}

	/* ─── Buttons ─────────────────────────────────────── */
	.btn {
		padding: 0.9rem 1.8rem;
		border: none;
		border-radius: 0;
		font-family: 'AmsiPro', sans-serif;
		font-weight: bold;
		font-size: 1rem;
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

	/* ─── CTA ─────────────────────────────────────────── */
	.cta-section {
		background: linear-gradient(135deg, #1298ff 0%, #0d7ad9 100%);
		color: white;
		padding: 4rem 0;
		text-align: center;
	}

	.cta-section h2 {
		font-family: 'AmsiPro', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 1rem;
	}

	.cta-section p {
		font-family: 'Carlito', sans-serif;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.95;
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

	/* ─── Responsive ──────────────────────────────────── */
	@media (max-width: 768px) {
		.post-hero {
			min-height: 45vh;
			padding-top: 5rem;
		}

		.hero-content {
			padding: 2rem 1.2rem 2.5rem;
		}

		.post-hero h1 {
			font-size: clamp(1.6rem, 7vw, 2.2rem);
		}

		.post-article {
			padding: 2.5rem 0 2rem;
		}

		.container {
			padding: 0 1.2rem;
		}

		.cta-section {
			padding: 3rem 1.2rem;
		}
	}
</style>
