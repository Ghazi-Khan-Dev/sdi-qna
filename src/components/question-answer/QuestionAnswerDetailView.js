import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import { ModalDialog } from "@mui/joy";
import { useSelector } from "react-redux";

import './question-answer-detail-view.css'

const DetailedView = (props) => {
  const { question, answer } = props?.questionanswerDetails;
  return (
    <div className="detailed-view-container">
      <div>
        <Typography>{`Question - ${question?.statement}`}</Typography>
      </div>
      <div>
        <Typography>{`Answer - ${answer?.statement}`}</Typography>
      </div>
    </div>
  );
};

const QuestionAnswerDetailView = (props) => {
  const { answerId, handleModalClose } = props;

  const questionanswer = useSelector((store) => store.questionanswer);
  const { questionAnswerById } = questionanswer;
  const questionanswerDetails = questionAnswerById[answerId];

  return (
    <div className="modal-main-container">
      <Modal open={answerId !== null} onClose={handleModalClose} >
        <ModalDialog size="lg" layout="center">
          {/* <ModalClose /> */}
          {questionanswerDetails ? (
            <DetailedView questionanswerDetails={questionanswerDetails}/>
          ) : (
            <div>
              <Typography>No answer available</Typography>
            </div>
          )}
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default QuestionAnswerDetailView;
