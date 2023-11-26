import { SET_QUESTION_ANSWER_BY_ID } from "../../constants/ActionTypes";

const initialState = {
  questionAnswerById: {},
};

const QuestionAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_ANSWER_BY_ID:
      return {
        ...state,
        questionAnswerById: action.payload,
      };
    default:
      return state;
  }
};

export default QuestionAnswerReducer;
