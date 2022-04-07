import { Flex } from "@chakra-ui/layout";
import React from "react";

export const HeaderListaContingencias = ({ children }) => {
  const cssValue = {
    w: "50%",
    h: "50%",
    flexDir: "column",
    alignItems: "center",
    paddingBlockStart: "6rem",
  };

  return <Flex {...cssValue}>{children}</Flex>;
};
