<script lang="ts">
	import { closeBackdrop } from '$lib/actions/closeBackdrop';
	import { fade } from 'svelte/transition';

	let { key } = $props<Backdrop>();
</script>

<div
	class="backdrop"
	use:closeBackdrop={key}
	transition:fade|global={{ delay: 100, duration: 100 }}
/>

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
