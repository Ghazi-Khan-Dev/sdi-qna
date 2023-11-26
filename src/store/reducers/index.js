import { combineReducers } from "redux";
import { createRouterMiddleware } from "@lagunovsky/redux-react-router";
import QuestionAnswerReducer from "./QuestionAnswerReducer";

const rootReducer = (history) =>
  combineReducers({
    router: createRouterMiddleware(history),
    questionanswer: QuestionAnswerReducer,
  });

export default rootReducer;
