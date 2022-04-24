import { Flex, Text, Textarea, Spinner } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import BotoesAct from "../../Components/BotoesAct";
import Modal from "../../Components/Modal";
import { useState, useEffect, useCallback } from "react";
import AccordionsContingencia from "../../Components/AccordionsContingencia";
import DescContingencia from "../../Components/DescContingencia";
import HeaderContingencia from "../../Components/HeaderContingencia";
import MapaContingencia from "../../Components/MapaContingencia";
import TabelaAgentesContingencia from "../../Components/TabelaAgentesContingencia";
import TabelaRecursosContingencia from "../../Components/TabelaRecursosContingencia";
import TagsContingencia from "../../Components/TagsContingencia";
import FormCadastroAgente from "../../Components/FormCadastroAgente";
import montarPlanoContingencia from "../../Utils/montarPlanoContingencia";
import fetchPlanoAtivacaoById from "../../Helpers/fetchPlanoAtivacaoById";
import fetchPostPlanoContingencia from "../../Helpers/fetchPostPlanoContingencia";
import fetchBuscaTiposPontoInteresse from "../../Helpers/fetchBuscaTiposPontoInteresse";
import fetchPostEnviaSMS from "../../Helpers/fetchPostEnviaSMS";
import { useParams } from "react-router-dom";
import fetchMunicipios from "../../Helpers/fetchMunicipios";
import FormCadastroPontoInteresse from "../../Components/FormCadastroPontoInteresse";
import fetchBuscaPontoInteresseByIdPlano from "../../Helpers/fetchBuscaPontoInteresseByIdPlano";

const ContingenciaInterna = () => {
  const { idPlano } = useParams();
  const [planoContingencia, setPlanoContingencia] = useState({});

  const [cadastraNovoAgente, setCadastraNovoAgente] = useState(false);
  const [cadastraNovoRecurso, setCadastraNovoRecurso] = useState(false);
  const [cadastroNovoPontoInteresse, setCadastroNovoPontoInteresse] =
    useState(false);
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
  const [tipoPontoInteresse, setTipoPontoInteresse] = useState([]);
  const [pontoInteresse, setPontoInteresse] = useState([]);
  const setarPontoInteresse = (novoPontoInteresse) => {
    setPontoInteresse((prevPontoInteresse) => [
      ...prevPontoInteresse,
      novoPontoInteresse,
    ]);
  };
  const [mensagemSMS, setMensagemSMS] = useState("");

  const [mensagemComunicacao, setMensagemComunicacao] = useState("");

  let { idCidade } = useParams();

  const [cidadeAtual, setCidadeAtual] = useState({});

  const [mostrarValores, setMostrarValores] = useState(false);

  const buscaContingenciaInterna = useCallback(async () => {
    try {
      const data = await fetchPlanoAtivacaoById(idPlano);

      setPlanoContingencia(data);
    } catch (err) {
      setMensagemComunicacao("Erro ao buscar informações do plano de ativação");
      console.log(err);
    }
  }, [idPlano]);

  const buscaInfoCidade = useCallback(async () => {
    try {
      const respMunicipios = await fetchMunicipios();
      const cidade = respMunicipios.find((m) => `${m.value}` === idCidade);

      setCidadeAtual(cidade);
    } catch (err) {
      setMensagemComunicacao("Erro ao buscar informações do plano de ativação");
      console.log(err);
    }
  }, [idCidade]);

  const buscaPontoInteresse = useCallback(async () => {
    try {
      const data = await fetchBuscaPontoInteresseByIdPlano(idPlano);

      setPontoInteresse((prevPontos) => [...prevPontos, ...data]);
    } catch (err) {
      setMensagemComunicacao("Erro ao buscar informações do plano de ativação");
      console.log(err);
    }
  }, [idPlano]);

  const buscaTiposPlanoInteresse = async () => {
    try {
      const data = await fetchBuscaTiposPontoInteresse();

      setTipoPontoInteresse(data);
    } catch (err) {
      setMensagemComunicacao("Erro ao buscar informações do plano de ativação");
      console.log(err);
    }
  };

  const buscas = useCallback(async () => {
    setMostrarValores(false);
    await buscaTiposPlanoInteresse();
    await buscaContingenciaInterna();
    await buscaPontoInteresse();
    await buscaInfoCidade();
    setMostrarValores(true);
  }, [buscaContingenciaInterna, buscaInfoCidade, buscaPontoInteresse]);

  useEffect(() => {
    buscas();
  }, [buscas]);

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

  const postEnvioSMSGeral = async () => {
    setMostrarValores(false);
    try {
      let dados = [];

      for (let i of perfis) {
        const aux = {
          number: i.telefone,
          type: null,
          key: null,
          msg: mensagemSMS,
        };
        dados.push(aux);
      }

      await fetchPostEnviaSMS(dados);
      setMostrarValores(true);
    } catch (err) {
      console.log(err);
      setMostrarValores(true);
    }
  };

  const postPlanoAtivacao = async () => {
    setMostrarValores(false);
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
        pontoInteresse,
        perfis,
        recursos,
        planoContingencia.cidade
      );
      await fetchPostPlanoContingencia(plano);
      setMensagemComunicacao("Salvo com sucesso");
      setMostrarValores(true);
    } catch (err) {
      setMensagemComunicacao("Erro ao salvar plano");
      setMostrarValores(true);
      console.log(err);
    }
  };

  return (
    <Flex flexDir="column" alignItems="center" marginBlock="5rem" padding="0">
      {mostrarValores ? (
        <>
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
              mensagemSMS={mensagemSMS}
            />
            <Flex flexDir="column" flexGrow={1}>
              <TagsContingencia tags={planoContingencia.tags} />
              <Textarea
                as={ResizeTextarea}
                placeholder="Digite aqui a mensagem a ser enviada aos agentes."
                maxH="415px"
                value={mensagemSMS}
                onChange={(e) =>
                  e.target.value.length < 159
                    ? setMensagemSMS(e.target.value)
                    : ""
                }
              />
              <Text>{mensagemSMS.length}/158</Text>
            </Flex>
          </Flex>
          <TabelaRecursosContingencia
            recursos={recursos}
            setarRecursos={setarRecursos}
            planoRecursos={planoContingencia.recursos}
          />
          <MapaContingencia
            tipoPontoInteresse={tipoPontoInteresse}
            cidadeAtual={cidadeAtual}
            pontoInteresse={pontoInteresse}
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
            setCadastroNovoPontoInteresse={setCadastroNovoPontoInteresse}
            postPlanoAtivacao={postPlanoAtivacao}
            postEnvioSMSGeral={postEnvioSMSGeral}
          />

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

          {cadastroNovoPontoInteresse && (
            <Modal onOverlayClick={() => setCadastroNovoPontoInteresse(false)}>
              <FormCadastroPontoInteresse
                setCadastroNovoPontoInteresse={setCadastroNovoPontoInteresse}
                setarPontoInteresse={setarPontoInteresse}
                tipoPontoInteresse={tipoPontoInteresse}
                addPerfis={addPerfisRecurso}
                tipoCadastro="recurso"
              />
            </Modal>
          )}
        </>
      ) : (
        <Flex
          w={"100vw"}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner size="xl"></Spinner>
        </Flex>
      )}
      {mensagemComunicacao && mensagemComunicacao.length > 0 && (
        <Modal onOverlayClick={() => setMensagemComunicacao("")}>
          {mensagemComunicacao}
        </Modal>
      )}
    </Flex>
  );
};

export default ContingenciaInterna;
