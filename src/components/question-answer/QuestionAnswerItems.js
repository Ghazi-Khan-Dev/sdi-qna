import React, { useState } from "react";
import Paper from "@mui/material/Paper";

import "./question-answer-items.css";
import { Button } from "@mui/joy";
import QuestionAnswerDetailView from "./QuestionAnswerDetailView";

const QuestionAnswer = (props) => {
  const { questionAnswerItem, showAsnwer } = props;
  const { question, answer } = questionAnswerItem;

  const handleShowAsnwer = (questionAnswerItemClicked) => {
    showAsnwer(questionAnswerItemClicked.id);
  };
  return (
    <div>
      <Paper elevation={3} className="question-answer-item">
        <div className="question-answer-item-inner-container">
          <span className="question">{question.statement}</span>

          <span className="show-answer">
            <Button
              size="md"
              variant={"solid"}
              color="primary"
              onClick={() => handleShowAsnwer(questionAnswerItem)}
            >
              Read More
            </Button>
          </span>
        </div>
      </Paper>
    </div>
  );
};

const QuestionAnswerItems = (props) => {
  const { questionAnswerItems = [] } = props;
  const [answerId, setAnswerId] = useState(null);

  const showAsnwer = (answerId) => {
    setAnswerId(answerId);
  }

  const handleModalClose = () => {
    setAnswerId(null);
  }

  return (
    <div className="question-answer-items-main-container">
      {questionAnswerItems.map((questionAnswerItem) => {
        return <QuestionAnswer questionAnswerItem={questionAnswerItem} showAsnwer={showAsnwer} />;
      })}

      <QuestionAnswerDetailView answerId={answerId} handleModalClose={handleModalClose}/>
    </div>
  );
};

export default QuestionAnswerItems;
