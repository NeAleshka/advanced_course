import {type StoreSchema} from 'app/providers/StoreProvider';

export const getProfileData = (state: StoreSchema) => state.profile?.data;
export const getLoading = (state: StoreSchema) => state.profile?.isLoading;
