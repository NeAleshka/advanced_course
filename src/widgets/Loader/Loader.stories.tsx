import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {Loader} from './Loader';
import {ThemeDecorator} from 'shared/config/storybook/decarators/ThemeDecorator';

const meta: Meta<typeof Loader> = {
	title: 'widgets/Loader',
	component: Loader,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

