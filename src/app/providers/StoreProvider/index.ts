import {createReduxStore, type AppDispatchType} from './config/store';
import {StoreProvider} from './ui/StoreProvider';

export {StoreProvider, createReduxStore, type AppDispatchType};
export type {StoreSchema, StoreReducerKey, AppReduxStore, reducerManager, ThunkConfig} from './config/StoreSchema';
