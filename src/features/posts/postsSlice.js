import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsBySubreddit } from "../../utils/redditAPI";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  selectedSubreddit: null,
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
    changeSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
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
        const posts = action.payload;
        state.isLoading = false;
        state.error = null;
        state.posts = posts.filter(
          (post) => post.data["post_hint"] === "image"
        );
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectError = (state) => state.posts.error;
export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;

export const { searchPosts, changeSelectedSubreddit } = postsSlice.actions;
export default postsSlice.reducer;
