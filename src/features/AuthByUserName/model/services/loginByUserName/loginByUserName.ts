import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/User';
import axios, { type AxiosError } from 'axios';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { LS_USER_AUTH } from 'shared/consts';

interface LoginRequest {username: string;password: string;
}
type ServerError = {message: string};
export const loginByUsername = createAsyncThunk<User, LoginRequest, ThunkConfig<string> >(
    'loginByUsername',
    async (authData, { rejectWithValue, dispatch, extra }) => {
        try {
            const res = await extra.api.post<User>('/login', authData);
            if (!res.data) {
                return rejectWithValue('Failed to load data');
            }
            localStorage.setItem(LS_USER_AUTH, JSON.stringify(res.data));
            dispatch(userActions.setUserData(res.data));
            if (extra.navigate) {
                extra.navigate(`/profile/${res.data.id}`);
            }
            return res.data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                const serverError = e as AxiosError<ServerError>;
                if (serverError?.response) {
                    return rejectWithValue(serverError?.response.data.message);
                }
            }

            return rejectWithValue('unexpected error');
        }
    },
);
