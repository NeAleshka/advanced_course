import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type LoginSchema} from '../types/loginSchema';
import {loginByUsername} from 'features/AuthByUserName';

const initialState: LoginSchema = {
	isLoading: false,
	password: '',
	username: '',
};
export const loginSlice = createSlice({
	name: 'loginSlice',
	initialState,
	reducers: {
		setUsername(state, {payload}: PayloadAction<string>) {
			state.username = payload;
		},
		setPassword(state, {payload}: PayloadAction<string>) {
			state.password = payload;
		},
		clearLoginData(state) {
			state.username = '';
			state.password = '';
			state.error = '';
		},
	},
	extraReducers(builder) {
		builder.addCase(loginByUsername.fulfilled, (state, {payload}) => {
			state.username = payload.username;
			state.isLoading = false;
		});
		builder.addCase(loginByUsername.rejected, (state, {payload}) => {
			if (payload) {
				state.error = payload;
				state.isLoading = false;
			} else {
				state.error = 'Some Error';
				state.isLoading = false;
			}
		});
		builder.addCase(loginByUsername.pending, state => {
			state.isLoading = true;
			state.error = '';
		});
	},
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;
