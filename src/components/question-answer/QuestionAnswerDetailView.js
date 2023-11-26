import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import { ModalDialog } from "@mui/joy";
import { useSelector } from "react-redux";

const QuestionAnswerDetailView = (props) => {
  const { answerId, handleModalClose } = props;

  const questionanswer = useSelector(store => store.questionanswer);
  const {questionAnswerById} = questionanswer;

  return (
    <div>
      <Modal open={answerId !== null} onClose={handleModalClose}>
        <ModalDialog>
          <ModalClose />
          <Typography>{answerId}</Typography>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default QuestionAnswerDetailView;
