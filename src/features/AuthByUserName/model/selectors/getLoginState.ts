import {type StoreSchema} from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginState = (state: StoreSchema) => state?.loginForm;
