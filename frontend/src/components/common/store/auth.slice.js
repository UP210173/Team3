import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'authorized', // 'unauthorized'
      user: null
    },
    reducers: {

      login: ( state, { payload } ) => {
        state.status = 'authorized';
        state.user = payload;
      },

      logout: ( state, { payload } ) => {
        state.status = 'unauthorized';
        state.user = null;
      }

    }
})

export const { login, logout } = authSlice.actions;
