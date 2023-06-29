import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {NavBar} from './NavBar';
import {ThemeDecorator} from 'shared/config/storybook/decarators/ThemeDecorator';
import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';

const meta: Meta<typeof NavBar> = {
	title: 'widgets/NavBar',
	component: NavBar,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<Suspense fallback={''}>
				<BrowserRouter>
					<Story />
				</BrowserRouter>
			</Suspense>
		),
	],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

