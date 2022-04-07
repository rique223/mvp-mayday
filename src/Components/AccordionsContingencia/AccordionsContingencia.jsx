import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Editavel from "../Editavel";

const AccordionsContingencia = () => {
  const [comAlternativa, setComAlternativa] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  const [comALternativaOriginal, setComAlternativaOriginal] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );

  const [historico, setHistorico] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
  );
  const [historicoOriginal, setHistoricoOriginal] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
  );

  const [danos, setDanos] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
  );
  const [danosOriginal, setDanosOriginal] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
  );

  return (
    <Accordion allowToggle allowMultiple marginBlockEnd='11.125rem' w='100%'>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' fontSize='2.25rem' fontWeight='300'>
              Comunicação alternativa
            </Box>
            <AccordionIcon w='4.625rem' h='2.9375rem' />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize='1.5rem'>
          <Editavel
            onSubmit={() => setComAlternativaOriginal(comAlternativa)}
            onCancel={() => setComAlternativa(comALternativaOriginal)}
            onChange={(e) => setComAlternativa(e.target.value)}
            texto={comAlternativa}
          />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' fontSize='2.25rem' fontWeight='300'>
              Histórico de eventos da região
            </Box>
            <AccordionIcon w='4.625rem' h='2.9375rem' />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize='1.5rem'>
          <Editavel
            onSubmit={() => setHistoricoOriginal(historico)}
            onCancel={() => setHistorico(historicoOriginal)}
            onChange={(e) => setHistorico(e.target.value)}
            texto={historico}
          />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' fontSize='2.25rem' fontWeight='300'>
              Danos
            </Box>
            <AccordionIcon w='4.625rem' h='2.9375rem' />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize='1.5rem'>
          <Editavel
            onSubmit={() => setDanosOriginal(danos)}
            onCancel={() => setDanos(danosOriginal)}
            onChange={(e) => setDanos(e.target.value)}
            texto={danos}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionsContingencia;
