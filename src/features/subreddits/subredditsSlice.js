import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTopSubreddits } from "../../utils/redditAPI";

const initialState = {
  subreddits: [],
  isLoading: false,
  error: null,
};

export const getTopSubreddits = createAsyncThunk(
  "subreddits/getTopSubreddits",
  async () => {
    const response = await fetchTopSubreddits();
    return response.data.children;
  }
);

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopSubreddits.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTopSubreddits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getTopSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.subreddits = action.payload;
      });
  },
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectIsLoading = (state) => state.subreddits.isLoading;
export const selectError = (state) => state.subreddits.error;

export default subredditsSlice.reducer;
