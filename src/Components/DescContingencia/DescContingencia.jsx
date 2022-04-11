import { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { headingStyle } from "../../Utils/globalStyles";
import Editavel from "../Editavel";

const DescContingencia = ({ prop }) => {
  const [descricaoAux, setDescricaoAux] = useState("a");
  const [mostrarValor, setMostrarValor] = useState(false);

  useEffect(() => {
    const setarValores = () => {
      setMostrarValor(false);
      setDescricaoAux(prop.descricao);
      prop.setarDescricaoOriginal(prop.descricao);
      setMostrarValor(true);
    };

    setarValores();
  }, []);

  const descriptionStyle = {
    fontWeight: "300",
    fontSize: "1.5rem",
    lineHeight: "2rem",
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
      {mostrarValor && (
        <Editavel
          onSubmit={() => prop.setarDescricaoOriginal(descricaoAux)}
          onCancel={() => setDescricaoAux(prop.descricaoOriginal)}
          onChange={(e) => setDescricaoAux(e.target.value)}
          texto={descricaoAux}
          estiloInput={descriptionStyle}
        />
      )}
    </Flex>
  );
};

export default DescContingencia;
