import ResizeTextarea from "react-textarea-autosize";
import { useRef, useState } from "react";
import {
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { headingStyle } from "Utils/globalStyles";

const DescContingencia = () => {
  const [descricao, setDescricao] = useState(
    "- Ocorrência de fatos pontuais podendo acontecer isoladas ou ao mesmo tempo. - A retirada emergencial das pessoas que estiverem nas áreas de risco ou afetada, nas classificações de risco Alto e Muito Alto, conforme levantamento prévio da prefeitura. - As vias urbanas e vicinais do município que poderão ser comprometidas pelos deslizamentos. - Os locais escolhidos como abrigo, escola municipais, terão as aulas paralisadas para acomodação da população que terá que ser retirada de suas residências. - Se houverem mais de 28 vítimas, será necessário apoio para transporte e recebimento delas em outras localidades para atendimento médico. - Necessidade de resposta especializada para o salvamento das vítimas em caso de soterramento."
  );
  const EditableTextAreaRef = useRef(null);
  const EditablePreviewRef = useRef(null);

  return (
    <Flex
      flexDir="column"
      marginBlockEnd="4rem"
      paddingInline="1rem"
      maxW="101rem"
      w="100%"
    >
      <Heading {...headingStyle}>Descrição</Heading>
      <Editable defaultValue={descricao}>
        <EditablePreview
          ref={EditablePreviewRef}
          fontWeight="300"
          fontSize="24px"
          lineHeight="33px"
          color="#000000"
        />
        <EditableTextarea
          ref={EditableTextAreaRef}
          fontSize="24px"
          fontWeight="300"
          w="100%"
          minH="unset"
          overflow="hidden"
          resize="none"
          minRows={1}
          as={ResizeTextarea}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </Editable>
    </Flex>
  );
};

export default DescContingencia;
