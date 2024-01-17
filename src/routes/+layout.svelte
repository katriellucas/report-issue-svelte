<script lang="ts">
	let { children } = $props();
	import { outcomps } from '$lib/runtime-comps.svelte';
</script>

{@render children()}
{#each outcomps.values() as { component, ...props }}
	<svelte:component this={component} {...props} />
{/each}
