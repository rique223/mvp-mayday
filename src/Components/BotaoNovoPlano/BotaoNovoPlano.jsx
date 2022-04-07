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
    h: "100%",
    shadow: "xl",
    transition: "filter .2s ease",
    _hover: {
      cursor: "pointer",
      filter: "brightness(120%)",
    },
  };

  return (
    <Flex {...cssValue}>
      <AddIcon w={100} h={100} />
    </Flex>
  );
};

export default BotaoNovoPlano;
