import { Flex } from "@chakra-ui/layout";
import React from "react";

export const BodyListaContingencias = ({ children }) => {
  const cssValue = {
    w: "100%",
    h: "40%",
    flexDir: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  return <Flex {...cssValue}>{children}</Flex>;
};
