import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventTypes";
import { toastr } from "react-redux-toastr";

export const createEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: { event }
      });
      toastr.success("Success!", "Event has been created");
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
    }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: { event }
      });
      toastr.success("Success!", "Event has been updated");
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
    }
  };
};

export const deleteEvent = eventId => ({
  type: DELETE_EVENT,
  payload: { eventId }
});
