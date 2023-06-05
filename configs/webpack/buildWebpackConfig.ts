import webpack from "webpack";
import {buildRules} from "./buildRules";
import buildResolve from "./buildResolve";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths,isDev} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: buildRules(options)
        },
        resolve: buildResolve(options),
        plugins: buildPlugins(options),
        devtool: isDev?'inline-source-map':undefined,
        devServer: buildDevServer(options),
    }
}