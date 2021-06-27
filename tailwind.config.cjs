module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	plugins: [require('@tailwindcss/forms')],
	theme: {
		fontFamily: {
			'mono': ['Fira Mono'],
			'sans': ['Fira Sans']
		}
	}
};