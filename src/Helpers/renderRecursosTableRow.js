import { Td, Text, Tr } from "@chakra-ui/react";
import Agente from "../Components/Agente";

export const renderRecursosTableRows = (recursos) =>
  recursos.length > 0 && recursos.map((recurso) => (
    <Tr key={recurso.idRecurso}>
      <Td>
        <Text
          fontWeight="400"
          fontSize="1.5rem"
          lineHeight="28px"
          color="#303030"
        >
          {recurso.descRecurso}
        </Text>
      </Td>
      <Td display="flex" flexDirection="row" alignItems="center">
        <Agente
          dadosAgente={{
            cargo: recurso.responsavel.cargo.descricao,
            nome: recurso.responsavel.nome,
            contato: recurso.responsavel.telefone,
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
          {recurso.responsavel.telefone}
        </Text>
      </Td>
      <Td textAlign="center" fontWeight="400">
        {Number(recurso.quantidadeRecurso)}
      </Td>
    </Tr>
  ));
