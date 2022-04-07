import { Flex, Textarea } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import BotoesAct from "../../Components/BotoesAct";
import Modal from "../../Components/Modal";
import { useState } from "react";
import AccordionsContingencia from "../../Components/AccordionsContingencia";
import DescContingencia from "../../Components/DescContingencia";
import HeaderContingencia from "../../Components/HeaderContingencia";
import MapaContingencia from "../../Components/MapaContingencia";
import TabelaAgentesContingencia from "../../Components/TabelaAgentesContingencia";
import TabelaRecursosContingencia from "../../Components/TabelaRecursosContingencia";
import TagsContingencia from "../../Components/TagsContingencia";
import { useParams } from "react-router-dom";
import FormCadastroAgente from "../../Components/FormCadastroAgente";
import FormCadastroRecurso from "../../Components/FormCadastroRecurso";

const ContingenciaInterna = () => {
  const { idPlano } = useParams();

  const [cadastraNovoAgente, setCadastraNovoAgente] = useState(false);
  const [cadastraNovoRecurso, setCadastraNovoRecurso] = useState(false);

  return (
    <Flex flexDir='column' alignItems='center' marginBlock='5rem' padding='0'>
      <HeaderContingencia />
      <DescContingencia />
      <Flex
        flexDir='row'
        marginBlockEnd='4rem'
        paddingInline='1rem'
        maxW='101rem'
        w='100%'
      >
        <TabelaAgentesContingencia />
        <Flex flexDir='column'>
          <TagsContingencia />
          <Textarea
            as={ResizeTextarea}
            placeholder='Digite aqui a mensagem a ser enviada aos agentes.'
            maxH='415px'
          />
        </Flex>
      </Flex>
      <TabelaRecursosContingencia />
      <MapaContingencia />
      <AccordionsContingencia />
      <BotoesAct
        isPortal={true}
        setCadastraNovoAgente={setCadastraNovoAgente}
        setCadastraNovoRecurso={setCadastraNovoRecurso}
      />

      {cadastraNovoAgente && (
        <Modal onOverlayClick={() => setCadastraNovoAgente(false)}>
          <FormCadastroAgente setCadastraNovoAgente={setCadastraNovoAgente} />
        </Modal>
      )}

      {cadastraNovoRecurso && (
        <Modal onOverlayClick={() => setCadastraNovoRecurso(false)}>
          <FormCadastroRecurso
            setCadastraNovoRecurso={setCadastraNovoRecurso}
          />
        </Modal>
      )}
    </Flex>
  );
};

export default ContingenciaInterna;
