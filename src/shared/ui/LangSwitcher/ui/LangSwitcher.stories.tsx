import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {LangSwitcher} from './LangSwitcher';
import {ThemeDecorator} from 'shared/config/storybook/decarators/ThemeDecorator';

const meta: Meta<typeof LangSwitcher> = {
	title: 'shared/LangSwitcher',
	component: LangSwitcher,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

