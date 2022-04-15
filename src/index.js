import { ChakraProvider } from "@chakra-ui/react";
import { render } from "react-dom";
import App from "./App";
import "../node_modules/leaflet-geosearch/dist/geosearch.css";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
