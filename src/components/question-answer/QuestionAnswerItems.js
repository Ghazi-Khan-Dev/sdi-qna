import React from "react";

const QuestionAnswer = (props) => {
  const {a, p} = props.questionAnswerItem;
  return (
    <div>
      <h3>{a}</h3>
      <h3>{p}</h3>
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
