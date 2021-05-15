import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import counterReducer from '../features/counter/userSlice';
import userReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
  //  counter: counterReducer,
    user: userReducer,
  },
});
