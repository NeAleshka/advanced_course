import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticlesStateSchema } from 'pages/ArticlePage/model/types';
import { fetchArticles } from 'pages/ArticlePage/model/services';
import { Article } from 'entities/Article/types/article';
import { StoreSchema } from 'app/providers/StoreProvider';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
    (state) => state.articles || articlesAdapter.getInitialState(),
);

const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState: articlesAdapter.getInitialState<ArticlesStateSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,
    }),
    reducers: {},
    extraReducers: ((builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, payload);
            if (state.error) {
                state.error = undefined;
            }
        });
        builder.addCase(fetchArticles.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload || 'Something went wrong';
        });
    }),
});

export const { reducer: articlesReducers, actions: articlesActions } = articlesSlice;
