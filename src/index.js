import { ChakraProvider } from "@chakra-ui/react";
import { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
