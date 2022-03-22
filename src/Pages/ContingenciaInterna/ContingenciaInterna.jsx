import { Container, Flex } from "@chakra-ui/react";
import DescContingencia from "../../Components/DescContingencia";
import HeaderContingencia from "../../Components/HeaderContingencia";
import TabelaAgentesContingencia from "../../Components/TabelaAgentesContingencia";
import TabelaRecursosContingencia from "../../Components/TabelaRecursosContingencia";
import TagsContingencia from "../../Components/TagsContingencia";

const ContingenciaInterna = () => {
  return (
    <Container maxW="101rem" display="flex" flexDir="column" marginBlock="5rem">
      <HeaderContingencia />
      <DescContingencia />
      <Flex flexDir="row" marginBlockEnd="4rem">
        <TabelaAgentesContingencia />
        <TagsContingencia />
      </Flex>
      <TabelaRecursosContingencia />
    </Container>
  );
};

export default ContingenciaInterna;
