import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/Auth.types";

const initialState: AuthState = {
  username: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.username = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
