import { Flex, Textarea } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import BotoesAct from "../../Components/BotoesAct";
import Modal from "../../Components/Modal";
import { useContext, useState, useEffect } from "react";
import AccordionsContingencia from "../../Components/AccordionsContingencia";
import DescContingencia from "../../Components/DescContingencia";
import HeaderContingencia from "../../Components/HeaderContingencia";
import MapaContingencia from "../../Components/MapaContingencia";
import TabelaAgentesContingencia from "../../Components/TabelaAgentesContingencia";
import TabelaRecursosContingencia from "../../Components/TabelaRecursosContingencia";
import TagsContingencia from "../../Components/TagsContingencia";
import FormCadastroAgente from "../../Components/FormCadastroAgente";
import FormCadastroRecurso from "../../Components/FormCadastroRecurso";
import apiPlanoById from "../../Utils/apiPlanoAtivacaoById";
import montarPlanoContingencia from "../../Utils/montarPlanoContingencia";
import compararPlanoContingencia from "../../Utils/compararPlanoContingencia";
import fetchPlanoAtivacao from "../../Helpers/fetchPlanoAtivacaoById";
import fetchPlanoAtivacaoById from "../../Helpers/fetchPlanoAtivacaoById";
import fetchPostPlanoContingencia from "../../Helpers/fetchPostPlanoContingencia";
import { useParams } from "react-router-dom";
import { CidadesContext } from "../../Context/CidadesContext";

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
  const [perfis, setPerfis] = useState([]);
  const setarPerfis = (valor) => setPerfis(valor);
  const [danosOriginal, setDanosOriginal] = useState("");
  const setarDanosOriginal = (valor) => setDanosOriginal(valor);
  const [historicoOriginal, setHistoricoOriginal] = useState("");
  const setarHistoricoOriginal = (valor) => setHistoricoOriginal(valor);
  const [comAlternativaOriginal, setComAlternativaOriginal] = useState("");
  const setarComAlternativaOriginal = (valor) =>
    setComAlternativaOriginal(valor);
  const [recursos, setRecursos] = useState([]);
  const setarRecursos = (valor) => setRecursos(valor);

  useEffect(() => {
    buscaContingenciaInterna();
  }, []);

  const buscaContingenciaInterna = async () => {
    try {
      const data = await fetchPlanoAtivacaoById(idPlano);
      console.log("dataById", data);
      setPlanoContingencia(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addPerfisAgente = (valor) => {
    const auxPlanos = { ...planoContingencia };
    auxPlanos.agentes.push(valor);
    setPlanoContingencia(auxPlanos);
    setPerfis(auxPlanos);
  };

  const addPerfisRecurso = (valor) => {
    const auxPlanos = { ...planoContingencia };
    auxPlanos.recursos.push(valor);
    setPlanoContingencia(auxPlanos);
    setRecursos(auxPlanos);
  };

  const postPlanoAtivacao = async () => {
    try {
      const plano = montarPlanoContingencia(
        idPlano,
        tituloOriginal,
        subTituloOriginal,
        descricaoOriginal,
        comAlternativaOriginal,
        historicoOriginal,
        danosOriginal,
        [],
        perfis,
        recursos,
        planoContingencia.cidade
      );
      console.log(JSON.stringify(plano));
      const resposta = await fetchPostPlanoContingencia(plano);
      console.log(resposta);
    } catch (err) {
      console.log(err);
    }
  };

  const { cidades, findCidadeById } = useContext(CidadesContext);

  let { idCidade } = useParams();

  const cidadeAtual = findCidadeById(cidades, idCidade);

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
            perfis={perfis}
            setarPerfis={setarPerfis}
            agentes={planoContingencia.agentes}
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
          recursos={recursos}
          setarRecursos={setarRecursos}
          planoRecursos={planoContingencia.recursos}
        />
        <AccordionsContingencia
          prop={{
            danosOriginal,
            setarDanosOriginal,
            danos: planoContingencia.danos,
            historicoOriginal,
            setarHistoricoOriginal,
            historicoEventos: planoContingencia.historicoEventos,
            comAlternativaOriginal,
            setarComAlternativaOriginal,
            comunicacaoAlternativa: planoContingencia.comunicacaoAlternativa,
          }}
        />
        <BotoesAct
          isPortal={true}
          setCadastraNovoAgente={setCadastraNovoAgente}
          setCadastraNovoRecurso={setCadastraNovoRecurso}
          postPlanoAtivacao={postPlanoAtivacao}
        />
        <MapaContingencia cidadeAtual={cidadeAtual} />

        {cadastraNovoAgente && (
          <Modal onOverlayClick={() => setCadastraNovoAgente(false)}>
            <FormCadastroAgente
              setCadastraNovoAgente={setCadastraNovoAgente}
              addPerfis={addPerfisAgente}
              tipoCadastro="agente"
            />
          </Modal>
        )}

        {cadastraNovoRecurso && (
          <Modal onOverlayClick={() => setCadastraNovoRecurso(false)}>
            <FormCadastroAgente
              setCadastraNovoAgente={setCadastraNovoRecurso}
              addPerfis={addPerfisRecurso}
              tipoCadastro="recurso"
            />
          </Modal>
        )}
      </Flex>
    )
  );
};

export default ContingenciaInterna;
