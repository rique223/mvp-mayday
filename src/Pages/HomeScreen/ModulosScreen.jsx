import {
  Avatar,
  Box,
  Button,
  Flex,
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
      alignItems="center"
      paddingBlockStart="12rem"
    >
      {cidades.map((c) => (
        <>
          <Box key={c.value} margin={"10"} bg="green" w="50%" p={12} color="white">
            {c.label}
          </Box>
        </>
      ))}
    </Flex>
  );
};

export default ModulosScreen;
