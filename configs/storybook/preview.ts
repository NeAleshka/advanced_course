import type { Preview } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decarators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },

    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default preview;
