import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import eventReducer from "../components/event/eventReducer";
import modalReducer from "../components/modals/modalReducer";
import authReducer from "../components/auth/authReducer";
import asyncReducer from "../components/async/asyncReducer";
const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer
});
export default rootReducer;
