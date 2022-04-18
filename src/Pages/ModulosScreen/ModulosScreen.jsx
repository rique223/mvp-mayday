import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import "../../App.scss";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { CidadesContext } from "../../Context/CidadesContext";
import fetchMunicipios from "../../Helpers/fetchMunicipios";

const ModulosScreen = () => {
  const [cidades, setCidades] = useState([]);
  const { idCidades } = useParams();
  const [mostrarValores, setMostrarValores] = useState(false);

  const buscaInfoCidade = async () => {
    try {
      const respMunicipios = await fetchMunicipios();
      const splitCidades = idCidades.split("+");
      let auxCidades = [];
      console.log("splitCidades", splitCidades);
      for (let s of splitCidades) {
        const nomeCidade = respMunicipios.find((m) => m.value == s);
        console.log("nomeCidade", nomeCidade);
        auxCidades.push(nomeCidade);
      }
      console.log(respMunicipios);
      setCidades(auxCidades);
      setMostrarValores(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    buscaInfoCidade();
  }, []);

  return (
    <Flex w="100%" h="100%" justifyContent="center" flexDir="column" bg="white">
      {mostrarValores && (
        <>
          <Heading
            as="h1"
            alignSelf="center"
            justifySelf="center"
            fontSize="4.5rem"
            fontWeight="400"
            lineHeight="84px"
            color="rgba(0, 0, 0, 0.4)"
            marginBlockEnd="2rem"
          >
            Módulos
          </Heading>
          <SimpleGrid
            spacing="1.25rem"
            columns={5}
            maxH="80%"
            marginInline="2rem"
            marginBlockEnd="2rem"
          >
            {cidades.map((cidade) => {
              const link = "/contingencias/" + cidade.value;
              return (
                <Flex
                  key={cidade.value}
                  height="250px"
                  boxShadow="xl"
                  alignItems="center"
                  justifyContent="center"
                  background="green.500"
                  fontSize="1.5rem"
                  color="white"
                  cursor="pointer"
                  borderRadius="25px"
                  padding="10px"
                  transition="filter .2s ease, boxShadow .2s ease"
                  _hover={{
                    filter: "brightness(120%)",
                    boxShadow: "none",
                  }}
                >
                  <Link
                    to={link}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Contingência - {cidade.label}
                  </Link>
                </Flex>
              );
            })}
          </SimpleGrid>
        </>
      )}
    </Flex>
  );
};

export default ModulosScreen;
