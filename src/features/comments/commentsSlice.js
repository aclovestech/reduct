import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCommentsByPostId } from "../../utils/redditAPI";

const initialState = {
  comments: {},
  isLoading: false,
  error: null,
  visibleComments: [],
};

export const getCommentsByPostId = createAsyncThunk(
  "comments/getCommentsByPostId",
  async (postData) => {
    const { subreddit, id } = postData;
    const response = await fetchCommentsByPostId(subreddit, id);
    return {
      id: id,
      data: response[1].data.children,
    };
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    enableComments: (state, action) => {
      state.visibleComments.push(action.payload);
    },
    disableComments: (state, action) => {
      state.visibleComments = state.visibleComments.filter(
        (id) => id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByPostId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCommentsByPostId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getCommentsByPostId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { id, data } = action.payload;
        state.comments = {
          ...state.comments,
          [id]: data,
        };
      });
  },
});

export const selectComments = (state) => state.comments.comments;
export const selectIsLoading = (state) => state.comments.isLoading;
export const selectError = (state) => state.comments.error;
export const selectVisibleComments = (state) => state.comments.visibleComments;

export const { enableComments, disableComments } = commentsSlice.actions;
export default commentsSlice.reducer;
