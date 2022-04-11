import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { headingStyle } from "../../Utils/globalStyles";
import { renderAgentesTableRows } from "../../Helpers/renderAgentesTableRows";
import InputTabela from "../InputTabela";
import { useEffect, useState } from "react";

const TabelaAgentesContingencia = ({ prop }) => {

  const [mostrarValor, setMostrarValor] = useState(false);

  useEffect(() => {
    const setarAgentes = () => {
      setMostrarValor(false);
      let auxAgentes = [];
      prop.agentes.map((a) => {
        auxAgentes.push({
          cargo: a.cargo.descCargo,
          nome: a.nome,
          contato: a.telefone,
        });
      });
      prop.setarPerfis(auxAgentes);
      setMostrarValor(true);
    };

    setarAgentes();
  }, []);

  const tableHeaderStyle = {
    fontWeight: "400",
    fontSize: "1.125rem",
    lineHeight: "21px",
    color: "#000000",
  };

  return (
    <Flex flexDirection="column" w="58%" marginInlineEnd="40px">
      <Heading {...headingStyle}>Agentes</Heading>
      {mostrarValor && (
        <Box
          borderRadius="15px"
          boxShadow="lg"
          border="1px"
          borderColor="gray.200"
          padding={3}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th {...tableHeaderStyle}>Pessoas</Th>
                <Th {...tableHeaderStyle}>Principal Contato</Th>
                <Th {...tableHeaderStyle}>Funções</Th>
              </Tr>
            </Thead>
            <Tbody>{renderAgentesTableRows(prop.perfis)}</Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={2}>
                  <InputTabela />
                </Td>
                <Td colSpan={1} textAlign="center">
                  <Text
                    fontWeight="400"
                    fontSize="2.25rem"
                    lineHeight="42px"
                    color="#000"
                  >
                    0/20
                  </Text>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      )}
    </Flex>
  );
};

export default TabelaAgentesContingencia;
