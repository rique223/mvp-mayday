import {
  Box,
  Center,
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
import { headingStyle } from "../../Utils/globalStyles";
import { renderRecursosTableRows } from "../../Helpers/renderRecursosTableRow";
import InputTabela from "../InputTabela";
import { useEffect, useState } from "react";

const TabelaRecursosContingencia = ({
  recursos,
  setarRecursos,
  planoRecursos,
}) => {
  useEffect(() => {
    const setarAgentes = () => {
      setarRecursos(planoRecursos);
    };

    setarAgentes();
  }, [planoRecursos, planoRecursos.length]);

  const tableHeaderStyle = {
    fontWeight: "400",
    fontSize: "1.125rem",
    lineHeight: "21px",
    color: "#000000",
  };

  const deletaRecurso = (recurso) => {
    setarRecursos(
      recursos.filter(
        (recursoAtual) => recursoAtual.idRecurso !== recurso.idRecurso
      )
    );
  };

  return (
    <Flex
      flexDirection='column'
      marginBlockEnd='4rem'
      paddingInline='1rem'
      maxW='101rem'
      w='100%'
    >
      <Heading {...headingStyle}>Recursos</Heading>
      <Center w='100%'>
        <Box
          borderRadius='15px'
          boxShadow='lg'
          border='1px'
          borderColor='gray.200'
          padding={3}
          w='100%'
        >
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th {...tableHeaderStyle}>Recurso</Th>
                <Th {...tableHeaderStyle}>Responsável</Th>
                <Th {...tableHeaderStyle}>Principal Contato</Th>
                <Th {...tableHeaderStyle} textAlign='center'>
                  Qtd.
                </Th>
                <Th {...tableHeaderStyle} textAlign='center'>
                  Ações
                </Th>
              </Tr>
            </Thead>
            <Tbody>{renderRecursosTableRows(recursos, deletaRecurso)}</Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={4}>
                  <InputTabela />
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      </Center>
    </Flex>
  );
};

export default TabelaRecursosContingencia;
