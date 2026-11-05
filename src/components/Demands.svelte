<script>
	// The one canonical wording of the demands, used on home, /join and /learn-more.
	let { intro = "As your most loyal customers, we are calling on you to:", children } = $props();
</script>

<div class="demands-card">
	<div class="card-header">
		<strong>TO: Amazon</strong><br>
		<strong>FROM: Prime members</strong>
	</div>
	<p>{intro}</p>
	<ol>
		<li><span class="accent-orange">Electrify your global delivery fleet</span> from dock to door</li>
		<li>Power every data center and warehouse with <span class="accent-orange">real renewable energy</span></li>
		<li>Create <span class="accent-orange">better working conditions</span>, including fair break times, safety standards, and protecting workers' right to organize</li>
	</ol>
	{@render children?.()}
</div>

<style>
	.demands-card {
		background: white;
		font-size: 1.6rem;
		color: black;
		padding: 2rem;
		border-radius: 0px;
		border: 10px solid #ff9f2e;
		text-align: left;
	}

	.card-header {
		font-family: 'Carlito', sans-serif;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	p {
		font-family: 'Carlito', sans-serif;
		margin-bottom: 1rem;
	}

	ol {
		margin: 1.5rem 0;
		padding-left: 1.5rem;
	}

	li {
		font-family: 'Carlito', sans-serif;
		margin-bottom: 0.8rem;
		line-height: 1.4;
	}

	.accent-orange {
		text-decoration: underline;
		text-decoration-color: #ff9f2e;
		text-underline-offset: 2px;
		text-decoration-thickness: 4px;
		text-decoration-style: solid;
	}

	@media (max-width: 768px) {
		.demands-card {
			font-size: 1.25rem;
			padding: 1.5rem;
		}
	}
</style>
