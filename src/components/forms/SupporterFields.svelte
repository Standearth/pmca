<script>
	import { onMount } from 'svelte';
	import { loadSupporter, forgetSupporter } from '$utils/forms.js';
	import { COUNTRIES } from '$data/diaryQuestions.js';

	// `supporter` is filled from this device's memory when the member has used a form before.
	// Only the postal code is required; name and email are optional unless the member opts in to updates.
	let {
		supporter = $bindable({ email: '', first_name: '', postal_code: '', country: 'United States' }),
		optIn = $bindable(false),
		idPrefix = 'sup'
	} = $props();

	let known = $state(false);

	// Opting in needs an email, so open the fields if the saved details have none.
	$effect(() => {
		if (optIn && known && !supporter.email) known = false;
	});

	onMount(() => {
		const saved = loadSupporter();
		if (saved?.postal_code) {
			supporter = { ...supporter, ...saved };
			known = true;
		}
	});

	function notMe() {
		forgetSupporter();
		supporter = { email: '', first_name: '', postal_code: '', country: 'United States' };
		known = false;
	}
</script>

{#if known}
	<p class="known">
		{#if supporter.email}
			Sending as <strong>{supporter.first_name || supporter.email}</strong>{#if supporter.first_name} ({supporter.email}){/if}, {supporter.postal_code}.
		{:else}
			Sending from postal code <strong>{supporter.postal_code}</strong>, no name or email.
		{/if}
		<button type="button" class="link-btn" onclick={notMe}>Not you?</button>
		<button type="button" class="link-btn" onclick={() => (known = false)}>Edit</button>
	</p>
{:else}
	<div class="fields">
		<label class="field">
			<span>ZIP / postal code</span>
			<input type="text" bind:value={supporter.postal_code} autocomplete="postal-code" required maxlength="10" id="{idPrefix}-postal" />
		</label>
		<label class="field">
			<span>Country</span>
			<select bind:value={supporter.country} autocomplete="country-name" id="{idPrefix}-country">
				{#each COUNTRIES as country}
					<option value={country}>{country}</option>
				{/each}
			</select>
		</label>
		<label class="field">
			<span>First name <span class="optional">(optional)</span></span>
			<input type="text" bind:value={supporter.first_name} autocomplete="given-name" id="{idPrefix}-first" />
		</label>
		<label class="field">
			<span>Email {#if !optIn}<span class="optional">(optional)</span>{/if}</span>
			<input type="email" bind:value={supporter.email} autocomplete="email" required={optIn} id="{idPrefix}-email" />
		</label>
	</div>
{/if}

<label class="opt-in">
	<input type="checkbox" bind:checked={optIn} id="{idPrefix}-opt-in" />
	<span>Keep me updated on this campaign <span class="optional">(optional)</span></span>
</label>

<style>
	.known {
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		text-align: left;
		margin: 0 0 1.5rem;
		padding: 0.75rem 1rem;
		background: #f8f9fa;
	}

	.link-btn {
		background: none;
		border: none;
		padding: 0 0 0 0.5rem;
		color: #1298ff;
		font-family: inherit;
		font-size: inherit;
		text-decoration: underline;
		cursor: pointer;
	}

	.fields {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1.5rem;
		text-align: left;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-family: 'AmsiPro', sans-serif;
		font-size: 0.95rem;
	}

	.optional {
		font-family: 'Carlito', sans-serif;
		color: #666;
	}

	input[type='text'],
	input[type='email'],
	select {
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		min-height: 44px;
		padding: 0.5rem 0.75rem;
		border: 2px solid #ccc;
		border-radius: 0;
		background: white;
		color: #000;
	}

	input:focus,
	select:focus {
		outline: none;
		border-color: #1298ff;
	}

	.opt-in {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		color: #222;
		margin: 0 0 1.5rem;
		text-align: left;
		cursor: pointer;
	}

	.opt-in input {
		width: 1.2rem;
		height: 1.2rem;
		accent-color: #ff9f2e;
	}

	@media (max-width: 480px) {
		.fields {
			grid-template-columns: 1fr;
		}
	}
</style>
