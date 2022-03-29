import ReactDOM from "react-dom";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { inputStyle } from "Utils/globalStyles";

const ModalCadastroAgente = ({ setCadastraNovoAgente }) => {
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

  return ReactDOM.createPortal(
    <Flex alignItems="center" justifyContent="center">
      <Box
        bg="#000"
        opacity="0.5"
        w="100%"
        h="100vh"
        position="fixed"
        top="0px"
        background-color="black"
        onClick={() => setCadastraNovoAgente(false)}
      />
      <Flex
        flexDir="column"
        position="fixed"
        top="50%"
        transform="translateY(-50%)"
        borderRadius="25px"
        align
        bg="#ffffff"
        maxW="62rem"
        w="100%"
        h="65%"
        padding="2rem"
        zIndex="4"
      >
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
          <HStack spacing="2rem" w="100%">
            <FormControl>
              <FormLabel htmlFor="nome">Nome</FormLabel>
              <Input
                id="nome"
                type="text"
                {...inputStyle}
                placeholder="Escreva seu primeiro nome"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="sobrenome">Sobrenome</FormLabel>
              <Input
                id="sobrenome"
                type="text"
                {...inputStyle}
                placeholder="Escreva seu sobrenome"
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
            <Select
              id="cargo"
              placeholder="Selecione um cargo"
              {...inputStyle}
            />
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
      </Flex>
    </Flex>,
    document.body
  );
};

export default ModalCadastroAgente;
