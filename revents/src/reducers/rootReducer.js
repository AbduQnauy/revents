import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "../components/event/eventReducer";
const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer
});
export default rootReducer;
