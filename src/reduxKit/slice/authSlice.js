import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedin: false,
  email: null,
  userName: null,
  userId: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      console.log(action.payload)
    }
  }
});

export const { SET_ACTIVE_USER } = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedin
export const selectemail = (state) => state.auth.email
export const selectuserName = (state) => state.auth.userName
export const selectuserId = (state) => state.auth.userId

export default authSlice.reducer
