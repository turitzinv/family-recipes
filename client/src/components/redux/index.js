import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import requestingReducer from "./requestingReducer";
import usersReducer from "./usersReducer";
import recipesReducer from "./recipesReducer";

export default combineReducers({
  errors: errorsReducer,
  users: usersReducer,
  requesting: requestingReducer,
  recipes: recipesReducer
})