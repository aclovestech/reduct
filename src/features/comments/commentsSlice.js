import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCommentsByPostId } from "../../utils/redditAPI";

const initialState = {
  comments: [],
  isLoading: false,
  error: false,
};

export const getCommentsByPostId = createAsyncThunk(
  "comments/getCommentsByPostId",
  async (subreddit, postId) => {
    const response = await fetchCommentsByPostId(subreddit, postId);
    return response[1].data.children;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
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
      });
  },
});

export default commentsSlice.reducer;
