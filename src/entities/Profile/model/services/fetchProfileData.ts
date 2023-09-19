import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Profile } from 'pages/ProfilePage/model/types';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { extra, rejectWithValue }) => {
        try {
            const res = await extra.api.get<Profile>('/profile');
            return res.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },

);
