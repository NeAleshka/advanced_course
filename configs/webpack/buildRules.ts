import { type RuleSetRule } from 'webpack';
import reactRefreshTypeScript from 'react-refresh-typescript';
import { type BuildOptions } from './types';
import buildCssLoader from './loaders/buildCssLoader';

export function buildRules({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    const tsLoader = {
        test: /\.tsx?$/,
        use: {
            loader: require.resolve('ts-loader'),
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && reactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            },
        },
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                /* "plugins": [
                    ["i18next-extract", {locales: ["en",
                            "ru"],
                        keyAsDefaultValue: true}]
                ] */ // add plugin "i18next-extract" in babel config
            },
        },
    };

    return [babelLoader, tsLoader, cssLoader, svgLoader, fileLoader];
}
