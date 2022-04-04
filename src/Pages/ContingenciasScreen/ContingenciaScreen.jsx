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

import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import "../../App.scss";
import { useContext, useEffect, useState } from "react";
import fetchMunicipios from "../../Helpers/fetchMunicipios";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { Link, useParams } from "react-router-dom";
// import * from '.'
import { CidadesContext } from "../../Context/CidadesContext";
import { BodyListaContingencias } from "../../Components/BodyListaContingencias/BodyListaContingencias";
import { HeaderListaContingencias } from "../../Components/HeaderListaContingencias/HeaderListaContingencias";
import CallsAddContingenciaDefault from "../../Components/CallsAddContingenciaDefault/CallsAddContingenciaDefault";
import { TitleListaContingencias } from "../../Components/TitleListaContingencias/TitleListaContingencias";
import CallsContingencia from "../../Components/CallsContingencia/CallsContingencia";

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
      <HeaderListaContingencias>
        <TitleListaContingencias titulo={`${findCidadeById(cidades, idCidade)} - Planos de Contingência`}/>
        <Input placeholder="Buscar planos de contingência" fontSize={"3vw"} h="fit-content"/>
      </HeaderListaContingencias>
      <BodyListaContingencias>
        <CallsAddContingenciaDefault> 
          <AddIcon w={58} h={58}/>
        </CallsAddContingenciaDefault>

        <CallsContingencia infoPlano={infoPlano}/>
        <CallsContingencia infoPlano={infoPlano}/>
        <CallsContingencia infoPlano={infoPlano}/>
        <CallsContingencia infoPlano={infoPlano}/>
      </BodyListaContingencias>
    </Flex>
  );
};

export default ContingenciaScreen;
