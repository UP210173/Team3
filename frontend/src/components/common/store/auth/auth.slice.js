import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'unauthorized',
      user: {}
    },
    reducers: {
    
      login: ( state, { payload } ) => {
        state.status = 'authorized';
        state.user = payload;
      },

      logout: ( state, _ ) => {
        state.status = 'unauthorized';
        state.user = {}
      }

    }
})

export const {
  login,
  logout
} = authSlice.actions;
