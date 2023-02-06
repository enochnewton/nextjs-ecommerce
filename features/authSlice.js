import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  userName: "",
  userID: "",
  email: "",
};
const authSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    userLoggedOut(state) {
      return { ...state, isUserLoggedIn: false };
    },
    userLoggedIn(state) {
      return { ...state, isUserLoggedIn: true };
    },
    setCurrentUserName(state, { payload }) {
      return { ...state, userName: payload };
    },
    setCurrentEmail(state, { payload }) {
      return { ...state, email: payload };
    },
  },
});
export default authSlice.reducer;
export const {
  userLoggedIn,
  userLoggedOut,
  setCurrentUserName,
  setCurrentEmail,
} = authSlice.actions;
