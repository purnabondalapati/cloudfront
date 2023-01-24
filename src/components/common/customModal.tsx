import React, { useState } from "react";
import {
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { PrimaryButton, SecondaryButton } from "components/common/Buttons";
import { Editor } from '@tinymce/tinymce-react'

const CustomModal = ({
    isOpen,
    onClose,
    children
  }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }) => {

    const daysData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
      ];
    
      const [value , setValue] = useState('0')
  return (
    <Modal size={["sm", "xl", "2xl"]}  isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
    <ModalHeader
      borderBottom="1px solid #DDDBDA"
      bgColor="#F2F8FD"
      fontSize="18px"
      fontWeight="700">
        Add/Edit Agenda
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={3} my={5}>
        {children}
      </ModalBody>
      <ModalFooter boxShadow="0px -1px 0px #DDDBDA">
      <ButtonGroup spacing={2}>
            <SecondaryButton
              fontWeight="400"
              fontSize="13px"
              borderColor="#DDDBDA"
              onClick={onClose}
            >
              Cancel
            </SecondaryButton>
            <PrimaryButton
              fontWeight="400"
              fontSize="13px"
              form="editLeanerModal"
              type="submit"
            >
              Save
            </PrimaryButton>
          </ButtonGroup>
        </ModalFooter>
    </ModalContent>
  </Modal>
  );
};

export default CustomModal;
