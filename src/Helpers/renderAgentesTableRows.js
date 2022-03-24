import { Td, Text, Tr } from "@chakra-ui/react";
import Agente from "../Components/Agente";
import BotoesAct from "../Components/BotoesAct";

export const renderAgentesTableRows = (perfis) =>
  perfis.map((perfil) => (
    <Tr key={perfil.contato}>
      <Td display="flex" flexDirection="row" alignItems="center">
        <Agente dadosAgente={perfil} />
      </Td>
      <Td>
        <Text
          fontWeight="400"
          fontSize="1.5rem"
          lineHeight="21px"
          color="#303030"
        >
          {perfil.contato}
        </Text>
      </Td>
      <Td>
        <BotoesAct />
      </Td>
    </Tr>
  ));
