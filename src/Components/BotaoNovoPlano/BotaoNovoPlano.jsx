import { Flex } from "@chakra-ui/layout";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const BotaoNovoPlano = ({ children }) => {
  const cssValue = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FFFFFF",
    border: "2px dashed #A0A0A0",
    borderRadius: "25px",
    w: "100%",
    maxW: "530px",
    h: "100%",
    minH: "473px",
    shadow: "xl",
    transition: "opacity .2s ease",
    opacity: 1,
    _hover: {
      cursor: "pointer",
      opacity: ".5",
    },
  };

  return (
    <Flex {...cssValue}>
      <AddIcon w={100} h={100} color="#A0A0A0" />
    </Flex>
  );
};

export default BotaoNovoPlano;
