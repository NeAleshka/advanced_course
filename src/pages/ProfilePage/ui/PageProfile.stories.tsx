import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { Country, Currency } from 'pages/ProfilePage/model/consts';
import { ThemeDecorator } from 'shared/config/storybook/decarators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreDecorator } from 'shared/config/storybook/decarators/StoreDecorator';
import ProfilePage from './ProfilePage';

const state:DeepPartial<StoreSchema> = {
    profile: {
        data: {
            age: 22,
            avatar: '',
            city: 'Dzerjinsk',
            firstName: 'Alexey',
            login: '111',
            lastName: 'Budai',
            currency: Currency.EUR,
            country: Country.BELARUS,
        },
        readonly: true,
        isLoading: false,
    },
};

const stateWithError:DeepPartial<StoreSchema> = {
    profile: {
        data: undefined,
        error: 'error',
        isLoading: false,
        readonly: true,
    },
};

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/Profile_Page',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator(state)],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const PrimaryTheme:Story = {};

export const DarkTheme:Story = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const withError:Story = {};
withError.decorators = [StoreDecorator(stateWithError)];
