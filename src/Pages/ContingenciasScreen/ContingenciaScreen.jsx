import {
  Input,
  Heading,
  Container,
  SimpleGrid,
  Modal,
  Flex,
  Spinner,
} from "@chakra-ui/react";

import "../../App.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CidadesContext } from "../../Context/CidadesContext";
import CardPlano from "../../Components/CardPlano";
import BotaoNovoPlano from "../../Components/BotaoNovoPlano";
import fetchPlanoAtivacao from "../../Helpers/fetchPlanoAtivacao";
import fetchMunicipios from "../../Helpers/fetchMunicipios";

const ContingenciaScreen = () => {
  let { idCidade } = useParams();
  const [infoPlanos, setInfoPlanos] = useState();
  const [mostrarValores, setMostrarValores] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [mensagemComunicacao, setMensagemComunicacao] = useState("");

  useEffect(() => {
    const buscaInfoCidade = async () => {
      try {
        const respMunicipios = await fetchMunicipios();

        const nomeCidade = respMunicipios.find(
          (m) => `${m.value}` == idCidade
        ).label;
        setTitulo(nomeCidade + " - Planos Ativação");
        setMostrarValores(true);
      } catch (err) {
        setMostrarValores(false);
        console.log(err);
      }
    };

    const getInfoPlanos = async () => {
      try {
        const respMunicipios = await fetchPlanoAtivacao(idCidade);
        setInfoPlanos(respMunicipios);
        setMostrarValores(true);
      } catch (err) {
        setMostrarValores(false);
      }
    };

    getInfoPlanos();
    buscaInfoCidade();
  }, [idCidade]);

  return (
    <Container
      display="flex"
      flexDir="column"
      w="100%"
      h="100%"
      maxW="101rem"
      alignItems="center"
      marginBlockEnd="2rem"
    >
      {mostrarValores ? (
        <>
          <Heading
            as="h1"
            fontWeight="400"
            fontSize="4.5rem"
            lineHeight="84px"
            marginBlockEnd="2rem"
            color="rgba(0, 0, 0, 0.4)"
          >
            {titulo}
          </Heading>

          <Input
            placeholder="Buscar planos de contingência"
            background="#FFFFFF"
            border="1px solid #000000"
            borderRadius="25px"
            h="3rem"
            w="100%"
            maxW="101rem"
            fontSize="1.75rem"
            marginBlockEnd="2rem"
          />

          <SimpleGrid w="100%" spacing="16px" columns={3}>
            <BotaoNovoPlano idCidade={idCidade} />
            {infoPlanos &&
              infoPlanos.map((infoPlano) => (
                <Link
                  to={`/contingenciaInterna/cidade=${idCidade}/plano=${infoPlano.id}`}
                  key={infoPlano.id}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardPlano infoPlano={infoPlano} />
                </Link>
              ))}
          </SimpleGrid>
        </>
      ) : (
        <Flex
          w={"100vw"}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner size="xl"></Spinner>
        </Flex>
      )}
      {mensagemComunicacao && mensagemComunicacao.length > 0 && (
        <Modal onOverlayClick={() => setMensagemComunicacao("")}>
          {mensagemComunicacao}
        </Modal>
      )}
    </Container>
  );
};

export default ContingenciaScreen;
