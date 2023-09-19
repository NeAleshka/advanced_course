import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decarators/ThemeDecorator';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'widgets/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis cumque ex ipsa, magnam mollitia nisi nostrum perferendis temporibus voluptatem.',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis cumque ex ipsa, magnam mollitia nisi nostrum perferendis temporibus voluptatem.',
        isOpen: true,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
