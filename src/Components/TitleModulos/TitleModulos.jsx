import { Flex } from "@chakra-ui/layout";
import React from "react";

export default function TitleModulos({ titulo }) {
  const cssValue = {
    w: "100%",
    h: "20%",
    flexDir: "row",
    bg: "white",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
  };

  return <Flex {...cssValue}>{titulo}</Flex>;
}
