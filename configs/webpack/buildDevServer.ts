import {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {BuildOptions} from "./types";

export function buildDevServer({port}: BuildOptions):DevServerConfiguration {
    return {
        open:true,
        port,
        historyApiFallback:true
    }
}