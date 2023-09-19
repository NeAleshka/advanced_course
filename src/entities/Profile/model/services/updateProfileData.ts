import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Profile } from 'pages/ProfilePage/model/types';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<Profile, Profile, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (data, { rejectWithValue, extra }) => {
        try {
            const res = await extra.api.put<Profile>('/profile', data);
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
