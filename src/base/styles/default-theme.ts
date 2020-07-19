import { css } from 'lit-element';

export let defaultTheme = css`
	.dark {
		--app-color: linear-gradient(90deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);

		--dark-primary-color: #218cb3;
		--dark-accent-color: #0fb8ad;

		/* Blur */
		--app-blur: rgba(35, 35, 37, 0.7);
		--app-blur-dialog: rgba(35, 35, 37, 0.7);
		--app-blur-surface: #1a2c3480;

		/* Fondos */
		--app-background: #111e23;
		/* Fondos Textos que aparecen en los fondos */
		--on-background: #fff;

		/* Fondos que estan en cima de los fondos (ct-cards) */
		--app-surface: #1a2c34;
		/* Fondos Textos que aparecen en los ct-cards */
		--on-surface: #fff;
		--high-emphasis: #ffffffde;
		--medium-emphasis: #fff9;
		--app-disable: #ffffff61;

		--on-surface-opaque: #8e8e8e; /* Texto sencundarios */
		--on-surface-dividers: #bbbbbb24; /* divisores */

		--primary-color: #2cb5e8;
		--on-primary: #fff;
		--primary-color-medium: #2cb5e8b0;
		--primary-color-light: #2cb5e82b;

		--accent-color: #0fb8ad;
		--on-accent: #fff;

		--app-error: #cf6679;
		--on-error: #000000;
	}

	.light {
		--app-color: linear-gradient(90deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);

		--dark-primary-color: #218cb3;
		--dark-accent-color: #0fb8ad;

		/* Blur */
		--app-blur: rgba(255, 255, 255, 0.7);
		--app-blur-surface: rgba(255, 255, 255, 0.7);

		/* Fondos */
		--app-background: #f7f7f8; /* Blanco */
		--app-blur: rgba(255, 255, 255, 0.72);
		/* Fondos Textos que aparecen en los fondos */
		--on-background: #535353; /* Gris */

		/* Fondos que estan en cima de los fondos (ct-cards) */
		--app-surface: #ffffff; /* Blanco */

		/* Fondos Textos que aparecen en los ct-cards */
		--on-surface: #535353; /* Gris */
		--high-emphasis: #000000de;
		--medium-emphasis: #00000099;
		--app-disable: #00000047;

		--on-surface-opaque: #8e8e8e; /* Texto sencundarios */
		--on-surface-dividers: #7c7c7c30; /* divisores */

		/* Color de objeto en cima de color primario */
		--primary-color: #2cb5e8;
		--on-primary: #fff; /* Blanco */
		--primary-color-medium: #2cb5e8b0;
		--primary-color-light: #2cb5e82b;

		--accent-color: #0fb8ad;
		/* Color de objeto en cima de color de acento */
		--on-accent: #fff; /* Blanco */
		/* Color de objeto en cima de error */
		--app-error: #b10808;
		--on-error: #fff; /* Blanco */
	}

	html {
		--blue: #2674fc;
	}
`;

/**
 * Injecta La fuente Ubuntu y las variables CSS
 */
export function injectTheme() {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&family=Roboto:400,500,700';
	// @ts-ignore
	if (window.appendProductSans == null) {
		// @ts-ignore
		window.appendProductSans = true;
		document.head.appendChild(link);
	}

	const style = document.createElement('style');
	style.innerHTML = defaultTheme.cssText;
	document.head.appendChild(style);
}

type CallbackTheme = (theme: 'dark' | 'light') => any;
export class Theme {
	//#region ====== Change Theme listeners ======
	static listeners: CallbackTheme[] = [];

	static on(s: 'change', listener: CallbackTheme) {
		switch (s) {
			case 'change':
				Theme.listeners.push(listener);
		}
	}

	static remove(s: 'change', listener: (theme: string) => any) {
		switch (s) {
			case 'change':
				Theme.listeners = Theme.listeners.filter(_ => _ != listener);
		}
	}
	//#endregion ====== Change Theme listeners ======

	static toogle(color?: 'dark' | 'light') {
		let array: string[] = [];
		if (color) {
			array = [color == 'dark' ? 'light' : 'dark'];
		} else {
			array = Array.from(document.documentElement.classList.values());
		}
		Theme.setTheme(array.includes('dark') ? 'dark' : 'light');
	}

	static setTheme(color: 'dark' | 'light') {
		if (color == 'dark') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			Theme.listeners.forEach(_ => _('dark'));
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			Theme.listeners.forEach(_ => _('light'));
		}
	}
}
