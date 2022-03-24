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
      flexDir="row"
      alignItems="center"
      // paddingBlockStart="12rem"
    >
      {cidades.map((c) => {
        const link = "/contingencia/" + c.value;
        return (
          <>
            <Link to={link} >
              <Box
                key={c.value}
                h="50%"
                margin={"100"}
                bg="green"
                w="100%"
                p={10}
                color="white"
              >
                {c.label}
              </Box>
            </Link>
          </>
        );
      })}
    </Flex>
  );
};

export default ModulosScreen;
