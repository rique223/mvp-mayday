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

const TabelaRecursosContingencia = ({prop}) => {

  const [mostrarValor, setMostrarValor] = useState(false);

  useEffect(() => {
    const setarAgentes = () => {
      setMostrarValor(false);
      let auxRecurso = [];
      prop.planoRecursos.map((r) => {
        auxRecurso.push({
          id: r.idRecurso,
          nome: r.descRecurso,
          responsavel: r.responsavel.nome,
          cargo: "",
          qtd: r.quantidadeRecurso,
          contato: r.responsavel.telefone
        });
      });
      prop.setarRecursos(auxRecurso);
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
              </Tr>
            </Thead>
            <Tbody>{renderRecursosTableRows(prop.recursos)}</Tbody>
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
