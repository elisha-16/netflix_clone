import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    email: null
  },
  reducers: {
   login: (state,action) => {
     state.user = action.payload;
     console.log('reducer',state.user)
   },
  logout: (state) => {
    state.user=null;
  },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
