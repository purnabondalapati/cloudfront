import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "components/common/Buttons";
import { Editor } from '@tinymce/tinymce-react'
import CustomModal from "components/common/customModal";

const EditAgendaModal = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {

    const daysData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
      ];
    
      const [value , setValue] = useState('0')
  return (
  <CustomModal isOpen={isOpen} onClose={onClose}>
     <Editor
        // initialValue={{}}
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
