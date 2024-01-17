import { outcomps } from '$lib/runtime-comps.svelte';
import { onDestroy } from 'svelte';

export function closeBackdrop(node: HTMLElement, key: string) {
	const handleClick = () => outcomps.delete(key);
	const handleMouseup = () => node.addEventListener('mouseup', handleClick);

	node.addEventListener('mousedown', handleMouseup);

	onDestroy(() => {
		node.removeEventListener('mousedown', handleMouseup);
		node.removeEventListener('mouseup', handleClick);
	});
}
