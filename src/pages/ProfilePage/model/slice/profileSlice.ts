import {createSlice} from '@reduxjs/toolkit';
import {type ProfileSchema} from 'pages/ProfilePage/model/types';

const initialState: ProfileSchema = {
	data: undefined,
	error: undefined,
	isLoading: false,
	readonly: true,
};
const ProfileSlice = () => createSlice({
	name: 'profile',
	initialState,
	reducers: {},
});

export const {actions: profileActions, reducer: profileReducers} = ProfileSlice();
