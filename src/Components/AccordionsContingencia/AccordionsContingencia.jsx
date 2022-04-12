import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Editavel from "../Editavel";

const AccordionsContingencia = ({ prop }) => {
  const [comAlternativa, setComAlternativa] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );

  const [historico, setHistorico] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
  );

  const [danos, setDanos] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
  );

  const [mostrarValor, setMostrarValor] = useState(false);

  useEffect(() => {
    const setarValores = () => {
      setMostrarValor(false);
      prop.setarComAlternativaOriginal(prop.comunicacaoAlternativa);
      setComAlternativa(prop.comunicacaoAlternativa);
      prop.setarHistoricoOriginal(prop.historicoEventos);
      setHistorico(prop.historicoEventos);
      setDanos(prop.danos);
      prop.setarDanosOriginal(prop.danos);
      setMostrarValor(true);
    };

    setarValores();
  }, []);

  return (
    <Accordion allowToggle allowMultiple marginBlockEnd="11.125rem" w="100%">
      {mostrarValor && (
        <>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize="2.25rem"
                  fontWeight="300"
                >
                  Comunicação alternativa
                </Box>
                <AccordionIcon w="4.625rem" h="2.9375rem" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="1.5rem">
              <Editavel
                onSubmit={() =>
                  prop.setarComAlternativaOriginal(comAlternativa)
                }
                onCancel={() => setComAlternativa(prop.comALternativaOriginal)}
                onChange={(e) => setComAlternativa(e.target.value)}
                texto={comAlternativa}
              />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize="2.25rem"
                  fontWeight="300"
                >
                  Histórico de eventos da região
                </Box>
                <AccordionIcon w="4.625rem" h="2.9375rem" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="1.5rem">
              <Editavel
                onSubmit={() => prop.setarHistoricoOriginal(historico)}
                onCancel={() => setHistorico(prop.historicoOriginal)}
                onChange={(e) => setHistorico(e.target.value)}
                texto={historico}
              />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize="2.25rem"
                  fontWeight="300"
                >
                  Danos
                </Box>
                <AccordionIcon w="4.625rem" h="2.9375rem" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="1.5rem">
              <Editavel
                onSubmit={() => prop.setarDanosOriginal(danos)}
                onCancel={() => setDanos(prop.danosOriginal)}
                onChange={(e) => setDanos(e.target.value)}
                texto={danos}
              />
            </AccordionPanel>
          </AccordionItem>
        </>
      )}
    </Accordion>
  );
};

export default AccordionsContingencia;
