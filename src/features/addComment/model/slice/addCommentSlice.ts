import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentSchema } from 'features/addComment';

const initialState:AddCommentSchema = {
    comment: '',
};

const addCommentSlice = createSlice({
    name: 'addCommentSlice',
    initialState,
    reducers: {
        setComment: (state, action:PayloadAction<string>) => {
            state.comment = action.payload;
        },
    },
});

export const { reducer: addCommentReducers } = addCommentSlice;
export const { actions: addCommentActions } = addCommentSlice;
