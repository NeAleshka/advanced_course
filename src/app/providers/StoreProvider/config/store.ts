import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit';
import {type StoreSchema} from './StoreSchema';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';
import {$api} from 'shared/api/api';
import {type To} from '@remix-run/router';
import {type NavigateOptions} from 'react-router/dist/lib/context';
import {type CombinedState, type Reducer} from 'redux';

export const createReduxStore = (initialState?: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>, navigate?: (to: To, options?: NavigateOptions) => void) => {
	const rootReducers: ReducersMapObject<StoreSchema> = {
		user: userReducer,
		...asyncReducers,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		devTools: __IS__DEV__,
		reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
					navigate,
				},
			},
		}),
	});

	// @ts-expect-error //ПОТОМ ИСПРАВЛЮ
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
