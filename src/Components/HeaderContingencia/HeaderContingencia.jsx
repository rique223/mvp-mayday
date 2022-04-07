import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { handleCursorFim } from "../../Helpers/handleCursorFim";
import ProfilePic from "../../Media/ProfilePic.svg";
import EditableControl from "../EditableControl";
import Editavel from "../Editavel";

const HeaderContingencia = () => {
  const [titulo, setTitulo] = useState("Incêndio/Bombeiros");
  const [tituloOriginal, setTituloOriginal] = useState("Incêndio/Bombeiros");

  const [subTitulo, setSubTitulo] = useState(
    "Corpo de bombeiros do estado de Goiás"
  );
  const [subTituloOriginal, setSubTituloOriginal] = useState(
    "Corpo de bombeiros do estado de Goiás"
  );

  const estiloTituloPlano = {
    fontWeight: "400",
    fontSize: "4rem",
    color: "#000000",
  };

  const estiloSubTituloPlano = {
    fontWeight: "300",
    fontSize: "36px",
    color: "#808080",
  };

  return (
    <Flex
      flexDir='row'
      alignItems='center'
      marginBlockEnd='4rem'
      paddingInline='1rem'
      maxW='101rem'
      w='100%'
    >
      <Image
        borderRadius='full'
        boxSize='190px'
        src={ProfilePic}
        alt='Foto de perfil da contingência'
        marginInlineEnd='28px'
      />
      <Flex flexDir='column'>
        <Editavel
          onSubmit={() => setTituloOriginal(titulo)}
          onCancel={() => setTitulo(tituloOriginal)}
          onChange={(e) => setTitulo(e.target.value)}
          texto={titulo}
          estiloInput={estiloTituloPlano}
        />

        <Editavel
          onSubmit={() => setSubTituloOriginal(subTitulo)}
          onCancel={() => setSubTitulo(subTituloOriginal)}
          onChange={(e) => setSubTitulo(e.target.value)}
          texto={subTitulo}
          estiloInput={estiloSubTituloPlano}
        />
      </Flex>
    </Flex>
  );
};

export default HeaderContingencia;
