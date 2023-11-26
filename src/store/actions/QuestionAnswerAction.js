import { SET_QUESTION_ANSWER_BY_ID } from '../../constants/ActionTypes';

export const setQAById = (questionAnswerById) => {
    return (dispatch) => {
        const payload = questionAnswerById;
        dispatch({type : SET_QUESTION_ANSWER_BY_ID, payload});
    }
}