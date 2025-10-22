import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserByUsername = createAsyncThunk(
  "user/fetchByUsername",
  async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) throw new Error("User not found");

    const data = await response.json();
    return data;
  }
);

const initialState = {
  user: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUsername.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserByUsername.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
