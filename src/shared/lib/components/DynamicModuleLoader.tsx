import { type ReactNode, useEffect } from 'react';
import { type Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { type AppReduxStore, type StoreReducerKey } from 'app/providers/StoreProvider/config/StoreSchema';

export type ReducersList = {
	[name in StoreReducerKey]?: Reducer
};

// type EntriesReducersList = [name: StoreReducerKey, reducer: Reducer];
interface DynamicModuleLoaderProps {
	asyncReducers: ReducersList;
	children: ReactNode;
	removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, asyncReducers, removeAfterUnmount = true } = props;
    const store = useStore() as AppReduxStore;
    const dispatch = useDispatch();
    const mountedReducers = Object.keys(store.reducerManager.getReducerMap());
    useEffect(() => {
        Object.entries(asyncReducers).forEach(([name, reducer]) => {
            if (!mountedReducers.includes(name)) {
                store.reducerManager.add(name as StoreReducerKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(asyncReducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StoreReducerKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
	}, []);
    return (
        <>
            {children}
        </>
    );
};
