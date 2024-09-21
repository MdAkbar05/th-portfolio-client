// store all slice by react redux

import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/projectSlice";
import userSlice from "./features/userSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    projectReducer: projectSlice,
    userReducer: userSlice,
    authReducer: authSlice,
  },
});
