import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTopSubreddits } from "../../utils/redditAPI";

const initialState = {
  subreddits: JSON.parse(localStorage.getItem("subreddits")) || [],
  isLoading: false,
  error: null,
  lastFetched:
    JSON.parse(localStorage.getItem("subredditsDataLastFetched")) || null,
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
        const currentTime = Date.now();
        state.isLoading = false;
        state.error = null;
        state.subreddits = action.payload;
        state.lastFetched = currentTime;
        localStorage.setItem("subreddits", JSON.stringify(action.payload));
        localStorage.setItem("subredditsDataLastFetched", currentTime);
      });
  },
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectIsLoading = (state) => state.subreddits.isLoading;
export const selectError = (state) => state.subreddits.error;
export const selectLastFetched = (state) => state.subreddits.lastFetched;

export default subredditsSlice.reducer;
