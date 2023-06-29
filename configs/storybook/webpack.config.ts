import type webpack from 'webpack';
import {type BuildPaths} from '../webpack/types';
import path from 'path';
import buildCssLoader from '../webpack/loaders/buildCssLoader';
import {type RuleSetRule} from 'webpack';

export default ({config}: {config: webpack.Configuration}) => {
	const paths: BuildPaths = {
		entry: '',
		output: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
		html: '',
	};
	if (config.resolve?.modules && config.module?.rules) {
		config.resolve?.modules?.push(paths.src);
		config.resolve?.extensions?.push('ts', 'tsx');
		config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
			if (rule.test?.toString().includes('svg')) {
				return {...rule, exclude: /\.svg$/i};
			}

			return rule;
		});
		config.module?.rules?.push(buildCssLoader(true));
		config.module?.rules?.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
	}

	return config;
};
