import { Td, Text, Tr } from "@chakra-ui/react";
import Agente from "../Components/Agente";

export const renderRecursosTableRows = (recursos) =>
  recursos.map((recurso) => (
    <Tr key={recurso.id}>
      <Td>
        <Text
          fontWeight="400"
          fontSize="1.5rem"
          lineHeight="28px"
          color="#303030"
        >
          {recurso.nome}
        </Text>
      </Td>
      <Td display="flex" flexDirection="row" alignItems="center">
        <Agente
          dadosAgente={{
            cargo: recurso.cargo,
            nome: recurso.responsavel,
            contato: recurso.contato,
          }}
        />
      </Td>
      <Td>
        <Text
          fontWeight="400"
          fontSize="1.5rem"
          lineHeight="21px"
          color="#303030"
        >
          {recurso.contato}
        </Text>
      </Td>
      <Td textAlign="center" fontWeight="400">
        {recurso.qtd}
      </Td>
    </Tr>
  ));
