import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshUser, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuthError: false,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    [register.pending](state, _action) {
      state.isLoading = true;
    },
    [register.rejected](state, action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    [login.pending](state, _action) {
      state.isLoading = true;
    },
    [login.rejected](state, action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthError = false;
      state.isRefreshing = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
