import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      isLoading: false,
      message: {
        isOpen: false,
        content: '',
        type: '', // error - success
      }
    },
    reducers: {
      
      setIsLoading: ( state, { payload } ) => {
        state.isLoading = payload;
      },

      setMessage: ( state, { payload }) => {
        state.message = payload;
      }

    }
})

export const {  
  setIsLoading,
  setMessage,
} = uiSlice.actions;
