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

  const [cadastraNovoAgente, setCadastraNovoAgente] = useState(false);
  const [cadastraNovoRecurso, setCadastraNovoRecurso] = useState(false);
  const [tituloOriginal, setTituloOriginal] = useState("");
  const [subTituloOriginal, setSubTituloOriginal] = useState("");
  const setarSubTituloOriginal = (valor) => setSubTituloOriginal(valor);
  const setarTituloOriginal = (valor) => setTituloOriginal(valor);
  const [descricaoOriginal, setDescricaoOriginal] = useState("");
  const setarDescricaoOriginal = (valor) => setDescricaoOriginal(valor);
  const [perfis, setPerfis] = useState();
  const setarPerfis = (valor) => setPerfis(valor);
  const [danosOriginal, setDanosOriginal] = useState("");
  const setarDanosOriginal = (valor) => setDanosOriginal(valor);
  const [historicoOriginal, setHistoricoOriginal] = useState("");
  const setarHistoricoOriginal = (valor) => setHistoricoOriginal(valor);
  const [comAlternativaOriginal, setComAlternativaOriginal] = useState("");
  const setarComAlternativaOriginal = (valor) => setComAlternativaOriginal(valor);

  useEffect(() => {
    const buscaContingenciaInterna = async () => {
      try {
        const data = await fetchPlanoAtivacaoById(idPlano);
        console.log("dataById", data);
        setPlanoContingencia(data);
      } catch (err) {
        console.log(err);
      }
    };

    buscaContingenciaInterna();
  }, []);

  return (
    Object.keys(planoContingencia).length > 0 && (
      <Flex flexDir="column" alignItems="center" marginBlock="5rem" padding="0">
        <HeaderContingencia
          prop={{
            titulo: planoContingencia.titulo,
            subTitulo: planoContingencia.subtitulo,
            subTituloOriginal,
            tituloOriginal,
            setarTituloOriginal,
            setarSubTituloOriginal,
          }}
        />
        <DescContingencia
          prop={{
            descricao: planoContingencia.descricao,
            descricaoOriginal,
            setarDescricaoOriginal,
          }}
        />
        <Flex
          flexDir="row"
          marginBlockEnd="4rem"
          paddingInline="1rem"
          maxW="101rem"
          w="100%"
        >
          <TabelaAgentesContingencia
            prop={{
              perfis,
              setarPerfis,
              agentes: planoContingencia.agentes,
            }}
          />
          <Flex flexDir="column">
            <TagsContingencia tags={planoContingencia.tags} />
            <Textarea
              as={ResizeTextarea}
              placeholder="Digite aqui a mensagem a ser enviada aos agentes."
              maxH="415px"
            />
          </Flex>
        </Flex>
        <TabelaRecursosContingencia
          planoRecursos={planoContingencia.recursos}
        />
        <MapaContingencia />
        <AccordionsContingencia prop={{
          danosOriginal,
          setarDanosOriginal,
          danos: planoContingencia.danos,
          historicoOriginal,
          setarHistoricoOriginal,
          historicoEventos: planoContingencia.historicoEventos,
          comAlternativaOriginal,
          setarComAlternativaOriginal,
          comunicacaoAlternativa: planoContingencia.comunicacaoAlternativa
        }} />
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
