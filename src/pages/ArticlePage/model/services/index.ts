import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/types/article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleLoading } from 'entities/Article/model/selectors';
import { getArticlesHasMore, getArticlesLimit, getArticlesPage } from '../selectors';
import { articlesActions } from '../slice';

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

export const fetchNextPageArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'article/fetchNextPageArticles',
    async (_, { getState, dispatch }) => {
        const hasMore = getArticlesHasMore(getState());
        const page = getArticlesPage(getState());
        const isLoading = getArticleLoading(getState());
        if (hasMore && !isLoading) {
            dispatch(articlesActions.setPage(page + 1));
            dispatch(fetchArticles({ page: page + 1 }));
        }
    },
);
