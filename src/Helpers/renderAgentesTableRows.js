import { Td, Text, Tr } from "@chakra-ui/react";
import Agente from "../Components/Agente";
import BotoesAct from "../Components/BotoesAct";

export const renderAgentesTableRows = (perfis) =>
  perfis.length > 0 && perfis.map((perfil) => (
    <Tr key={perfil.cpf}>
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
          {perfil.telefone}
        </Text>
      </Td>
      <Td>
        <BotoesAct />
      </Td>
    </Tr>
  ));
