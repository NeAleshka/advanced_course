import type {Meta, StoryObj} from '@storybook/react';
import '../../../app/styles/index.scss';
import {Button, ButtonTheme} from './Button';
import {ThemeDecorator} from 'shared/config/storybook/decarators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Text',
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.CLEAR,
	},
};
export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
};
Outline.decorators = [ThemeDecorator(Theme.DARK)];
