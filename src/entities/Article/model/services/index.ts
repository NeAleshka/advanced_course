import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/types/article';
import { getAddCommentFormText } from 'features/addComment/model/selectors';
import { getUserAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article/model/selectors';
import { fetchUserCommentsById } from 'entities/Comment/model/services';

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

export const addArticleComment = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/addArticleComment',
    async (text:string, {
        extra, rejectWithValue, getState, dispatch,
    }) => {
        try {
            const userData = getUserAuthData(getState());
            const article = getArticleData(getState());
            if (!article?.id) {
                return rejectWithValue('error');
            }

            const res = await extra.api.post('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });
            dispatch(fetchUserCommentsById(article.id));
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
