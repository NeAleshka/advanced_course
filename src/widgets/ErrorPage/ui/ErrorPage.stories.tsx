import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {ErrorPage} from './ErrorPage';
import {ThemeDecorator} from 'shared/config/storybook/decarators/ThemeDecorator';

const meta: Meta<typeof ErrorPage> = {
	title: 'widgets/ErrorPage',
	component: ErrorPage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

