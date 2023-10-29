import { createSlice } from '@reduxjs/toolkit';
import { ArticlesStateSchema } from 'pages/ArticlePage/model/types';
import { fetchArticles } from 'pages/ArticlePage/model/services';

const initialState:ArticlesStateSchema = {
    data: undefined,
    error: undefined,
    isLoading: true,
};

const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
        });
        builder.addCase(fetchArticles.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload || 'Something went wrong';
        });
    }),
});

export const { reducer: articlesReducers, actions: articlesActions } = articlesSlice;
