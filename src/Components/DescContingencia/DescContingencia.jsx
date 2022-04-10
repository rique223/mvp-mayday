import { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { headingStyle } from "../../Utils/globalStyles";
import Editavel from "../Editavel";

const DescContingencia = ({ descricao }) => {
  const [descricaoAux, setDescricaoAux] = useState("a");
  const [descricaoOriginal, setDescricaoOriginal] = useState("");
  const [mostrarValor, setMostrarValor] = useState(false);

  useEffect(() => {
    const setarValores = () => {
      console.log(descricao);
      setMostrarValor(false);
      setDescricaoAux(descricao);
      setDescricaoOriginal(descricao);
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
          onSubmit={() => setDescricaoOriginal(descricaoAux)}
          onCancel={() => setDescricaoAux(descricaoOriginal)}
          onChange={(e) => setDescricaoAux(e.target.value)}
          texto={descricaoAux}
          estiloInput={descriptionStyle}
        />
      )}
    </Flex>
  );
};

export default DescContingencia;
