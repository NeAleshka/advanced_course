import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';
import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type ProfileSchema } from 'pages/ProfilePage/model/types';
import { type AxiosInstance } from 'axios';
import { type To } from '@remix-run/router';
import { type NavigateOptions } from 'react-router/dist/lib/context';
import { type AppDispatchType } from 'app/providers/StoreProvider';
import { ArticleDetailsSchema } from 'entities/Article/types/article';
import { ArticlesStateSchema } from 'pages/ArticlePage/model/types';

export interface StoreSchema {
	user: UserSchema;
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?:ArticleDetailsSchema;
	articles?:ArticlesStateSchema
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

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	dispatch: AppDispatchType;
}
