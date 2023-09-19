import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
    isLoading: false,
    password: '',
    username: '',
};
export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUsername(state, { payload }: PayloadAction<string>) {
            state.username = payload;
        },
        setPassword(state, { payload }: PayloadAction<string>) {
            state.password = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false;
            state.password = '';
            state.username = '';
        });
        builder.addCase(loginByUsername.rejected, (state, { payload }) => {
            if (payload) {
                state.error = payload;
                state.isLoading = false;
            } else {
                state.error = 'Some Error';
                state.isLoading = false;
            }
        });
        builder.addCase(loginByUsername.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
