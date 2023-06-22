import webpack, {type WebpackPluginInstance} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {type BuildOptions} from './types';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name]_[contenthash].css',
			chunkFilename: 'styles/[name]_[chunkhash].css',
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS__DEV__: JSON.stringify(isDev),
		}),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}),
	];
	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	return plugins;
}
