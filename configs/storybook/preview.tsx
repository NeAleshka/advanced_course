import type { Preview } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decarators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { SuspenseDecorator } from '../../src/shared/config/storybook/decarators/SuspenseDecorator';
import '../../src/shared/config/i18n';
import WithI18nextDecorator from '../../src/shared/config/storybook/decarators/withI18nextDecorator';

const preview: Preview = {
    globalTypes: {
        locale: {
            description: 'Locales',
            defaultValue: 'ru',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', right: '🇺🇸', title: 'English' },
                    { value: 'ru', right: 'ru', title: 'Русский' },
                ],
            },
        },
    },
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT), SuspenseDecorator(), WithI18nextDecorator],
};

export default preview;
