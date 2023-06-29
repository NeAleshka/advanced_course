import path from 'path';
import {buildWebpackConfig} from './configs/webpack/buildWebpackConfig';
import {type BuildENV} from './configs/webpack/types';

export default (env: BuildENV) => {
	const mode = env.mode || 'development';
	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		paths: {
			html: path.resolve(__dirname, 'public', 'index.html'),
			output: path.resolve(__dirname, 'build'),
			entry: path.resolve(__dirname, 'src', 'main.tsx'),
			src: path.resolve(__dirname, 'src'),
		},
		port: 3000,
		isDev,
	});
};
