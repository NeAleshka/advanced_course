import webpack, {WebpackPluginInstance} from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths,mode}:BuildOptions):WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template:paths.html
        }),
        new MiniCssExtractPlugin({
            filename:'styles/[name]_[contenthash].css',
            chunkFilename:'styles/[name]_[chunkhash].css'
        }),
        new webpack.ProgressPlugin()
    ]
}