import {type AnyAction, combineReducers, type Reducer, type ReducersMapObject} from '@reduxjs/toolkit';
import {type StoreSchema, type StoreReducerKey} from './StoreSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StoreSchema>) {
	const reducers = {...initialReducers};
	let combinedReducer = combineReducers(reducers);
	let keysToRemove: StoreReducerKey[] = [];

	return {
		getReducerMap: () => reducers,

		reduce(state: StoreSchema, action: AnyAction) {
			if (keysToRemove.length > 0) {
				state = {...state};
				for (const key of keysToRemove) {
					delete state[key];
				}

				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},

		add(key: StoreReducerKey, reducer: Reducer) {
			if (!key || reducers[key]) {
				return;
			}

			reducers[key] = reducer;
			combinedReducer = combineReducers(reducers);
		},
		remove(key: StoreReducerKey) {
			if (!key || !reducers[key]) {
				return;
			}

			delete reducers[key];
			keysToRemove.push(key);
			combinedReducer = combineReducers(reducers);
		},
	};
}

