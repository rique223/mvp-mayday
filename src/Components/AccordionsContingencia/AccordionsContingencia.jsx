import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const AccordionsContingencia = () => {
  return (
    <Accordion allowToggle allowMultiple marginBlockEnd="11.125rem" w="100%">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize="2.25rem" fontWeight="300">
              Comunicação alternativa
            </Box>
            <AccordionIcon w="4.625rem" h="2.9375rem" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize="1.5rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize="2.25rem" fontWeight="300">
              Histórico de eventos da região
            </Box>
            <AccordionIcon w="4.625rem" h="2.9375rem" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize="1.5rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize="2.25rem" fontWeight="300">
              Danos
            </Box>
            <AccordionIcon w="4.625rem" h="2.9375rem" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize="1.5rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionsContingencia;
