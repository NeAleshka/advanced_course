import type {Meta, StoryObj} from '@storybook/react';
import '../../../app/styles/index.scss';
import {Button, ButtonSizes, ButtonTheme} from './Button';
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

export const SquareSizeM: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.INVERTEDBACKGROUND,
		size: ButtonSizes.M,
		square: true,
	},
};

export const SquareSizeL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.INVERTEDBACKGROUND,
		size: ButtonSizes.L,
		square: true,
	},
};
SquareSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeXL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.INVERTEDBACKGROUND,
		size: ButtonSizes.XL,
		square: true,
	},
};

export const Size_M: Story = {
	args: {
		children: 'Size M',
		theme: ButtonTheme.INVERTEDBACKGROUND,
	},
};

export const Size_L: Story = {
	args: {
		children: 'Size L',
		theme: ButtonTheme.INVERTEDBACKGROUND,
		size: ButtonSizes.L,
	},
};

export const Size_XL: Story = {
	args: {
		children: 'Size XL',
		theme: ButtonTheme.INVERTEDBACKGROUND,
		size: ButtonSizes.XL,
	},
};

export const Inverted_Clear: Story = {
	args: {
		children: 'Inverted Clear',
		theme: ButtonTheme.INVERTEDCLEAR,
	},
};
