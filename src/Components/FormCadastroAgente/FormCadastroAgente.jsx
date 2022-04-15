import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { inputStyle } from "../../Utils/globalStyles";

const FormCadastroAgente = ({ setCadastraNovoAgente }) => {
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

  const [novoAgente, setNovoAgente] = useState({
    cpf: "",
    nome: "",
    telefone: "",
    cargo: {
      idCargo: null,
      descCargo: "",
      departamento: {
        idDepartamento: null,
        descDepartamento: "",
      },
    },
    cidade: null,
  });

  useEffect(() => {

  }, [])

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
        Novo Agente
      </Heading>
      <VStack spacing="2rem">
        <FormControl>
          <FormLabel htmlFor="cpf">CPF</FormLabel>
          <Input
            id="cpf"
            type="number"
            maxLength={11}
            {...inputStyle}
            value={novoAgente.cpf}
            onBlur={() => console.log}
            placeholder="Escreva o CPF"
          />
        </FormControl>

        <HStack spacing="2rem" w="100%">
          <FormControl>
            <FormLabel htmlFor="nome">Nome</FormLabel>
            <Input
              id="nome"
              type="text"
              {...inputStyle}
              placeholder="Escreva seu nome"
            />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel htmlFor="instituicao">Instituição</FormLabel>
          <Select
            id="instituicao"
            placeholder="Selecione uma instituição"
            {...inputStyle}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="cargo">Cargo</FormLabel>
          <Select id="cargo" placeholder="Selecione um cargo" {...inputStyle} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="contato">Principal contato</FormLabel>
          <Input
            id="contato"
            type="number"
            placeholder="Principal Contato"
            {...inputStyle}
          />
          <FormHelperText>Exemplo: (62) 91234-5678</FormHelperText>
        </FormControl>
      </VStack>

      <HStack spacing="1rem" w="100%" justifyContent="flex-end">
        <Button
          bg="#95AE23"
          onClick={() => setCadastraNovoAgente(false)}
          {...modalButtonStyle}
        >
          Salvar
        </Button>
        <Button
          bg="red"
          onClick={() => setCadastraNovoAgente(false)}
          {...modalButtonStyle}
        >
          Cancelar
        </Button>
      </HStack>
    </>
  );
};

export default FormCadastroAgente;
