import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decarators/ThemeDecorator';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Suspense fallback="">
                <BrowserRouter>
                    <StoreProvider>
                        <Story />
                    </StoreProvider>
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
