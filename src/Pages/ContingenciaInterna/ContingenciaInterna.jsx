import { Flex } from "@chakra-ui/react";
import BotoesAct from "Components/BotoesAct";
import AccordionsContingencia from "../../Components/AccordionsContingencia";
import DescContingencia from "../../Components/DescContingencia";
import HeaderContingencia from "../../Components/HeaderContingencia";
import MapaContingencia from "../../Components/MapaContingencia";
import TabelaAgentesContingencia from "../../Components/TabelaAgentesContingencia";
import TabelaRecursosContingencia from "../../Components/TabelaRecursosContingencia";
import TagsContingencia from "../../Components/TagsContingencia";

const ContingenciaInterna = () => {
  return (
    <Flex flexDir="column" alignItems="center" marginBlock="5rem" padding="0">
      <HeaderContingencia />
      <DescContingencia />
      <Flex
        flexDir="row"
        marginBlockEnd="4rem"
        paddingInline="1rem"
        maxW="101rem"
        w="100%"
      >
        <TabelaAgentesContingencia />
        <TagsContingencia />
      </Flex>
      <TabelaRecursosContingencia />
      <MapaContingencia />
      <AccordionsContingencia />
      <BotoesAct isPortal={true} />
    </Flex>
  );
};

export default ContingenciaInterna;
