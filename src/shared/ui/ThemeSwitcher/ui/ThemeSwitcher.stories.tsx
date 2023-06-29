import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {ThemeSwitcher} from './ThemeSwitcher';
import {ThemeDecorator} from 'shared/config/storybook/decarators/ThemeDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
	title: 'shared/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

