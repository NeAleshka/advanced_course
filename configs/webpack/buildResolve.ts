import {ResolveOptions} from 'webpack'
import {BuildOptions} from "./types";

export default function buildResolve(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index']
    }
}