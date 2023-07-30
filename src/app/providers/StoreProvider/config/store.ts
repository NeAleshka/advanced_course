import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit';
import {type StoreSchema} from './StoreSchema';
import {userReducer} from 'entities/User';
import {loginReducer} from 'features/AuthByUserName';

export const createReduxStore = (initialState?: StoreSchema) => {
	const rootReducers: ReducersMapObject<StoreSchema> = {
		user: userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StoreSchema>({
		devTools: __IS__DEV__,
		reducer: rootReducers,
		preloadedState: initialState,
	});
};

