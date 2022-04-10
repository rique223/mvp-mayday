import { Flex, Textarea } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import BotoesAct from "../../Components/BotoesAct";
import Modal from "../../Components/Modal";
import { useEffect, useState } from "react";
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
import apiPlanoById from "../../Utils/apiPlanoAtivacaoById";
import fetchPlanoAtivacao from "../../Helpers/fetchPlanoAtivacaoById";
import fetchPlanoAtivacaoById from "../../Helpers/fetchPlanoAtivacaoById";

const ContingenciaInterna = () => {
  const { idPlano } = useParams();
  const [planoContingencia, setPlanoContingencia] = useState({});

  useEffect(() => {
    const buscaContingenciaInterna = async () => {
      try {
        console.log(Object.keys(planoContingencia).length > 0);
        const data = await fetchPlanoAtivacaoById(idPlano);
        console.log("dataById", data);
        setPlanoContingencia(data);
      } catch (err) {
        console.log(err);
      }
    };

    buscaContingenciaInterna();
  }, []);

  const [cadastraNovoAgente, setCadastraNovoAgente] = useState(false);
  const [cadastraNovoRecurso, setCadastraNovoRecurso] = useState(false);

  return (
    Object.keys(planoContingencia).length > 0 && (
      <Flex flexDir="column" alignItems="center" marginBlock="5rem" padding="0">
        <HeaderContingencia />
        <DescContingencia descricao={planoContingencia.descricao} />
        <Flex
          flexDir="row"
          marginBlockEnd="4rem"
          paddingInline="1rem"
          maxW="101rem"
          w="100%"
        >
          <TabelaAgentesContingencia agentes={planoContingencia.agentes}/>
          <Flex flexDir="column">
            <TagsContingencia tags={planoContingencia.tags}/>
            <Textarea
              as={ResizeTextarea}
              placeholder="Digite aqui a mensagem a ser enviada aos agentes."
              maxH="415px"
            />
          </Flex>
        </Flex>
        <TabelaRecursosContingencia planoRecursos={planoContingencia.recursos}/>
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
    )
  );
};

export default ContingenciaInterna;
