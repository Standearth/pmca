<script>
	import VanGuide from './VanGuide.svelte';

	let { question, value = $bindable(""), required = false, idPrefix = "q" } = $props();
</script>

<fieldset class="choice">
	<legend>{question.label}{#if !required}<span class="optional"> (optional)</span>{/if}{#if question.vanHelp}<VanGuide />{/if}</legend>
	<div class="options">
		{#each question.options as option, i}
			<label class="option" class:selected={value === option}>
				<input
					type="radio"
					name="{idPrefix}-{question.name}"
					value={option}
					bind:group={value}
					{required}
				/>
				<span>{option}</span>
			</label>
		{/each}
	</div>
</fieldset>

<style>
	.choice {
		position: relative;
		border: none;
		margin: 0 0 1.5rem;
		padding: 0;
		text-align: left;
	}

	legend {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.15rem;
		margin-bottom: 0.75rem;
		padding: 0;
	}

	.optional {
		font-family: 'Carlito', sans-serif;
		font-size: 0.95rem;
		color: #666;
	}

	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.option {
		position: relative;
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0.5rem 1rem;
		border: 2px solid #1298ff;
		background: white;
		color: #000;
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		cursor: pointer;
		transition: background 0.15s ease;
	}

	.option:hover {
		background: #e7f1fb;
	}

	.option.selected {
		background: #1298ff;
		color: white;
	}

	.option:focus-within {
		outline: 3px solid #ff9f2e;
		outline-offset: 2px;
	}

	/* Keep the native radio for keyboard and screen readers, but hide it visually. */
	input {
		position: absolute;
		opacity: 0;
		width: 1px;
		height: 1px;
		pointer-events: none;
	}
</style>
