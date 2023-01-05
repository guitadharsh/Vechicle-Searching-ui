import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: "auth",
   initialState: {
      loggedIn: false,
   },

   reducers: {
      setLoggedIn: (state) => {
         state.loggedIn = true;
      },
      
      logout: (state) => {
         state.loggedIn = false;
       }
   }

})

export const { setLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;