import { Input, Heading, Container, SimpleGrid } from "@chakra-ui/react";

import "../../App.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CidadesContext } from "../../Context/CidadesContext";
import CallsContingencia from "../../Components/CallsContingencia/CallsContingencia";
import BotaoNovoPlano from "../../Components/BotaoNovoPlano";

const ContingenciaScreen = () => {
  const { cidades, findCidadeById } = useContext(CidadesContext);
  let { idCidade } = useParams();

  const titulo = `${findCidadeById(cidades, idCidade)} - Planos de Ativação`;

  const infoPlanos = [
    {
      titulo: "Incêndio/Bombeiros",
      subTitulo: "Corpo de bombeiros do estado de Goiás",
      principaisAgentes: [
        {
          id: 1,
          nome: "João Jordan",
          cargo: "CEO",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
      ],
      tags: [
        {
          id: 1,
          titulo: "Enchente",
          cor: "#007B2F",
        },
        {
          id: 2,
          titulo: "Enchente",
          cor: "#F73718",
        },
        {
          id: 3,
          titulo: "Enchente",
          cor: "#FF7900",
        },
      ],
    },
    {
      titulo: "Enchente",
      subTitulo: "Corpo de bombeiros do estado de Goiás",
      principaisAgentes: [
        {
          id: 1,
          nome: "João Jordan",
          cargo: "CEO",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
      ],
      tags: [
        {
          id: 1,
          titulo: "Enchente",
          cor: "#007B2F",
        },
        {
          id: 2,
          titulo: "Enchente",
          cor: "#F73718",
        },
        {
          id: 3,
          titulo: "Enchente",
          cor: "#FF7900",
        },
      ],
    },
    {
      titulo: "Enchente",
      subTitulo: "Corpo de bombeiros do estado de Goiás",
      principaisAgentes: [
        {
          id: 1,
          nome: "João Jordan",
          cargo: "CEO",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
      ],
      tags: [
        {
          id: 1,
          titulo: "Enchente",
          cor: "#007B2F",
        },
        {
          id: 2,
          titulo: "Enchente",
          cor: "#F73718",
        },
        {
          id: 3,
          titulo: "Enchente",
          cor: "#FF7900",
        },
      ],
    },
    {
      titulo: "Enchente",
      subTitulo: "Corpo de bombeiros do estado de Goiás",
      principaisAgentes: [
        {
          id: 1,
          nome: "João Jordan",
          cargo: "CEO",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
        {
          id: 2,
          nome: "Cap. Abreu",
          cargo: "Capitão",
          telefone: "(62)98565-2412",
        },
      ],
      tags: [
        {
          id: 1,
          titulo: "Enchente",
          cor: "#007B2F",
        },
        {
          id: 2,
          titulo: "Enchente",
          cor: "#F73718",
        },
        {
          id: 3,
          titulo: "Enchente",
          cor: "#FF7900",
        },
      ],
    },
  ];

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

      <SimpleGrid w='100%' spacing='30px' columns={3}>
        <BotaoNovoPlano />
        {infoPlanos &&
          infoPlanos.map((infoPlano) => (
            <CallsContingencia infoPlano={infoPlano} />
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default ContingenciaScreen;
