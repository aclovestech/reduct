import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsBySubreddit } from "../../utils/redditAPI";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  selectedSubreddit: null,
  filteredPosts: [],
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
      const searchQuery = action.payload;
      if (searchQuery) {
        const filteredPost = state.posts.filter((post) =>
          post.data.title.toLowerCase().includes(searchQuery)
        );
        filteredPost
          ? (state.filteredPosts = filteredPost)
          : (state.filteredPosts = []);
      } else {
        state.filteredPosts = state.posts;
      }
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
        state.filteredPosts = state.posts;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectError = (state) => state.posts.error;
export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;
export const selectFilteredPosts = (state) => state.posts.filteredPosts;

export const { searchPosts, changeSelectedSubreddit } = postsSlice.actions;
export default postsSlice.reducer;
