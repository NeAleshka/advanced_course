import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Profile } from 'pages/ProfilePage/model/types';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<Profile, string|undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (userId:string|undefined, { extra, rejectWithValue }) => {
        try {
            if (!userId) {
                return rejectWithValue('error');
            }
            const res = await extra.api.get<Profile>(`/profile/${userId}`);
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },

);
