import { Input, Heading, Container, SimpleGrid } from "@chakra-ui/react";

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

  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    const buscaInfoCidade = async () => {
      try {
        const respMunicipios = await fetchMunicipios();

        const nomeCidade = respMunicipios.find(
          (m) => `${m.value}` == idCidade
        ).label;
        setTitulo(nomeCidade + " - Planos Ativação");
      } catch (err) {
        console.log(err);
      }
    };

    const getInfoPlanos = async () => {
      const respMunicipios = await fetchPlanoAtivacao(idCidade);
      setInfoPlanos(respMunicipios);
    };

    getInfoPlanos();
    buscaInfoCidade();
  }, [idCidade]);

  return (
    <Container
      display='flex'
      flexDir='column'
      w='100%'
      h='100%'
      maxW='101rem'
      alignItems='center'
      marginBlockEnd='2rem'
    >
      <Heading
        as='h1'
        fontWeight='400'
        fontSize='4.5rem'
        lineHeight='84px'
        marginBlockEnd='2rem'
        color='rgba(0, 0, 0, 0.4)'
      >
        {titulo}
      </Heading>

      <Input
        placeholder='Buscar planos de contingência'
        background='#FFFFFF'
        border='1px solid #000000'
        borderRadius='25px'
        h='3rem'
        w='100%'
        maxW='101rem'
        fontSize='1.75rem'
        marginBlockEnd='2rem'
      />

      <SimpleGrid w='100%' spacing='16px' columns={3}>
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
    </Container>
  );
};

export default ContingenciaScreen;
