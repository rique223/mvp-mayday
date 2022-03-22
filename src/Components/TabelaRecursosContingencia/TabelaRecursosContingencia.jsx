import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { renderRecursosTableRows } from "../../Helpers/renderRecursosTableRow";
import InputTabela from "../InputTabela";

const TabelaRecursosContingencia = () => {
  const recursos = [
    {
      nome: "Moto Niveladora",
      responsavel: "Henrique Guimarães",
      cargo: "Desenvolvedor",
      contato: 62999499739,
      qtd: 1,
    },
    {
      nome: "Retro escavadeira",
      responsavel: "Matheus Braz de Aquino",
      cargo: "Desenvolvedor",
      contato: 62999499739,
      qtd: 1,
    },
    {
      nome: "Caminhão pipa",
      responsavel: "Matheus Diniz de Alencar",
      cargo: "Desenvolvedor",
      contato: 62999499739,
      qtd: 1,
    },
    {
      nome: "Caminhão báscula",
      responsavel: "Capitão Ricardo",
      cargo: "Capitão",
      contato: 62999499739,
      qtd: 1,
    },
  ];

  const tableHeaderStyle = {
    fontWeight: "400",
    fontSize: "1.125rem",
    lineHeight: "21px",
    color: "#000000",
  };

  return (
    <Flex flexDirection="column" marginInlineEnd="40px">
      <Heading
        fontWeight="400"
        fontSize="2.25rem"
        lineHeight="2.625rem"
        marginBlockEnd="1rem"
      >
        Recursos
      </Heading>
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
              <Th {...tableHeaderStyle}>Recurso</Th>
              <Th {...tableHeaderStyle}>Responsável</Th>
              <Th {...tableHeaderStyle}>Principal Contato</Th>
              <Th {...tableHeaderStyle} textAlign="center">
                Qtd.
              </Th>
            </Tr>
          </Thead>
          <Tbody>{renderRecursosTableRows(recursos)}</Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={4}>
                <InputTabela />
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Flex>
  );
};

export default TabelaRecursosContingencia;
