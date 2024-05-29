import { StoreSchema } from 'app/providers/StoreProvider';

export const getAllArticles = (state:StoreSchema) => state.articles?.entities;
export const getArticlesError = (state:StoreSchema) => state.articles?.error;
export const getArticlesLoading = (state:StoreSchema) => state.articles?.isLoading;
