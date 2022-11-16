import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./components/redux/UserSlice.js" 

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer