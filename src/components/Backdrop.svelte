<script lang="ts">
	import { fade } from 'svelte/transition';

	let { show } = $props<Backdrop>();
</script>

{#if show}
	<div
		class="backdrop"
		onclick={()=> show = false}
		transition:fade|global={{ delay: 100, duration: 100 }}
	/>
{/if}

<style>
	.backdrop {
		background: rgba(0, 0, 0, 0.5);
		height: 100%;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1;
	}
</style>
