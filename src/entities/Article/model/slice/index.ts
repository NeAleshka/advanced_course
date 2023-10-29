import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from 'entities/Article/types/article';

const initialState:ArticleDetailsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
};
const ArticleDetailsSlice = createSlice({
    name: 'articleDetailsSlice',
    initialState,
    reducers: {},
});

export const { actions: articleActions, reducer: articleReducers } = ArticleDetailsSlice;
