import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

export default function CallsContingencia({ infoPlano }) {
  const cssValue = {
    // w:"30%",
    h: "100%",
    maxW: "50vw",
    // minW: "fit-content",
    marginRight: "1%",
    marginBottom: "0.5%",
    direction: "column",
    borderRadius: "25px",
    borderWidth: "2px",
    borderColor: "gray.400",
    boxShadow: "10px",
    padding: "7px",
    // wrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
  };

  return (
    <Flex {...cssValue}>
      <Flex h="30%" direction={"column"}>
        <Text fontSize={"2vw"} fontWeight="bold">
          {infoPlano.titulo}
        </Text>
        <Text fontSize={"1.4vw"}>{infoPlano.subTitulo}</Text>
      </Flex>
      <hr></hr>
      <Flex h="50%" direction={"column"}>
        <Text fontSize={"1.6vw"}>Principais Agentes</Text>
        <Flex direction={"row"} width={"100%"}>
          {infoPlano.principaisAgentes.map((p) => (
            <Flex direction={"column"} width={"100%"}>
              <Text fontSize={"1.4vw"}>{p.nome}</Text>
              <Text fontSize={"1.2vw"}>{p.telefone}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
        <hr></hr>
      <Flex h={"20%"} direction="column">
        <Text fontSize={"1.2vw"}> Tags </Text>
        <Flex
          w={"100%"}
          h={"20%"}
          justifyContent={"space-around"}
          wrap={"wrap"}
        >
          {infoPlano.tags.map((t) => (
            <Flex direction={"column"} width={"fit-content"}>
              <Text
                bg={"green.300"}
                padding="2px"
                borderRadius={"5px"}
                fontSize={"1.2vw"}
              >
                {t}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
