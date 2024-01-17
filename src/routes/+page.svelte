<script lang="ts">
	import BasicDialog from "../components/BasicDialog.svelte"
	import CommonButton from "../components/CommonButton.svelte";
	import { outcomps } from "$lib/runtime-comps.svelte";

	const key = "basic-dialog-key"
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<CommonButton
	label="Open Dialog"
	onclick={() => {
		outcomps.set(key, {
			component: BasicDialog,
			headline: 'Dialog without hero icon',
			text: 'A dialog is a type of modal window that appears in front app content, provide critial information, or ask for a decision.',
			key: key
		});
	}}
/>


