import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducers } from 'pages/ProfilePage';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider';
import { StoryFn } from '@storybook/react';

const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
    profile: profileReducers,
};

export const StoreDecorator = (
    state:DeepPartial<StoreSchema>,
    asyncReducers?: ReducersList,
) => (Story:StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
