import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to register a new user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        userData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyUser = createAsyncThunk(
  "user/verifyUser",
  async ({ otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/verify-user",
        { otp },
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "OTP verification failed"
      );
    }
  }
);

// Thunk to fetch all users
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Register user
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default userSlice.reducer;
