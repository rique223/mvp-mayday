import { Center, Checkbox, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const MapaContingencia = () => {
  return (
    <Flex flexDir="column">
      <Heading marginBlockEnd="1rem">Mapa</Heading>
      <Center flexDir="row" justifyContent="space-around">
        <Checkbox size="lg" defaultChecked>
          Tudo
        </Checkbox>
        <Checkbox size="lg">Rotas de fuga</Checkbox>
        <Checkbox size="lg">Pessoas</Checkbox>
        <Checkbox size="lg">Hidrografia</Checkbox>
        <Checkbox size="lg">Abrigos</Checkbox>
        <Checkbox size="lg">Hospitais</Checkbox>
        <Checkbox size="lg">Industrias</Checkbox>
      </Center>
      O mapa vem aqui...
    </Flex>
  );
};

export default MapaContingencia;
