import { Flex } from "@chakra-ui/layout";
import React from "react";

export default function BodyModulos({ children }) {
  const cssValue = {
    w: "100%",
    h: "80%",
    flexDir: "row",
    flexWrap: "wrap",
    bg: "white",
    justifyContent: "center",
  };

  return <Flex {...cssValue}> {children} </Flex>;
}
