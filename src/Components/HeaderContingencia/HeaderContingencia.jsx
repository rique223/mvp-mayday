import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { handleCursorFim } from "../../Helpers/handleCursorFim";
import ProfilePic from "../../Media/ProfilePic.svg";
import Editavel from "../Editavel";

const HeaderContingencia = ({ prop }) => {
  const [tituloAux, setTituloAux] = useState("");

  const [subTituloAux, setSubTituloAux] = useState("");
  const [mostrarValor, setMostrarValor] = useState(false);

  useEffect(() => {
    const setarValores = () => {
      setMostrarValor(false);
      setSubTituloAux(prop.subTitulo);
      prop.setarSubTituloOriginal(prop.subTitulo);
      setTituloAux(prop.titulo);
      prop.setarTituloOriginal(prop.titulo);
      setMostrarValor(true);
    };

    setarValores();
  }, []);

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
      flexDir="row"
      alignItems="center"
      marginBlockEnd="4rem"
      paddingInline="1rem"
      maxW="101rem"
      w="100%"
    >
      {mostrarValor && (
        <>
          <Image
            borderRadius="full"
            boxSize="190px"
            src={ProfilePic}
            alt="Foto de perfil da contingência"
            marginInlineEnd="28px"
          />
          <Flex flexDir="column">
            <Editavel
              onSubmit={() => prop.setarTituloOriginal(tituloAux)}
              onCancel={() => setTituloAux(prop.tituloOriginal)}
              onChange={(e) => setTituloAux(e.target.value)}
              texto={tituloAux}
              estiloInput={estiloTituloPlano}
            />

            <Editavel
              onSubmit={() => prop.setarSubTituloOriginal(subTituloAux)}
              onCancel={() => setSubTituloAux(prop.subTituloOriginal)}
              onChange={(e) => setSubTituloAux(e.target.value)}
              texto={subTituloAux}
              estiloInput={estiloSubTituloPlano}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default HeaderContingencia;
