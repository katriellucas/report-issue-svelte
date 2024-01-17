<script lang="ts">
	let {
		href,
		label,
		type = 'button',
		target = '_self',
		onclick
	} = $props<CommonButton>();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	class="common-button target ripple"
	target={href ? target : null}
	{onclick}
	{href}
	{type}
>
	<span class="label">{label}</span>
</svelte:element>

<style>
	.common-button {
		align-items: center;
		background: #431407;
		border-radius: 999px;
		color: #fef3c7;
		display: inline-flex;
		height: 40px;
		padding: 0 24px;
	}
</style>
