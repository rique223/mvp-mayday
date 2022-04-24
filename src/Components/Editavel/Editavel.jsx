import {
  Editable,
  EditableInput,
  EditablePreview,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { handleCursorFim } from "../../Helpers/handleCursorFim";
import EditableControl from "../EditableControl";
import ResizeTextarea from "react-textarea-autosize";

const Editavel = ({ onSubmit, onCancel, onChange, texto, estiloInput }) => {
  const editableTextInputRef = useRef(null);

  const [pointerType, setPointerType] = useState("pointer");

  return (
    <Editable
      onSubmit={() => onSubmit()}
      onCancel={() => onCancel()}
      onEdit={() => handleCursorFim(editableTextInputRef)}
      defaultValue={texto}
      cursor={pointerType}
    >
      <EditablePreview
        transition='background .2s ease-in-out'
        _hover={{
          background: useColorModeValue("gray.100", "gray.700"),
        }}
        {...estiloInput}
        cursor={pointerType}
      />
      <EditableInput
        as={ResizeTextarea}
        ref={editableTextInputRef}
        w='100%'
        minH='unset'
        overflow='hidden'
        resize='none'
        minRows={1}
        onChange={(e) => onChange(e)}
        cursor={pointerType}
        {...estiloInput}
      />
      <EditableControl setPointerType={setPointerType} />
    </Editable>
  );
};

export default Editavel;
