import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/redux/UserSlice.js" 

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store;