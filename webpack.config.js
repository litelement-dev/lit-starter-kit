let fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
let app = require('./package.json');
let development = false;

/**
 * @returns {webpack.Configuration}
 * @param {*} env
 * @param {*} options
 */
module.exports = (env, options) => {
	let babelLoader = {
		loader: 'babel-loader',
		options: {
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				'@babel/plugin-syntax-import-meta',
				'@babel/plugin-proposal-optional-chaining',
				'@babel/plugin-proposal-nullish-coalescing-operator',
				'@babel/plugin-proposal-logical-assignment-operators',
				'@babel/plugin-transform-runtime',
				'@babel/plugin-transform-async-to-generator',
				'@babel/plugin-proposal-export-default-from',
				[
					'template-html-minifier',
					{
						modules: {
							'lit-html': ['html'],
							'lit-element': ['html', { name: 'css', encapsulation: 'style' }],
							'@conectate/ct-lit': ['html', { name: 'css', encapsulation: 'style' }]
						},
						htmlMinifier: {
							collapseWhitespace: true,
							removeComments: true,
							caseSensitive: true,
							minifyCSS: true
						}
					}
				],
				// webpack does not support import.meta.url yet, so we rewrite them in babel
				['bundled-import-meta', { importStyle: 'baseURI' }]
			],
			presets: [['@babel/preset-env', { targets: { chrome: development ? '83' : '54' } }]]
		}
	};
	return {
		entry: {
			app: './src/lit-app.ts'
		},
		output: {
			filename: '[name].bundle.js',
			chunkFilename: `[name].[chunkhash].js`,
			path: path.resolve(__dirname, 'dist')
		},
		devtool: development ? 'source-map' : undefined,
		resolve: {
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: ['.ts', '.js', '.json'],
			alias: {
				'lit/decorators': 'lit/decorators.js'
			}
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_EN': JSON.stringify(development ? 'dev' : 'production')
			}),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				minify: {
					collapseWhitespace: true,
					removeComments: true,
					caseSensitive: true,
					minifyCSS: true
				}
			}),
			new CopyPlugin([
				{ from: 'res', to: 'res' },
				{ from: 'manifest.json', to: 'manifest.json' },
				{ from: 'node_modules/@webcomponents', to: 'node_modules/@webcomponents' }
			])
		],
		optimization: {
			minimizer: [
				!development &&
					new TerserPlugin({
						terserOptions: {
							output: {
								comments: false
							}
						},
						parallel: true
					})
			].filter(_ => !!_)
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					use: [
						babelLoader,
						{
							loader: 'ts-loader',
							options: { transpileOnly: true }
						}
					]
				},
				{
					test: /\.js$/,
					use: babelLoader
				},
				{
					test: /\.svg$/,
					loader: 'svg-inline-loader'
				},
				{
					test: /\.m?js/,
					resolve: {
						fullySpecified: false
					}
				},
			]
		},
		devServer: {
			writeToDisk: true,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			disableHostCheck: true,
			contentBase: process.cwd(),
			compress: true,
			port: 8000,
			historyApiFallback: true,
			stats: {
				stats: 'errors-only'
			},
			watchOptions: {
				ignored: [path.resolve(__dirname, 'res/drawable')]
			}
		}
	};
};
