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

const TabelaAgentesContingencia = ({ agentes }) => {
  // const perfis = [
  //   {
  //     cargo: "Desenvolvedor",
  //     nome: "Henrique Guimarães",
  //     contato: 62999499739,
  //   },
  //   {
  //     cargo: "Desenvolvedor",
  //     nome: "Matheus Braz",
  //     contato: 62986270882,
  //   },
  //   {
  //     cargo: "Desenvolvedor",
  //     nome: "Matheus Diniz",
  //     contato: 62994827373,
  //   },
  // ];

  const [perfis, setPerfis] = useState();
  const [mostrarValor, setMostrarValor] = useState(false);

  useEffect(() => {
    const setarAgentes = () => {
      setMostrarValor(false);
      let auxAgentes = [];
      agentes.map((a) => {
        auxAgentes.push({
          cargo: a.cargo.descCargo,
          nome: a.nome,
          contato: a.telefone,
        });
      });
      setPerfis(auxAgentes);
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
            <Tbody>{renderAgentesTableRows(perfis)}</Tbody>
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
