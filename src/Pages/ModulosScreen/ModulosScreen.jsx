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
import TextCidadeModulo from "../../Components/TextCidadeModulo/TextCidadeModulo";
import TitleModulos from "../../Components/TitleModulos/TitleModulos";
import BodyModulos from "../../Components/BodyModulos/BodyModulos";

const ModulosScreen = () => {
  const { cidades, setCidades } = useContext(CidadesContext);

  useEffect(() => {
    console.log(cidades);
  }, []);

  return (
    <Flex w="100%" h="100%" flexDir="column" bg={"white"}>
      <TitleModulos titulo={"Módulos"}></TitleModulos>
      <BodyModulos>
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
                  width: "20%",
                }}
              >
                <TextCidadeModulo titulo={`Contingência - ${c.label}`} />
              </Link>
            </>
          );
        })}
      </BodyModulos>
    </Flex>
  );
};

export default ModulosScreen;
