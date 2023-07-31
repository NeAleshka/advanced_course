import {type ReactNode, useEffect} from 'react';
import {type Reducer} from '@reduxjs/toolkit';
import {useDispatch, useStore} from 'react-redux';
import {type AppReduxStore, type StoreReducerKey} from 'app/providers/StoreProvider/config/StoreSchema';

export type ReducersList = {
	[name in StoreReducerKey]?: Reducer
};

type EntriesReducersList = [name: StoreReducerKey, reducer: Reducer];
interface DynamicModuleLoaderProps {
	asyncReducers: ReducersList;
	children: ReactNode;
}
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const {children, asyncReducers} = props;
	const store = useStore() as AppReduxStore;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(asyncReducers).forEach(([name, reducer]: EntriesReducersList) => {
			store.reducerManager.add(name, reducer);
			dispatch({type: `@INIT ${name} reducer`});
		});

		return () => {
			Object.entries(asyncReducers).forEach(([name]: EntriesReducersList) => {
				store.reducerManager.remove('loginForm');
				dispatch({type: `@DESTROY ${name} reducer`});
			});
		};
	}, []);
	return (
		<>
			{children}
		</>
	);
};
