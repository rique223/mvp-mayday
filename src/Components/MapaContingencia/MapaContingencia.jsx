import { Center, Checkbox, Flex, Heading, Box } from "@chakra-ui/react";
import React from "react";
import { headingStyle } from "Utils/globalStyles";

const MapaContingencia = () => {
  return (
    <Flex flexDir="column" marginBlockEnd="4rem" w="100%" alignItems="center">
      <Heading
        {...headingStyle}
        paddingInlineStart="1rem"
        maxWidth="101rem"
        w="100%"
      >
        Mapa
      </Heading>
      <Center
        flexDir="row"
        justifyContent="space-around"
        paddingInline="1rem"
        marginBlockEnd="1rem"
        maxW="101rem"
        w="100%"
      >
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
      <Box
        width="100%"
        height="34.6875rem"
        background="#ccc"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        MAPA
      </Box>
    </Flex>
  );
};

export default MapaContingencia;
