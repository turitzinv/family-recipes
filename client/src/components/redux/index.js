import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import requestingReducer from "./requestingReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  errors: errorsReducer,
  users: usersReducer,
  requesting: requestingReducer
})