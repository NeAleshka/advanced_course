import webpack from 'webpack';
import path from 'path';
import { type RuleSetRule } from 'webpack';
import { type BuildPaths } from '../webpack/types';
import buildCssLoader from '../webpack/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        output: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        html: '',
    };
    if (config.resolve?.modules && config.module?.rules) {
        config.resolve?.modules?.push(paths.src);
        config.resolve?.extensions?.push('ts', 'tsx');
        // @ts-expect-error // потом допилю
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (rule.test?.toString().includes('svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
        config.module?.rules?.push(buildCssLoader(true));
        config.module?.rules?.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        config.plugins?.push(new webpack.DefinePlugin({
            __IS__DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }));
    }

    return config;
};
