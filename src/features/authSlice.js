import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to handle user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userData,
        {
          withCredentials: true,
        }
      );
      const { refreshToken, user } = response.data;

      // Save user and token to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", refreshToken);

      return { user, token: refreshToken };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to handle logout
const url = "http://localhost:5000/api/auth/logout";
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await axios.post(
    url,
    {
      headers: "application/x-www-form-urlencoded",
    },
    {
      withCredentials: true,
    }
  );
});

// Thunk to refresh the access token
export const refreshToken = createAsyncThunk("auth/refreshToken", async () => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/refreshToken"
  );
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.error = action.payload.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        localStorage.removeItem("user");
        state.user = localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
