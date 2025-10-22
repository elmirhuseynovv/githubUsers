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
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUsername.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserByUsername.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserByUsername.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
