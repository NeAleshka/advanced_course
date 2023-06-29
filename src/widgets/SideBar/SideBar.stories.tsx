import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {SideBar} from './SideBar';
import {ThemeDecorator} from 'shared/config/storybook/decarators/ThemeDecorator';
import {Suspense} from 'react';

const meta: Meta<typeof SideBar> = {
	title: 'widgets/SideBar',
	component: SideBar,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<Suspense fallback={''}>
				<Story />
			</Suspense>
		),
	],
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

