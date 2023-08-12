module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['xo', 'plugin:react/recommended', 'plugin:storybook/recommended', 'plugin:react-hooks/recommended'],
	overrides: [{
		extends: ['xo-typescript'],
		files: ['*.ts', '*.tsx'],
		rules: {
			'@typescript-eslint/naming-convention': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/prefer-includes': 'off',
			'@typescript-eslint/no-dynamic-delete': 'off',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-floating-promises': 'off',
		},
	}],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
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
		'react/display-name': 'off',
		'new-cap': 'off',
	},
	globals: {
		__IS__DEV__: true,
	},
};
