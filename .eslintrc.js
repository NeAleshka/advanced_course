module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'@typescript-eslint/naming-convention': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	settings: {
		react: {
			version: '17.0.2',
		},
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/indent': ['error', 'tab'],
		indent: ['error', 'tab'],
		'capitalized-comments': 'off',

	},
	globals: {
		__IS__DEV__: true,
	},
};
