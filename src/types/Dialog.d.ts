import type { Snippet } from 'svelte';

export declare global {
	type BasicDialog = {
		key: string;
		headline: string;
		text: string;
		body?: Snippet;
		footer?: Snippet;
	};
}
