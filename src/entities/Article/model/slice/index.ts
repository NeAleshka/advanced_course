import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from 'entities/Article/types/article';
import { fetchArticlesById } from 'entities/Article/model/services';

const initialState:ArticleDetailsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
};
const ArticleDetailsSlice = createSlice({
    name: 'articleDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchArticlesById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchArticlesById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articleActions, reducer: articleReducers } = ArticleDetailsSlice;
