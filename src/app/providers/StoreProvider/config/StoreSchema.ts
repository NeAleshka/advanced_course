import {type UserSchema} from 'entities/User';
import {type LoginSchema} from 'features/AuthByUserName';
import {type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject} from '@reduxjs/toolkit';

export interface StoreSchema {
	user: UserSchema;
	loginForm?: LoginSchema;
}

export type StoreReducerKey = keyof StoreSchema;

export interface reducerManager {
	getReducerMap: () => ReducersMapObject<StoreSchema>;
	reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
	add: (key: StoreReducerKey, reducer: Reducer) => void;
	remove: (key: StoreReducerKey) => void;
}

export interface AppReduxStore extends EnhancedStore<StoreSchema> {
	reducerManager: reducerManager;
}
