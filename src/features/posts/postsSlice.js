import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsBySubreddit } from "../../utils/redditAPI";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const getPostsBySubreddits = createAsyncThunk(
  "posts/getPostsBySubreddits",
  async (subreddit) => {
    const response = await fetchPostsBySubreddit(subreddit);
    return response.data.children;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    searchPosts: (state, action) => {
      state.posts = state.posts.filter((post) =>
        post.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsBySubreddits.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPostsBySubreddits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getPostsBySubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { searchPosts } = postsSlice.actions;
export default postsSlice.reducer;
