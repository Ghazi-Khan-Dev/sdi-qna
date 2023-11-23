import React from "react";
import Paper from '@mui/material/Paper';

import './question-answer-items.css';

const QuestionAnswer = (props) => {
  const {question, answer} = props.questionAnswerItem;
  return (
    <div>
    <Paper elevation={3} className="question-answer-item">
      <div className="question-answer-item-inner-container">
        <span>
        {question.statement}
        </span>
      </div>
    </Paper>
    </div>
  );
};

const QuestionAnswerItems = (props) => {
  const { questionAnswerItems = [] } = props;

  return (
    <div>
      {questionAnswerItems.map((questionAnswerItem) => {
        return <QuestionAnswer questionAnswerItem={questionAnswerItem} />;
      })}
    </div>
  );
};

export default QuestionAnswerItems;
