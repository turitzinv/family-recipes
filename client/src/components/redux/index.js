import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import sessionsReducer from "./sessionsReducer";

export default combineReducers({
  errors: errorsReducer,
  sessions: sessionsReducer
})