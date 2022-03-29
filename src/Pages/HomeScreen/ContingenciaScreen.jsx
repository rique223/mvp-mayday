import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import "../../App.scss";
import { useContext, useEffect, useState } from "react";
import fetchMunicipios from "../../Helpers/fetchMunicipios";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { Link, useParams } from "react-router-dom";
import { CidadesContext } from "../../Context/CidadesContext";

const ContingenciaScreen = (props) => {
  const { cidades, setCidades, findCidadeById } = useContext(CidadesContext);
  let { idCidade } = useParams();

  useEffect(() => {
    console.log("props", cidades, idCidade);
  }, []);

  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      alignItems="center"
    >
      <Flex
        w="50%"
        h="50%"
        flexDir="column"
        alignItems="center"
        paddingBlockStart="6rem"
      >
        <Box
          padding="4"
          color="grey"
          maxW="lg"
          fontSize={"40px"}
          textAlign={"center"}
        >
          {findCidadeById(cidades, idCidade)} - Planos de Contingência
        </Box>
        <Input placeholder="Buscar planos de contingência" />
      </Flex>
      <Flex
        w="100%"
        h="50%"
        flexDir="column"
      >
        <Box>
          <Grid templateColumns="repeat(5, 1fr)" gap={1}>
            <GridItem w="200" h="200" bg="blue.500" />
            <GridItem w="200" h="200" bg="green.500" />
            <GridItem w="200" h="200" bg="red.500" />
            <GridItem w="200" h="200" bg="blue.500" />
            <GridItem w="200" h="200" bg="red.500" />
            <GridItem w="200" h="200" bg="blue.500" />
            <GridItem w="200" h="200" bg="blue.500" />
            <GridItem w="200" h="200" bg="red.500" />
            <GridItem w="200" h="200" bg="blue.500" />
            <GridItem w="200" h="200" bg="blue.500" />
            <GridItem w="200" h="200" bg="blue.500" />
            <GridItem w="200" h="200" bg="blue.500" />
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContingenciaScreen;
