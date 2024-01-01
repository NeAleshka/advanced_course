import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider';
import { fetchUserCommentsById } from '../services';
import { UserComment, UserCommentSchema } from '../types';

const userCommentAdapter = createEntityAdapter<UserComment>({
    selectId: (comment) => comment.id,
});

export const getUserComments = userCommentAdapter.getSelectors<StoreSchema>(
    (state) => state.userComments || userCommentAdapter.getInitialState(),
);

const userCommentSlice = createSlice({
    name: 'userCommentSlice',
    initialState: userCommentAdapter.getInitialState<UserCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserCommentsById.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            userCommentAdapter.setAll(state, payload);
            if (state.error) {
                state.error = undefined;
            }
        });
        builder.addCase(fetchUserCommentsById.pending, (state) => {
            state.isLoading = true;
            if (state.error) {
                state.error = undefined;
            }
        });
        builder.addCase(fetchUserCommentsById.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });
    },
});

export const { reducer: userCommentReducers } = userCommentSlice;
export const { actions: userCommentActions } = userCommentSlice;
