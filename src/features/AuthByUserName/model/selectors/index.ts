import {type StoreSchema} from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginUserName = (state: StoreSchema) => state.loginForm?.username ?? '';
export const getLoginPassword = (state: StoreSchema) => state.loginForm?.password ?? '';
export const getLoginError = (state: StoreSchema) => state.loginForm?.error;
export const getLoginLoading = (state: StoreSchema) => state.loginForm?.isLoading ?? false;

export const getLoginState = (state: StoreSchema) => state?.loginForm;

