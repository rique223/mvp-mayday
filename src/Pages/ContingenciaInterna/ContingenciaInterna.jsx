import { Flex } from "@chakra-ui/react";
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
  console.log(idPlano);
  const [cadastraNovoAgente, setCadastraNovoAgente] = useState(false);
  const [cadastraNovoRecurso, setCadastraNovoRecurso] = useState(false);
  const [descricao, setDescricao] = useState(
    "- Ocorrência de fatos pontuais podendo acontecer isoladas ou ao mesmo tempo. - A retirada emergencial das pessoas que estiverem nas áreas de risco ou afetada, nas classificações de risco Alto e Muito Alto, conforme levantamento prévio da prefeitura. - As vias urbanas e vicinais do município que poderão ser comprometidas pelos deslizamentos. - Os locais escolhidos como abrigo, escola municipais, terão as aulas paralisadas para acomodação da população que terá que ser retirada de suas residências. - Se houverem mais de 28 vítimas, será necessário apoio para transporte e recebimento delas em outras localidades para atendimento médico. - Necessidade de resposta especializada para o salvamento das vítimas em caso de soterramento."
  );

  const [descricaoOriginal, setDescricaoOriginal] = useState(
    "- Ocorrência de fatos pontuais podendo acontecer isoladas ou ao mesmo tempo. - A retirada emergencial das pessoas que estiverem nas áreas de risco ou afetada, nas classificações de risco Alto e Muito Alto, conforme levantamento prévio da prefeitura. - As vias urbanas e vicinais do município que poderão ser comprometidas pelos deslizamentos. - Os locais escolhidos como abrigo, escola municipais, terão as aulas paralisadas para acomodação da população que terá que ser retirada de suas residências. - Se houverem mais de 28 vítimas, será necessário apoio para transporte e recebimento delas em outras localidades para atendimento médico. - Necessidade de resposta especializada para o salvamento das vítimas em caso de soterramento."
  );

  return (
    <Flex flexDir='column' alignItems='center' marginBlock='5rem' padding='0'>
      <HeaderContingencia />
      <DescContingencia
        descricao={descricao}
        setDescricao={setDescricao}
        descricaoOriginal={descricaoOriginal}
        setDescricaoOriginal={setDescricaoOriginal}
      />
      <Flex
        flexDir='row'
        marginBlockEnd='4rem'
        paddingInline='1rem'
        maxW='101rem'
        w='100%'
      >
        <TabelaAgentesContingencia />
        <TagsContingencia />
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
