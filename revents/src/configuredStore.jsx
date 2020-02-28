import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const configuredStore = () => {
  const middlewares = [thunk];
  const composedEnhnacer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, composedEnhnacer);
  return store;
};
