import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  errors: errorsReducer,
  users: usersReducer
})