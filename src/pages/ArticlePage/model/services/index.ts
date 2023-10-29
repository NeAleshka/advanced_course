import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/types/article';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'article/fetchArticles',
    async (_, { extra, rejectWithValue }) => {
        try {
            const res = await extra.api.get<Article[]>('/articles');
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
