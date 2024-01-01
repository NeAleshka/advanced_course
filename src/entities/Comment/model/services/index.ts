import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserComment } from '../types';

export const fetchUserCommentsById = createAsyncThunk<UserComment[], string, ThunkConfig<string>>(
    'userComments/fetchUserCommentsById',
    async (articleId:string, { extra, rejectWithValue }) => {
        try {
            if (!articleId) {
                return rejectWithValue('error');
            }
            const res = await extra.api.get<UserComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
