import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import { ModalDialog } from "@mui/joy";

const QuestionAnswerDetailView = (props) => {
  const { answerId, handleModalClose } = props;
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
