<script lang="ts">
	import Backdrop from './Backdrop.svelte';
	import { fade } from 'svelte/transition';

	let { headline, text, key, body, footer } = $props<BasicDialog>();
</script>

<Backdrop {key} />
<div class="dialog" transition:fade|global={{ delay: 100, duration: 100 }}>
	<div class="content">
		<div class="head">
			<span class="title">{headline}</span>
			<p class="description">{text}</p>
		</div>
		<div class="body">
			{#if body}
				{@render body()}
			{/if}
		</div>
		<div class="footer">
			{#if footer}
				{@render footer()}
			{/if}
		</div>
	</div>
</div>

<style>
	.dialog {
		background: #fed7aa;
		border-radius: 28px;
		display: flex;
		flex-direction: column;
		max-width: 560px;
		min-width: 280px;
		padding: 24px;
		place-self: center;
		top: 50%;
		left: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
		position: fixed;
		z-index: 2;
	}

	.head {
		margin-bottom: 24px;
	}

	.title {
		color: #431407;
		margin-bottom: 16px;
	}

	.description {
		color: #7c2d12;
		letter-spacing: 0.25px;
		margin-bottom: 24px;
	}

	.footer {
		align-items: center;
		display: flex;
		justify-content: flex-end;
		gap: 8px;
	}
</style>
