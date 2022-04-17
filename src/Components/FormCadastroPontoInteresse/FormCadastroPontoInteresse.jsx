import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
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

  const valorInicial = {
    latitude: 0,
    longitude: 0,
    tipoPontoInteresse: {
      id: 0,
      descricao: "",
      cor: "",
    },
    mensagem: "",
    cor: "",
  };

  const [cores, setCores] = useState([
    "blue",
    "gold",
    "red",
    "green",
    "orange",
    "yellow",
    "violet",
    "grey",
    "black",
  ]);
  const [pontoInteresse, setPontoInteresse] = useState([]);

  const [tipoSelecionado, setTipoSelecionado] = useState({});

  const setarLatitude = (valor) => {
    let auxPonto = { ...pontoInteresse };
    auxPonto.latitude = valor;
    setPontoInteresse(auxPonto);
  };

  const setarLongitude = (valor) => {
    let auxPonto = { ...pontoInteresse };
    auxPonto.longitude = valor;
    setPontoInteresse(auxPonto);
  };

  const setarMensagem = (valor) => {
    let auxPonto = { ...pontoInteresse };
    auxPonto.mensagem = valor;
    setPontoInteresse(auxPonto);
  };

  const setarCor = (valor) => {
    let auxPonto = { ...pontoInteresse };
    auxPonto.cor = cores[valor];
    setPontoInteresse(auxPonto);
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
  };

  return (
    <>
      <Heading
        fontWeight="400"
        fontSize="4.5rem"
        lineHeight="5.25rem"
        display="flex"
        alignSelf="center"
        marginBlockEnd="3rem"
        color="#000000"
        opacity=".4"
      >
        Novo Recurso
      </Heading>
      <VStack spacing="2rem">
        <FormControl>
          <FormLabel htmlFor="nome">Latitude</FormLabel>
          <Input
            id="nome"
            type="text"
            {...inputStyle}
            placeholder="Escreva a latitude"
            value={pontoInteresse.latitude}
            onChange={(e) => setarLatitude(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="nome">Longitude</FormLabel>
          <Input
            id="nome"
            type="text"
            {...inputStyle}
            placeholder="Escreva a longitude"
            value={pontoInteresse.longitude}
            onChange={(e) => setarLongitude(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="instituicao">Instituição</FormLabel>
          <Select
            id="instituicao"
            placeholder="Selecione uma instituição"
            onChange={(e) => setarTipo(e.target.value)}
            {...inputStyle}
          >
            {tipoPontoInteresse.map((p, i) => (
              <option value={i}>{p.descricao}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="nome">Mensagem</FormLabel>
          <Input
            id="nome"
            type="text"
            {...inputStyle}
            placeholder="Escreva a mensagem"
            value={pontoInteresse.mensagem}
            onChange={(e) => setarMensagem(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="cor">Cor</FormLabel>
          <Select
            id="cor"
            placeholder="Selecione uma Cor"
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
        spacing="1rem"
        w="100%"
        justifyContent="flex-end"
        marginBlockStart="20px"
      >
        <Button
          bg="#95AE23"
          onClick={() => criarPontoInteresse()}
          {...modalButtonStyle}
        >
          Salvar
        </Button>
        <Button
          bg="red"
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
