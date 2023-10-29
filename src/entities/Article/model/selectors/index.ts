import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticleData = (state:StoreSchema) => state.articleDetails?.data;
export const getArticleError = (state:StoreSchema) => state.articleDetails?.error;
export const getArticleLoading = (state:StoreSchema) => state.articleDetails?.isLoading;
