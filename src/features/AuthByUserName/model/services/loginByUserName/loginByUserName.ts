import {createAsyncThunk} from '@reduxjs/toolkit';
import {type User, userActions} from 'entities/User';
import axios, {type AxiosError} from 'axios';

interface LoginRequest {
	username: string;
	password: string;
}
type ServerError = {message: string};
export const loginByUsername = createAsyncThunk<User, LoginRequest, {rejectValue: string} >(
	'loginByUsername',
	async (authData, {rejectWithValue, dispatch}) => {
		try {
			const res = await axios.post<User>('http://localhost:8000/login', authData);
			if (!res.data) {
				throw new Error();
			}

			dispatch(userActions.setUserData(res.data));
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
