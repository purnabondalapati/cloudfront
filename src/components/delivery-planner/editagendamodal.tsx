import React from "react";
import { Editor } from '@tinymce/tinymce-react'
import CustomModal from "components/common/customModal";

const EditAgendaModal = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {

  return (
  <CustomModal isOpen={isOpen} onClose={onClose}>
     <Editor
        init={{
          height: 300,
          menubar: false,
          plugins: 'lists',
          toolbar: "undo redo | " +
          "bullist numlist",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
      />

  </CustomModal>
  );
};

export default EditAgendaModal;
