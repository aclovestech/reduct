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

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopSubreddits.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getTopSubreddits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getTopSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
      });
  },
});

export default subredditsSlice.reducer;
