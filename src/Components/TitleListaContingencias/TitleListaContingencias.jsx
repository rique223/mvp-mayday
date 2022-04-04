import { Box } from "@chakra-ui/layout";
import React from "react";

export const TitleListaContingencias = ({ titulo }) => {
  const cssValue = {
    padding: "4",
    color: "grey",
    fontSize: "4vw",
    textAlign: "center",
  };

  return <Box {...cssValue}> {titulo} </Box>
};
