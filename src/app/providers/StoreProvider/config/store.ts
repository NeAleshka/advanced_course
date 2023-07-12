import {configureStore} from '@reduxjs/toolkit';
import {type StoreSchema} from './StoreSchema';
import {counterReducer} from 'entities/Counter';

export const createReduxStore = (initialState?: StoreSchema) => configureStore<StoreSchema>({
	devTools: __IS__DEV__,
	reducer: {
		counter: counterReducer,
	},
	preloadedState: initialState,
});

