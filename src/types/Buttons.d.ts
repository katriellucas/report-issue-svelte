export declare global {
	type CommonButton = {
		href?: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		onclick?: Function;
		label: string;
		type?: 'button' | 'submit' | 'reset';
	};
}
