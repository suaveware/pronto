module.exports = {
	plugins: [
		[
			'module-resolver',
			{
				root: '/',
				alias: {
					$lib: ['./src/lib'],
				},
			},
		],
	],
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
};
