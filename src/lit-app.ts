import AppLocalStorage from './base/app-localstorage';
import { loadLang } from '../res/values/strings';
import { css, CtLit, customElement, html, property } from '@conectate/ct-lit';
import { injectTheme, Theme } from './base/styles/default-theme';

@customElement('lit-app')
export class LitApp extends CtLit {
	static styles = [
		css`
			:host {
				display: block;
				color: var(--on-background);
			}
		`
	];
	@property({ type: Number }) foo = 1;

	async connectedCallback() {
		await loadLang();
		injectTheme();
		Theme.setTheme(AppLocalStorage.theme || 'light');
		document.getElementById('appPlaceholder') && document.body.removeChild(document.getElementById('appPlaceholder')!);
		super.connectedCallback();
	}

	render() {
		return html` <h1>Hello World!</h1> `;
	}

	firstUpdated() {}
}
