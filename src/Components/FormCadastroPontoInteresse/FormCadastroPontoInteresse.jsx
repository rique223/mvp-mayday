import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { inputStyle } from "../../Utils/globalStyles";

const FormCadastroPontoInteresse = ({
  setCadastroNovoPontoInteresse,
  tipoPontoInteresse,
  setarPontoInteresse,
}) => {
  const modalButtonStyle = {
    boxShadow: "md",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "400",
    fontSize: "1.5rem",
    lineHeight: "28px",
    transition: "filter .2s ease",
    _hover: {
      filter: "brightness(120%)",
    },
    _active: {
      filter: "brightness(120%)",
    },
  };

  const cores = [
    "blue",
    "gold",
    "red",
    "green",
    "orange",
    "yellow",
    "violet",
    "grey",
    "black",
  ];

  const [pontoInteresse, setPontoInteresse] = useState([]);

  const [tipoSelecionado, setTipoSelecionado] = useState({});

  const setarLatitude = (novaLatitude) => {
    setPontoInteresse((prevPontoInteresse) => {
      const novoPonto = prevPontoInteresse;

      novoPonto.latitude = novaLatitude;

      return novoPonto;
    });
  };

  const setarLongitude = (novaLongitude) => {
    setPontoInteresse((prevPontoInteresse) => {
      const novoPonto = prevPontoInteresse;

      novoPonto.longitude = novaLongitude;

      return novoPonto;
    });
  };

  const setarMensagem = (novaMensagem) => {
    setPontoInteresse((prevPontoInteresse) => {
      const novoPonto = prevPontoInteresse;

      novoPonto.mensagem = novaMensagem;

      return novoPonto;
    });
  };

  const setarCor = (novaCor) => {
    setPontoInteresse((prevPontoInteresse) => {
      const novoPonto = prevPontoInteresse;

      novoPonto.cor = cores[novaCor];

      return novoPonto;
    });
  };

  const setarTipo = (index) => setTipoSelecionado(tipoPontoInteresse[index]);

  const criarPontoInteresse = () => {
    const valor = {
      latitude: pontoInteresse.latitude,
      longitude: pontoInteresse.longitude,
      tipoPontoInteresse: tipoSelecionado,
      mensagem: pontoInteresse.mensagem,
      cor: pontoInteresse.cor,
    };
    setarPontoInteresse(valor);
    setCadastroNovoPontoInteresse(false);
  };

  return (
    <>
      <Heading
        fontWeight='400'
        fontSize='4.5rem'
        lineHeight='5.25rem'
        display='flex'
        alignSelf='center'
        marginBlockEnd='3rem'
        color='#000000'
        opacity='.4'
      >
        Novo Ponto Interesse
      </Heading>
      <VStack spacing='2rem'>
        <FormControl>
          <FormLabel htmlFor='nome'>Latitude</FormLabel>
          <Input
            id='nome'
            type='text'
            {...inputStyle}
            placeholder='Escreva a latitude'
            value={pontoInteresse.latitude}
            onChange={(e) => setarLatitude(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='nome'>Longitude</FormLabel>
          <Input
            id='nome'
            type='text'
            {...inputStyle}
            placeholder='Escreva a longitude'
            value={pontoInteresse.longitude}
            onChange={(e) => setarLongitude(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='instituicao'>Tipo (Classificação)</FormLabel>
          <Select
            id='tipo'
            placeholder='Selecione o tipo do ponto de interesse'
            onChange={(e) => setarTipo(e.target.value)}
            {...inputStyle}
          >
            {tipoPontoInteresse.map((p, i) => (
              <option value={i}>{p.descricao}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='nome'>Mensagem</FormLabel>
          <Input
            id='nome'
            type='text'
            {...inputStyle}
            placeholder='Escreva a mensagem'
            value={pontoInteresse.mensagem}
            onChange={(e) => setarMensagem(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='cor'>Cor</FormLabel>
          <Select
            id='cor'
            placeholder='Selecione uma Cor'
            onChange={(e) => setarCor(e.target.value)}
            {...inputStyle}
          >
            {cores.map((p, i) => (
              <option value={i}>{p}</option>
            ))}
          </Select>
        </FormControl>
      </VStack>

      <HStack
        spacing='1rem'
        w='100%'
        justifyContent='flex-end'
        marginBlockStart='20px'
      >
        <Button
          bg='#95AE23'
          onClick={criarPontoInteresse}
          {...modalButtonStyle}
        >
          Salvar
        </Button>
        <Button
          bg='red'
          onClick={() => setCadastroNovoPontoInteresse(false)}
          {...modalButtonStyle}
        >
          Cancelar
        </Button>
      </HStack>
    </>
  );
};

export default FormCadastroPontoInteresse;
