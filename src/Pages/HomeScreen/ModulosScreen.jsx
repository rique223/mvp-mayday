import {
  Avatar,
  Box,
  Button,
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
import { Link } from "react-router-dom";
import { CidadesContext } from "../../Context/CidadesContext";

const ModulosScreen = () => {
  const { cidades, setCidades } = useContext(CidadesContext);

  useEffect(() => {
    console.log(cidades);
  }, []);

  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      bg={"white"}
    >
      <Flex
        w="100%"
        h="20%"
        flexDir="row"
        bg={"white"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"36px"}
      >
        Módulos
      </Flex>
      <Flex
        w="100%"
        h="80%"
        flexDir="row"
        flexWrap={"wrap"}
        bg={"white"}
        // alignItems={"center"}
        // alignContent={"center"}
        justifyContent={"center"}
      >
        {cidades.map((c) => {
          const link = "/contingencias/" + c.value;
          return (
            <>
              <Link
                to={link}
                style={{
                  display: "flex",
                  flex: 1,
                  textAlign: "center",
                  maxHeight: "40%",
                  maxWidth: "20%",
                  width: "20%"
                }}
              >
                <Flex
                  h="100%"
                  w="100%"
                  alignContent={"center"}
                  justifyContent="center"
                  alignItems={"center"}
                  marginLeft={"5px"}
                  marginRight={"5px"}
                  borderRadius={"25px"}
                  bg={"green.500"}
                  fontSize={"20px"}
                  color={"white"}
                  padding= {"7px"}
                  // textAlign={"center"}
                >
                  Contingência - {c.label}
                </Flex>
              </Link>
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ModulosScreen;
