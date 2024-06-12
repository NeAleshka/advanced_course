import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/types/article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesLimit } from '../selectors';

interface IParams {
    page:number;
}

export const fetchArticles = createAsyncThunk<Article[], IParams, ThunkConfig<string>>(
    'article/fetchArticles',
    async ({ page }, { extra, rejectWithValue, getState }) => {
        const limit = getArticlesLimit(getState());

        try {
            const res = await extra.api.get<Article[]>('/articles', {
                params: {
                    _page: page,
                    _limit: limit,
                },
            });
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
