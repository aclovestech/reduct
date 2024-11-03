import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  error: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default commentsSlice.reducer;
