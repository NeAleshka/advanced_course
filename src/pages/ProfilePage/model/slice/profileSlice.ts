import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type Profile, type ProfileSchema} from 'pages/ProfilePage/model/types';
import {fetchProfileData} from 'entities/Profile';
import {updateProfileData} from 'entities/Profile/model/services/updateProfileData';

const initialState: ProfileSchema = {
	data: undefined,
	error: undefined,
	isLoading: false,
	readonly: true,
};
const ProfileSlice = () => createSlice({
	name: 'profile',
	initialState,
	reducers: {
		updateDate(state, {payload}: PayloadAction<Profile>) {
			state.data = payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchProfileData.fulfilled, (state, {payload}) => {
			state.isLoading = false;
			state.data = payload;
		});
		builder.addCase(fetchProfileData.pending, state => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(fetchProfileData.rejected, (state, {payload}) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(updateProfileData.fulfilled, (state, {payload}) => {
			state.error = undefined;
			state.isLoading = false;
			state.data = payload;
		});
		builder.addCase(updateProfileData.pending, state => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(updateProfileData.rejected, (state, {payload}) => {
			state.isLoading = false;
			state.error = payload;
		});
	},
});

export const {actions: profileActions, reducer: profileReducers} = ProfileSlice();
