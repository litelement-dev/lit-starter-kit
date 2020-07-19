import { html, css, unsafeHTML } from '@conectate/ct-lit';

export const litStyles = css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	.highlight-font {
		font-family: 'Google Sans', 'Ubuntu', arial, sans-serif;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Google Sans', 'Ubuntu', arial, sans-serif;
	}
	h1,
	h2,
	h3,
	h4 {
		color: var(--dark-primary-color);
		/* margin-top: 0.8em;
		margin-bottom: 0.8em; */
	}

	a {
		color: var(--primary-color);
		text-decoration: none;
		transition: border-color var(--animation);
	}

	.pre-t {
		margin-top: 0;
		margin-bottom: 40px;
		color: var(--primary-color);
		font-size: 13px;
		font-weight: 500;
		text-align: center;
		letter-spacing: 6px;
		text-transform: uppercase;
	}
	.t-1 {
		font-size: 1.5em;
		margin: 0.67em 0 0 0;
	}
	.t-1:before {
		background-image: var(--app-color);
		display: block;
		content: '';
		width: 1.4em;
		height: 2px;
		margin: 0.5em 0;
	}

	.t-2 {
		font-size: 1.3em;
		margin: 0 0 0.67em 0;
		font-weight: normal;
	}

	.t-3 {
		font-weight: normal;
		font-size: 1.3em;
	}
	.t-3:before {
		background-image: var(--app-color);
		display: block;
		content: '';
		width: 2.25em;
		height: 2px;
		margin: 0.7em 0;
	}

	[hidden] {
		display: none !important;
	}
	[fit] {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	[scroll] {
		-webkit-overflow-scrolling: touch;
				scroll-behavior: smooth;
		overflow: auto;
	}
`;

export const litSharedStyles = html`
	${unsafeHTML(`<style>${litStyles.cssText}</style>`)}
	<!-- Flex-->
	<style>
		[layout][horizontal],
		[layout][vertical] {
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
		}

		[layout][inline] {
			display: -ms-inline-flexbox;
			display: -webkit-inline-flex;
			display: inline-flex;
		}

		[layout][horizontal] {
			-ms-flex-direction: row;
			-webkit-flex-direction: row;
			flex-direction: row;
		}

		[layout][vertical] {
			-ms-flex-direction: column;
			-webkit-flex-direction: column;
			flex-direction: column;
		}

		[layout][wrap] {
			-ms-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;
		}

		[layout][center],
		[layout][center-center] {
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
		}

		[layout][center-justified],
		[layout][center-center] {
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
		}

		[flex] {
			-ms-flex: 1 1 0.000000001px;
			-webkit-flex: 1;
			flex: 1;
			-webkit-flex-basis: 0.000000001px;
			flex-basis: 0.000000001px;
		}

		[flex-auto] {
			-ms-flex: 1 1 auto;
			-webkit-flex: 1 1 auto;
			flex: 1 1 auto;
		}

		[flex-none] {
			-ms-flex: none;
			-webkit-flex: none;
			flex: none;
		}
	</style>
	<!-- Flex alignment-->
	<style>
		/**
	 * Alignment in cross axis.
	 */
		[layout][start] {
			-ms-flex-align: start;
			-webkit-align-items: flex-start;
			align-items: flex-start;
		}

		[layout][center],
		[layout][center-center] {
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
		}

		[layout][end] {
			-ms-flex-align: end;
			-webkit-align-items: flex-end;
			align-items: flex-end;
		}

		[layout][baseline] {
			-ms-flex-align: baseline;
			-webkit-align-items: baseline;
			align-items: baseline;
		}

		/**
	 * Alignment in main axis.
	 */
		[layout][start-justified] {
			-ms-flex-pack: start;
			-webkit-justify-content: flex-start;
			justify-content: flex-start;
		}

		[layout][center-justified],
		[layout][center-center] {
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
		}

		[layout][end-justified] {
			-ms-flex-pack: end;
			-webkit-justify-content: flex-end;
			justify-content: flex-end;
		}

		[layout][around-justified] {
			-ms-flex-pack: distribute;
			-webkit-justify-content: space-around;
			justify-content: space-around;
		}

		[layout][justified] {
			-ms-flex-pack: justify;
			-webkit-justify-content: space-between;
			justify-content: space-between;
		}

		/**
	 * Self alignment.
	 */
		[self-start] {
			-ms-align-self: flex-start;
			-webkit-align-self: flex-start;
			align-self: flex-start;
		}

		[self-center] {
			-ms-align-self: center;
			-webkit-align-self: center;
			align-self: center;
		}

		[self-end] {
			-ms-align-self: flex-end;
			-webkit-align-self: flex-end;
			align-self: flex-end;
		}

		[self-stretch] {
			-ms-align-self: stretch;
			-webkit-align-self: stretch;
			align-self: stretch;
		}

		[self-baseline] {
			-ms-align-self: baseline;
			-webkit-align-self: baseline;
			align-self: baseline;
		}

		/**
	 * multi-line alignment in main axis.
	 */
		[layout][start-aligned] {
			-ms-flex-line-pack: start; /* IE10 */
			-ms-align-content: flex-start;
			-webkit-align-content: flex-start;
			align-content: flex-start;
		}

		[layout][end-aligned] {
			-ms-flex-line-pack: end; /* IE10 */
			-ms-align-content: flex-end;
			-webkit-align-content: flex-end;
			align-content: flex-end;
		}

		[layout][center-aligned] {
			-ms-flex-line-pack: center; /* IE10 */
			-ms-align-content: center;
			-webkit-align-content: center;
			align-content: center;
		}

		[layout][between-aligned] {
			-ms-flex-line-pack: justify; /* IE10 */
			-ms-align-content: space-between;
			-webkit-align-content: space-between;
			align-content: space-between;
		}

		[layout][around-aligned] {
			-ms-flex-line-pack: distribute; /* IE10 */
			-ms-align-content: space-around;
			-webkit-align-content: space-around;
			align-content: space-around;
		}
	</style>
	<!--Flex factors-->
	<style>
		[flex],
		[flex-1] {
			-ms-flex: 1 1 0.000000001px;
			-webkit-flex: 1;
			flex: 1;
			-webkit-flex-basis: 0.000000001px;
			flex-basis: 0.000000001px;
		}

		[flex-2] {
			-ms-flex: 2;
			-webkit-flex: 2;
			flex: 2;
		}

		[flex-3] {
			-ms-flex: 3;
			-webkit-flex: 3;
			flex: 3;
		}

		[flex-4] {
			-ms-flex: 4;
			-webkit-flex: 4;
			flex: 4;
		}

		[flex-5] {
			-ms-flex: 5;
			-webkit-flex: 5;
			flex: 5;
		}

		[flex-6] {
			-ms-flex: 6;
			-webkit-flex: 6;
			flex: 6;
		}

		[flex-7] {
			-ms-flex: 7;
			-webkit-flex: 7;
			flex: 7;
		}

		[flex-8] {
			-ms-flex: 8;
			-webkit-flex: 8;
			flex: 8;
		}

		[flex-9] {
			-ms-flex: 9;
			-webkit-flex: 9;
			flex: 9;
		}

		[flex-10] {
			-ms-flex: 10;
			-webkit-flex: 10;
			flex: 10;
		}

		[flex-11] {
			-ms-flex: 11;
			-webkit-flex: 11;
			flex: 11;
		}

		[flex-12] {
			-ms-flex: 12;
			-webkit-flex: 12;
			flex: 12;
		}
	</style>
	<!-- flex reverse-->
	<style>
		[layout][horizontal-reverse],
		[layout][vertical-reverse] {
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
		}

		[layout][horizontal-reverse] {
			-ms-flex-direction: row-reverse;
			-webkit-flex-direction: row-reverse;
			flex-direction: row-reverse;
		}

		[layout][vertical-reverse] {
			-ms-flex-direction: column-reverse;
			-webkit-flex-direction: column-reverse;
			flex-direction: column-reverse;
		}

		[layout][wrap-reverse] {
			-ms-flex-wrap: wrap-reverse;
			-webkit-flex-wrap: wrap-reverse;
			flex-wrap: wrap-reverse;
		}
	</style>
	<!-- positioning-->
	<style>
		[block] {
			display: block !important;
		}

		[hidden] {
			display: none !important;
		}
		[fit] {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}

		[scroll] {
			-webkit-overflow-scrolling: touch;
				scroll-behavior: smooth;
			overflow: auto;
		}

		[invisible] {
			visibility: hidden !important;
		}

		[relative] {
			position: relative;
		}

		/* fixed position */
		[fixed-bottom],
		[fixed-left],
		[fixed-right],
		[fixed-top] {
			position: fixed;
		}

		[fixed-top] {
			top: 0;
			left: 0;
			right: 0;
		}

		[fixed-right] {
			top: 0;
			right: 0;
			bottom: 0;
		}

		[fixed-bottom] {
			right: 0;
			bottom: 0;
			left: 0;
		}

		[fixed-left] {
			top: 0;
			bottom: 0;
			left: 0;
		}
	</style>
`;
