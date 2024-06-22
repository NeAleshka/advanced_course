import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticlesStateSchema, ArticlesView } from 'pages/ArticlePage/model/types';
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
        hasMore: true,
        page: 1,
        view: localStorage.getItem('view') as ArticlesView || ArticlesView.SMALL,
        limit: localStorage.getItem('view') as ArticlesView === ArticlesView.SMALL ? 9 : 4,
    }),
    reducers: {

        setView: (state, { payload }) => {
            state.view = payload;
            state.limit = payload === ArticlesView.SMALL ? 9 : 4;
            localStorage.setItem('view', payload);
        },
        setPage: (state, { payload }) => {
            state.page = payload;
        },
        unitArticleState: (state) => {
            const view = localStorage.getItem('view') as ArticlesView;
            state.view = view;
            state.limit = view === ArticlesView.SMALL ? 9 : 4;
        },
    },
    extraReducers: ((builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            articlesAdapter.addMany(state, payload);
            if (state.error) {
                state.error = undefined;
            }
            state.hasMore = payload.length > 0;
        });
        builder.addCase(fetchArticles.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload || 'Something went wrong';
        });
    }),
});

export const { reducer: articlesReducers, actions: articlesActions } = articlesSlice;
