<script>
	import { onMount, tick } from 'svelte';
	import ChoiceQuestion from './ChoiceQuestion.svelte';
	import SupporterFields from './SupporterFields.svelte';
	import AddToHomeScreen from '$components/AddToHomeScreen.svelte';
	import { diaryStats } from '$runes/diaryStats.svelte.js';
	import { newRef, submitForm, saveSupporter, loadSupporter, getUtm } from '$utils/forms.js';
	import diary from '$data/diary.json';
	import { trackDiaryLog } from '$utils/analytics.js';
	import {
		diaryFast,
		groupedSelected,
		diaryExpanded,
		spotter,
		sightingWhen,
		SPLIT_STILL_COMING,
		WHERE_ELSEWHERE
	} from '$data/diaryQuestions.js';

	let { door = $bindable('') } = $props();

	const emptyDiary = () => ({ packaging: '', split_status: '', box_fit: '', grouped_selected: '', vehicle: '', inside: '' });
	const emptySpotter = () => ({ vehicle: '', sighting_where: '', sighting_location: '', sighting_when: '' });

	let supporter = $state({ email: '', first_name: '', postal_code: '', country: 'United States' });
	let optIn = $state(false);
	let diaryAnswers = $state(emptyDiary());
	let spotterAnswers = $state(emptySpotter());
	let expanded = $state(false);
	let comment = $state('');
	let ref = $state('');
	let status = $state('idle'); // idle | sending | done
	let error = $state('');
	let preview = $state(false);
	let lastDoor = $state('');
	let formEl = $state();
	let shared = $state(false);
	// Spam trap: a field people never see, and the time it took to fill the form in.
	let trap = $state('');
	let startedAt = 0;

	const showGrouped = $derived(diaryAnswers.split_status === SPLIT_STILL_COMING);
	const showLocation = $derived(spotterAnswers.sighting_where === WHERE_ELSEWHERE);

	onMount(() => {
		ref = newRef();
		startedAt = Date.now();
	});

	// Hidden follow-ups never send a stale answer.
	$effect(() => {
		if (!showGrouped) diaryAnswers.grouped_selected = '';
	});
	$effect(() => {
		if (!showLocation) spotterAnswers.sighting_location = '';
	});

	function answersFor(currentDoor) {
		if (currentDoor === 'diary') {
			return { log_type: 'diary', ...$state.snapshot(diaryAnswers), comment: comment.trim() };
		}
		return { log_type: 'spotter', ...$state.snapshot(spotterAnswers), comment: comment.trim() };
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (status === 'sending' || !door) return;
		error = '';
		status = 'sending';
		const cleanSupporter = { ...$state.snapshot(supporter), email: supporter.email.trim() };
		// Checked before saving, so a first log on this device reports as new.
		const returning = Boolean(loadSupporter()?.postal_code);
		try {
			const result = await submitForm('diary', {
				ref,
				supporter: { ...cleanSupporter, opt_in: optIn },
				answers: answersFor(door),
				trap,
				startedAt
			});
			// Consent is asked fresh each time, so it's never saved as pre-ticked.
			saveSupporter(cleanSupporter);
			preview = result.preview;
			if (!result.preview) trackDiaryLog(door, getUtm(), returning);
			lastDoor = door;
			diaryStats.count += 1;
			status = 'done';
		} catch (e) {
			error = e.message;
			status = 'idle';
		}
	}

	// Phones get the native share sheet; elsewhere the link goes to the clipboard.
	async function shareDiary() {
		const url = 'https://primemembers.earth/diary/?utm_source=member_share&utm_medium=referral';
		const text = "I'm logging what Amazon delivers to my door so Amazon can't ignore what its customers see. It takes 20 seconds:";
		try {
			if (navigator.share) {
				await navigator.share({ text, url });
			} else {
				await navigator.clipboard.writeText(`${text} ${url}`);
				shared = true;
			}
		} catch {
			// share sheet dismissed
		}
	}

	async function logAgain(nextDoor) {
		diaryAnswers = emptyDiary();
		spotterAnswers = emptySpotter();
		expanded = false;
		comment = '';
		ref = newRef();
		startedAt = Date.now();
		door = nextDoor;
		status = 'idle';
		await tick();
		formEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

{#if status === 'done'}
	<div class="thanks" role="status">
		<h3>Logged. Thank you.</h3>
		{#if preview}<p class="preview-note">Test mode: saving isn't switched on yet, so this log wasn't stored.</p>{/if}
		{#if diaryStats.count > 0}
			<p class="thanks-count">Members have logged <strong>{diaryStats.count.toLocaleString()}</strong> deliveries and sightings so far.</p>
		{/if}
		<div class="thanks-actions">
			<button type="button" class="btn btn-cta" onclick={() => logAgain(lastDoor)}>Log another</button>
			{#if lastDoor === 'diary'}
				<button type="button" class="btn btn-outline" onclick={() => logAgain('spotter')}>I saw a van too</button>
			{:else}
				<button type="button" class="btn btn-outline" onclick={() => logAgain('diary')}>A package arrived too</button>
			{/if}
			<button type="button" class="btn btn-outline" onclick={shareDiary}>{shared ? 'Link copied' : 'Bring someone who shops on Amazon'}</button>
		</div>
		<AddToHomeScreen />
	</div>
{:else}
	<form class="diary-form" onsubmit={handleSubmit} bind:this={formEl}>
		<div class="doors" role="group" aria-label="What are you logging?">
			<button type="button" class="door" aria-pressed={door === 'diary'} onclick={() => (door = 'diary')}>
				<span class="door-label"><span aria-hidden="true">📦</span> A package arrived</span>
				{#if door === 'diary'}<span class="door-selected" aria-hidden="true">✓ Selected</span>{/if}
			</button>
			<button type="button" class="door" aria-pressed={door === 'spotter'} onclick={() => (door = 'spotter')}>
				<span class="door-label"><span aria-hidden="true">🚐</span> I saw an Amazon van</span>
				{#if door === 'spotter'}<span class="door-selected" aria-hidden="true">✓ Selected</span>{/if}
			</button>
		</div>

		{#if door === 'diary'}
			{#each diaryFast as question}
				<ChoiceQuestion {question} bind:value={diaryAnswers[question.name]} required={!question.optional} idPrefix="d" />
			{/each}
			{#if showGrouped}
				<ChoiceQuestion question={groupedSelected} bind:value={diaryAnswers.grouped_selected} required idPrefix="d" />
			{/if}
			{#if expanded}
				{#each diaryExpanded as question}
					<ChoiceQuestion {question} bind:value={diaryAnswers[question.name]} idPrefix="d" />
				{/each}
			{:else}
				<button type="button" class="more" onclick={() => (expanded = true)}>Add more detail (optional)</button>
			{/if}
		{:else if door === 'spotter'}
			<div class="guide">
				<p><strong>Not sure what it was? Pick "Not sure".</strong> A wrong guess hurts the count more than a blank. Tap the <span class="guide-q">?</span> for how to tell electric and gas vans apart.</p>
			</div>
			{#each spotter as question}
				<ChoiceQuestion {question} bind:value={spotterAnswers[question.name]} required idPrefix="s" />
			{/each}
			{#if showLocation}
				<label class="text-field">
					<span>Postal code or town</span>
					<input type="text" bind:value={spotterAnswers.sighting_location} maxlength="40" required />
					<small>Never a street address.</small>
				</label>
			{/if}
			<ChoiceQuestion question={sightingWhen} bind:value={spotterAnswers.sighting_when} required idPrefix="s" />
		{/if}

		{#if door}
			<label class="text-field comment">
				<span>Anything else to add? <em>(optional)</em></span>
				<textarea bind:value={comment} maxlength="500" rows="3"></textarea>
				<small>Please leave out names, addresses and other personal details.</small>
			</label>
		{/if}

		<div class="trap" aria-hidden="true">
			<label>Leave this field empty <input type="text" name="website" tabindex="-1" autocomplete="off" bind:value={trap} /></label>
		</div>

		{#if door}
			<SupporterFields bind:supporter bind:optIn idPrefix="diary" />
			<p class="privacy">No photos, no Amazon account details, no street addresses. Never photograph or follow a driver.</p>
			{#if error}<p class="error" role="alert">{error}</p>{/if}
			<button type="submit" class="btn btn-cta submit" disabled={status === 'sending'}>
				{status === 'sending' ? 'Saving…' : 'Log it'}
			</button>
			{#if optIn && diary.optInDisclaimer}<p class="disclaimer">{@html diary.optInDisclaimer}</p>{/if}
		{/if}
	</form>
{/if}

<style>
	.diary-form,
	.thanks {
		max-width: 640px;
		margin: 0 auto;
		background: white;
		border: 10px solid #ff9f2e;
		padding: 2rem;
		text-align: left;
	}

	.doors {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	/* Unpicked: white and outlined. Picked: filled orange, dark border, "Selected" tag. */
	.door {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		min-height: 5.5rem;
		padding: 1rem 0.75rem;
		background: white;
		color: #000;
		border: 3px solid #ff9f2e;
		border-radius: 0;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.15rem;
		cursor: pointer;
		transition: background 0.15s ease, border-color 0.15s ease;
	}

	.door:hover {
		background: #fff4e6;
	}

	.door:focus-visible {
		outline: 3px solid #1298ff;
		outline-offset: 2px;
	}

	.door[aria-pressed='true'] {
		background: #ff9f2e;
		border-color: #000;
	}

	.door-selected {
		font-family: 'Carlito', sans-serif;
		font-size: 0.9rem;
		font-weight: bold;
		background: #000;
		color: white;
		padding: 0.1rem 0.5rem;
	}

	/* Off-screen rather than display:none, which some bots skip. */
	.trap {
		position: absolute;
		left: -10000px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.more {
		margin: 0 0 1.5rem;
		padding: 0.6rem 1rem;
		background: transparent;
		border: 2px dashed #1298ff;
		color: #1298ff;
		font-family: 'AmsiPro', sans-serif;
		cursor: pointer;
	}

	.guide {
		background: #e7f1fb;
		padding: 1rem;
		margin-bottom: 1.5rem;
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		line-height: 1.45;
	}

	.guide-q {
		display: inline-block;
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		background: #1298ff;
		color: white;
		text-align: center;
		font-family: 'AmsiPro', sans-serif;
		font-size: 0.85rem;
		line-height: 1.3rem;
	}

	.text-field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		margin: -0.5rem 0 1.5rem;
		font-family: 'AmsiPro', sans-serif;
	}

	.text-field.comment {
		margin-top: 0;
	}

	.text-field em {
		font-family: 'Carlito', sans-serif;
		font-style: normal;
		color: #666;
	}

	.text-field textarea {
		resize: vertical;
	}

	.text-field input,
	.text-field textarea {
		font-family: 'Carlito', sans-serif;
		font-size: 1.05rem;
		min-height: 44px;
		padding: 0.5rem 0.75rem;
		border: 2px solid #ccc;
		border-radius: 0;
	}

	.text-field small {
		font-family: 'Carlito', sans-serif;
		color: #666;
	}

	.privacy {
		font-family: 'Carlito', sans-serif;
		font-size: 0.95rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.disclaimer {
		font-family: 'Carlito', sans-serif;
		font-size: 0.9rem;
		line-height: 1.45;
		color: #555;
		margin-top: 1rem;
	}

	.error {
		font-family: 'Carlito', sans-serif;
		color: #b00020;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.btn {
		padding: 1rem 2rem;
		border: 2px solid #ff9f2e;
		border-radius: 0;
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.1rem;
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
		text-align: center;
		transition: all 0.2s ease;
	}

	.btn-cta {
		background: #ff9f2e;
		color: #000;
	}

	.btn-cta:hover:not(:disabled) {
		background: #e88a1a;
	}

	.btn-outline {
		background: transparent;
		color: #000;
	}

	.btn-outline:hover {
		background: #ff9f2e;
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: wait;
	}

	.submit {
		width: 100%;
	}

	.thanks h3 {
		font-family: 'AmsiPro', sans-serif;
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	.thanks-count,
	.preview-note {
		font-family: 'Carlito', sans-serif;
		font-size: 1.15rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.preview-note {
		background: #f9eeda;
		padding: 0.5rem 0.75rem;
	}

	.thanks-actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	@media (max-width: 480px) {
		.diary-form,
		.thanks {
			padding: 1.25rem;
			border-width: 6px;
		}

		.doors {
			grid-template-columns: 1fr;
		}
	}
</style>
