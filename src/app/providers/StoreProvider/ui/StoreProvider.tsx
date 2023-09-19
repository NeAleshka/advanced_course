import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import React, { type ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StoreSchema> ;
	asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;
    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StoreSchema,
        asyncReducers as ReducersMapObject<StoreSchema>,
        navigate,
    );
    return (
        <Provider store={store}>
            <>{children}</>
        </Provider>
    );
};
