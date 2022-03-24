import { Flex, Image, Text } from "@chakra-ui/react";
import ContactIcon from "../../Media/Contact_Icon.svg";

const Agente = ({ dadosAgente }) => (
  <>
    <Image src={ContactIcon} boxSize="60px" marginInlineEnd="10px" />
    <Flex flexDirection="column">
      <Text
        fontWeight="400"
        fontSize="1.5rem"
        color="#303030"
        marginBlockEnd="0.3125rem"
      >
        {dadosAgente.nome}
      </Text>
      <Text
        fontWeight="400"
        fontSize="1.125rem"
        lineHeight="21px"
        color="#808080"
      >
        {dadosAgente.cargo}
      </Text>
    </Flex>
  </>
);

export default Agente;
