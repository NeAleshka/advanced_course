import { StoreSchema } from 'app/providers/StoreProvider';
import { ArticlesView } from '../types';

export const getAllArticles = (state:StoreSchema) => state.articles?.entities;
export const getArticlesError = (state:StoreSchema) => state.articles?.error;
export const getArticlesLoading = (state:StoreSchema) => state.articles?.isLoading;
export const getArticlesView = (state:StoreSchema) => state.articles?.view || ArticlesView.SMALL;
export const getArticlesPage = (state:StoreSchema) => state.articles?.page || 1;
export const getArticlesHasMore = (state:StoreSchema) => state.articles?.hasMore;
export const getArticlesLimit = (state:StoreSchema) => state.articles?.limit || 4;
