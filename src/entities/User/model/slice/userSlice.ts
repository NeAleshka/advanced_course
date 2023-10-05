import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LS_USER_AUTH } from 'shared/consts';
import { type User, type UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserData(state, { payload }: PayloadAction<User>) {
            state.authData = payload;
            localStorage.setItem(LS_USER_AUTH, JSON.stringify(state.authData));
        },
        initialUser(state) {
            const userData = JSON.parse(String(localStorage.getItem(LS_USER_AUTH)));
            if (userData) {
                state.authData = userData;
            }
            state._inited = true;
        },
        logOut(state) {
            state.authData = undefined;
            localStorage.removeItem(LS_USER_AUTH);
        },
    },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
