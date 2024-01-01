import { StoreSchema } from 'app/providers/StoreProvider';

export const getUserCommentsLoading = (state:StoreSchema) => state.userComments?.isLoading;
export const getUserCommentsError = (state:StoreSchema) => state.userComments?.error;
