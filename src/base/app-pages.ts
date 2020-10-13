import { CtLit, html, customElement, css } from '@conectate/ct-lit';
import { Page } from '@conectate/ct-router';
import '@conectate/ct-router';

@customElement('app-pages')
export class AppPages extends CtLit {
	static styles = [
		css`
			:host {
				display: block;
			}
		`
	];
	static pages: Page[] = [
		{
			path: '/',
			element: html`<home-app></home-app>`, // you cand use html``
			from: () => import('../home/activities/home-app'),
			auth: false,
			title: () => `Page 1 • Example.com`
		},
		{
			path: '/other/:wildcardPage',
			element: html`<home-app></home-app>`,
			from: () => import('../home/activities/home-app'),
			auth: false,
			title: () => `Page 2 • Example.com`
		}
	];

	render() {
		return html` <ct-router id="ctrouter" loginFallback="/404" .pages=${AppPages.pages}> </ct-router>`;
	}
}
