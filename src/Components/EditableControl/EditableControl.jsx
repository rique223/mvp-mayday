import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton, useEditableControls } from "@chakra-ui/react";
import React, { useEffect } from "react";

const EditableControl = ({ setPointerType }) => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
    useEditableControls();

  useEffect(() => {
    const pointerTypes = {
      true: "text",
      false: "pointer",
    };

    setPointerType(pointerTypes[isEditing]);
  }, [isEditing, setPointerType]);

  return (
    isEditing && (
      <ButtonGroup justifyContent='end' size='sm' w='full' spacing={2} mt={2}>
        <IconButton
          colorScheme='green'
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          colorScheme='red'
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    )
  );
};

export default EditableControl;
