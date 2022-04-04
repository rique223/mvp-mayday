import { Flex } from "@chakra-ui/layout";
import React from "react";

export default function TextCidadeModulo({ titulo }) {
  const cssValue = {
    h: "100%",
    w: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5px",
    marginRight: "5px",
    borderRadius: "25px",
    bg: "green.500",
    fontSize: "20px",
    color: "white",
    padding: "7px",
  };

  return <Flex {...cssValue}> {titulo} </Flex>;
}
