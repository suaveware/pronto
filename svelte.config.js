import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterStatic(),
		// paths: {
		// 	base: '/pronto',
		// 	assets: '/pronto',
		// },
	},
};

export default config;
