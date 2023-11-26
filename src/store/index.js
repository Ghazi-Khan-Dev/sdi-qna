import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createRouterMiddleware } from "@lagunovsky/redux-react-router";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";

export const history = createBrowserHistory();

const enhancers = [];
const middleware = [thunk, createRouterMiddleware(history)];
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const initialState = {};

export const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);
