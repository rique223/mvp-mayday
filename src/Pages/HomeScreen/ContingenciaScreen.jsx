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

  const infoPlano = {
    titulo: "Incêndio",
    subTitulo: "Bombeiros",
    principaisAgentes: [
      {
        id: 1,
        nome: "João Jordan",
        telefone: "(62)98565-2412",
      },
      {
        id: 2,
        nome: "Cap. Abreu",
        telefone: "(62)98565-2412",
      },
    ],
    tags: ["Incêndio", "Fogo", "EmergÊncia", "Bombeiros"],
  };

  useEffect(() => {
    console.log("props", cidades, idCidade);
  }, []);

  return (
    <Flex w="100%" h="100%" flexDir="column" alignItems="center">
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
        flexDir="row"
        flexWrap={"wrap"}
        justifyContent={"left"}
      >
        <Flex
          h={"80%"}
          w={"30%"}
          marginRight={"1%"}
          marginBottom={"0.5%"}
          direction={"column"}
          borderRadius={"25px"}
          borderWidth={"2px"}
          borderColor={"black"}
          boxShadow={"10px"}
          padding={"7px"}
          justifyContent={"space-around"}
        >
          <Text fontSize={"36px"} fontWeight="bold">
            {infoPlano.titulo}
          </Text>
          <Text fontSize={"18px"}>{infoPlano.subTitulo}</Text>
          <hr></hr>
          <Text fontSize={"24px"}>Principais Agentes</Text>
          <Text>
            <Flex direction={"row"} width={"100%"}>
              {infoPlano.principaisAgentes.map((p) => (
                <Flex direction={"column"} width={"100%"}>
                  <Text fontSize={"18px"}>{p.nome}</Text>
                  <Text fontSize={"12px"}>{p.telefone}</Text>
                </Flex>
              ))}
            </Flex>
            <hr></hr>
            <Text> Tags </Text>
            <Flex w={"100%"} justifyContent={"space-around"}>
              {infoPlano.tags.map((t) => (
                <Flex direction={"column"} width={"fit-content"}>
                  <Text bg={"green.300"} padding="2px" borderRadius={"5px"} fontSize={"18px"}>{t}</Text>
                </Flex>
              ))}
            </Flex>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContingenciaScreen;
