import type { Preview } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decarators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { SuspenseDecorator } from '../../src/shared/config/storybook/decarators/SuspenseDecorator';

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
    decorators: [ThemeDecorator(Theme.LIGHT), SuspenseDecorator()],
};

export default preview;
