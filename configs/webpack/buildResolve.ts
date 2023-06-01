import {ResolveOptions} from 'webpack'

export default function buildResolve ():ResolveOptions {
    return {
            extensions: ['.tsx', '.ts', '.js'],
        }
}