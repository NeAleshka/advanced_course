import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit';
import {type StoreSchema} from './StoreSchema';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';

export const createReduxStore = (initialState?: StoreSchema) => {
	const rootReducers: ReducersMapObject<StoreSchema> = {
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<StoreSchema>({
		devTools: __IS__DEV__,
		reducer: reducerManager.reduce,
		preloadedState: initialState,
	});

	// @ts-expect-error потом доделаю
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
