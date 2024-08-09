import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.userData = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.userData = null;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
