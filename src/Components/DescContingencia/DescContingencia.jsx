import ResizeTextarea from "react-textarea-autosize";
import { useEffect, useRef, useState } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { headingStyle } from "Utils/globalStyles";
import EditableControl from "Components/EditableControl";

const DescContingencia = ({
  descricao,
  setDescricao,
  descricaoOriginal,
  setDescricaoOriginal,
}) => {
  const editableTextInputRef = useRef(null);

  useEffect(() => {
    console.log(descricao);
  }, [descricao]);

  const handleCursorFimDaDescricao = () => {
    const fimDaDescricao = editableTextInputRef.current.value.length;

    editableTextInputRef.current.setSelectionRange(
      fimDaDescricao,
      fimDaDescricao
    );
  };

  const [pointerType, setPointerType] = useState("pointer");

  const descriptionStyle = {
    fontWeight: "300",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    cursor: pointerType,
    py: 2,
    px: 4,
  };

  return (
    <Flex
      flexDir="column"
      marginBlockEnd="4rem"
      paddingInline="1rem"
      maxW="101rem"
      w="100%"
    >
      <Heading {...headingStyle}>Descrição</Heading>
      <Editable
        onSubmit={() => setDescricaoOriginal(descricao)}
        onCancel={() => setDescricao(descricaoOriginal)}
        onEdit={handleCursorFimDaDescricao}
        defaultValue={descricao}
      >
        <EditablePreview
          transition="background .2s ease-in-out"
          _hover={{
            background: useColorModeValue("gray.100", "gray.700"),
          }}
          {...descriptionStyle}
        />
        <EditableInput
          as={ResizeTextarea}
          ref={editableTextInputRef}
          w="100%"
          minH="unset"
          overflow="hidden"
          resize="none"
          minRows={1}
          onChange={(e) => setDescricao(e.target.value)}
          {...descriptionStyle}
        />
        <EditableControl
          setPointerType={setPointerType}
          original={descricaoOriginal}
          setDescricao={setDescricao}
        />
      </Editable>
    </Flex>
  );
};

export default DescContingencia;
