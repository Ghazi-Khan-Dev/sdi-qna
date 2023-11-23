import React from "react";
import "./question-answer-container.css";
import Categories from "./Categories";

const NoQuestionAnswerAvailable = () => {
  return (
    <div className="no-data-to-show">
      <span>Pls modify the seach keywords</span>
    </div>
  );
};

const QuestionAnswerContainer = (props) => {
  const { questionAnswerList } = props;
  return (
    <>
      <div className="question-answer-container">
        {questionAnswerList.length === 0 ? (
          <NoQuestionAnswerAvailable />
        ) : (
          <Categories questionAnswerList={questionAnswerList}/>
        )}
      </div>
    </>
  );
};

export default QuestionAnswerContainer;
