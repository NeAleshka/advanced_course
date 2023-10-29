import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/types/article';

export const fetchArticlesById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (id:string, { extra, rejectWithValue }) => {
        try {
            const res = await extra.api.get<Article>(`/articles/${id}`);
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
