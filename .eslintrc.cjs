module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3', 'jest'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
		quotes: ['error', 'single', { avoidEscape: true }],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
		'jest/globals': true,
	},
};
