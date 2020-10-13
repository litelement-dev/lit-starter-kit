import './base/app-pages';
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
			header {
				display: flex;
				align-items: center;
				font-size: 1.5em;
				font-weight: bold;
				padding: 0px 16px;
				height: 56px;
				color: var(--primary-color);
				background: var(--app-surface);
				box-shadow: rgba(0, 0, 0, 0.26) 0px 4px 11px 0px;
				z-index: 90;
				position: relative;
			}
		`
	];
	@property({ type: Number }) foo = 1;

	async connectedCallback() {
		await loadLang();
		injectTheme();
		Theme.setTheme(AppLocalStorage.theme || 'light');
		super.connectedCallback();
	}

	render() {
		return html`
			<header>Lit Starter App</header>
			<main>
				<app-pages></app-pages>
			</main>
		`;
	}

	firstUpdated() {}
}
