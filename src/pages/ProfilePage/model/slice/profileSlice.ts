import {createSlice} from '@reduxjs/toolkit';
import {type ProfileSchema} from 'pages/ProfilePage/model/types';
import {fetchProfileData} from 'entities/Profile';

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
	extraReducers(builder) {
		builder.addCase(fetchProfileData.fulfilled, (state, {payload}) => {
			state.isLoading = false;
			state.data = payload;
		});
		builder.addCase(fetchProfileData.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchProfileData.rejected, (state, {payload}) => {
			state.isLoading = false;
			state.error = payload;
		});
	},
});

export const {actions: profileActions, reducer: profileReducers} = ProfileSlice();
