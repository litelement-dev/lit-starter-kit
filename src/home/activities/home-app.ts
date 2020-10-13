import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';

@customElement('home-app')
export class HomeApp extends CtLit {
	static styles = [
		css`
			:host {
				display: block;
			}
		`
	];

	render() {
		return html` <h1>Hello World</h1>`;
	}
}
