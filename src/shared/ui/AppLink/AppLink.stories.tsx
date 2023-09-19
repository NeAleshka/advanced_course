import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decarators/ThemeDecorator';
import { BrowserRouter } from 'react-router-dom';
import AppLink from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: { to: '/' },
    decorators: [

        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
    },
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
