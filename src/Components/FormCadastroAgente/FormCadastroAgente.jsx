import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInputField,
  NumberInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { inputStyle } from "../../Utils/globalStyles";
import fetchBuscaPessoaByCpf from "../../Helpers/fetchBuscaPessoaByCpf";
import fetchApiBuscaTodosDepartamentos from "../../Helpers/fetchApiBuscaTodosDepartamentos";
import fetchApiBuscaTodosCargosByIdDepartamento from "../../Helpers/fetchApiBuscaTodosCargosByIdDepartamento";

const FormCadastroAgente = ({
  setCadastraNovoAgente,
  addPerfis,
  tipoCadastro,
}) => {
  const modalButtonStyle = {
    boxShadow: "md",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "400",
    fontSize: "1.5rem",
    lineHeight: "28px",
    transition: "filter .2s ease",
    _hover: {
      filter: "brightness(120%)",
    },
    _active: {
      filter: "brightness(120%)",
    },
  };

  const valorInicial = {
    cpf: "",
    nome: "",
    telefone: "",
    cargo: {
      id: null,
      descricao: "",
      departamento: {
        idDepartamento: null,
        descricao: "",
      },
    },
    cidade: null,
  };

  const [novaPessoa, setNovaPessoa] = useState(valorInicial);

  const [cpfJaExiste, setCpfJaExiste] = useState(false);

  const [listaDepartamentos, setListaDepartamentos] = useState([]);

  const [listaCargos, setListaCargos] = useState([]);

  const [auxIdCargo, setAuxIdCargo] = useState();

  const [recursoInfo, setRecursoInfo] = useState({
    descRecurso: "",
    quantidade: 0,
  });

  useEffect(() => {
    buscaListaDepartamentos();
  }, []);

  const verificaCpf = async () => {
    try {
      const resp = await fetchBuscaPessoaByCpf(novaPessoa.cpf);
      if (resp !== null) {
        setNovaPessoa(resp);
        setAuxIdCargo(resp.cargo.id);
        setCpfJaExiste(true);
        return;
      }
      setCpfJaExiste(false);
    } catch (err) {
      console.log(err);
    }
  };

  const resetar = () => {
    setCpfJaExiste(false);
    setNovaPessoa(valorInicial);
  };

  const setarCpf = (valor) => {
    let copiaPessoa = { ...novaPessoa };
    copiaPessoa.cpf = valor;
    setNovaPessoa(copiaPessoa);
  };

  const setarNome = (valor) => {
    let copiaPessoa = { ...novaPessoa };
    copiaPessoa.nome = valor;
    setNovaPessoa(copiaPessoa);
  };

  const setarTelefone = (valor) => {
    let copiaPessoa = { ...novaPessoa };
    copiaPessoa.telefone = valor;
    setNovaPessoa(copiaPessoa);
  };

  const setarNomeRecurso = (valor) => {
    let copiaRecurso = { ...recursoInfo };
    copiaRecurso.descRecurso = valor;
    setRecursoInfo(copiaRecurso);
  };

  const setarQtdRecurso = (valor) => {
    let copiaRecurso = { ...recursoInfo };
    copiaRecurso.quantidade = valor;
    setRecursoInfo(copiaRecurso);
  };

  const setarDepartamento = async (e) => {
    try {
      const resp = await fetchApiBuscaTodosCargosByIdDepartamento(
        e.target.value
      );
      setListaCargos(resp);
      setAuxIdCargo(e.target.value);
    } catch (error) {}
  };

  const buscaListaDepartamentos = async () => {
    try {
      const resp = await fetchApiBuscaTodosDepartamentos();
      setListaDepartamentos(resp);
    } catch (error) {}
  };

  function cadastrarAgente() {
    const cargoValor =
      listaCargos.find((f) => `${f.id}` === auxIdCargo) || novaPessoa.cargo;
    const valor = {
      cpf: novaPessoa.cpf,
      telefone: novaPessoa.telefone,
      nome: novaPessoa.nome,
      cargo: cargoValor,
      cidade: cargoValor.departamento.cidade,
    };
    addPerfis(valor);
    setCadastraNovoAgente(false);
  }

  function cadastrarRecursos() {
    const cargoValor =
      listaCargos.find((f) => `${f.id}` === auxIdCargo) || novaPessoa.cargo;
    const valor = {
      descRecurso: recursoInfo.descRecurso,
      quantidade: recursoInfo.quantidade,
      responsavel: {
        cpf: novaPessoa.cpf,
        telefone: novaPessoa.telefone,
        nome: novaPessoa.nome,
        cargo: cargoValor,
        cidade: cargoValor.departamento.cidade,
      },
    };
    addPerfis(valor);
    setCadastraNovoAgente(false);
  }

  return (
    <>
      <Heading
        fontWeight='400'
        fontSize='4.5rem'
        lineHeight='5.25rem'
        display='flex'
        alignSelf='center'
        marginBlockEnd='3rem'
        color='#000000'
        opacity='.4'
      >
        Novo {tipoCadastro}
      </Heading>
      <VStack spacing='2rem'>
        <FormControl>
          <FormLabel htmlFor='cpf'>CPF</FormLabel>
          {cpfJaExiste ? (
            <Flex direction={"row"} justifyContent={"space-between"}>
              <div>{novaPessoa.cpf}</div>
              <Button onClick={() => resetar()} color={"white"} bg={"green"}>
                pesquisar novamente
              </Button>
            </Flex>
          ) : (
            <Input
              id='cpf'
              type='number'
              maxLength={11}
              {...inputStyle}
              value={novaPessoa.cpf}
              onChange={(e) => setarCpf(e.target.value)}
              onBlur={() => verificaCpf()}
              placeholder='Escreva o CPF'
            />
          )}
        </FormControl>

        <HStack spacing='2rem' w='100%'>
          <FormControl>
            <FormLabel htmlFor='nome'>Nome</FormLabel>
            <Input
              id='nome'
              type='text'
              {...inputStyle}
              value={novaPessoa.nome}
              onChange={(e) => setarNome(e.target.value)}
              placeholder='Escreva seu nome'
            />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel htmlFor='instituicao'>Instituição</FormLabel>
          <Select
            id='instituicao'
            placeholder='Selecione uma instituição'
            onChange={(e) => setarDepartamento(e)}
            {...inputStyle}
          >
            {cpfJaExiste ? (
              <option selected value={novaPessoa.cargo.departamento.id}>
                {novaPessoa.cargo.departamento.descricao}
              </option>
            ) : (
              listaDepartamentos &&
              listaDepartamentos.map((d) => (
                <option value={d.id}>{d.descricao}</option>
              ))
            )}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='cargo'>Cargo</FormLabel>
          <Select id='cargo' placeholder='Selecione um cargo' {...inputStyle}>
            {cpfJaExiste ? (
              <option selected value='option1'>
                {novaPessoa.cargo.descricao}
              </option>
            ) : (
              listaCargos &&
              listaCargos.map((c) => (
                <option value={c.id}>{c.descricao}</option>
              ))
            )}
          </Select>
        </FormControl>

        {tipoCadastro === "recurso" && (
          <>
            <FormControl>
              <FormLabel htmlFor='nome'>Nome</FormLabel>
              <Input
                id='nome'
                type='text'
                {...inputStyle}
                value={recursoInfo.descRecurso}
                onChange={(e) => setarNomeRecurso(e.target.value)}
                placeholder='Escreva o nome do recurso'
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='quantidade_inicial'>
                Quantidade inicial
              </FormLabel>

              <NumberInput
                id='quantidade_inicial'
                placeholder='Insira a quantidade de recursos inicial'
                defaultValue={0}
                min={1}
                max={999}
                value={recursoInfo.quantidade}
                onChange={(e) => setarQtdRecurso(e)}
              >
                <NumberInputField {...inputStyle} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </>
        )}

        <FormControl>
          <FormLabel htmlFor='contato'>Principal contato</FormLabel>
          <Input
            id='contato'
            type='number'
            placeholder='Principal Contato'
            value={novaPessoa.telefone}
            onChange={(e) => setarTelefone(e.target.value)}
            {...inputStyle}
          />
          <FormHelperText>Exemplo: (62) 91234-5678</FormHelperText>
        </FormControl>
      </VStack>

      <HStack spacing='1rem' w='100%' justifyContent='flex-end'>
        <Button
          bg='#95AE23'
          onClick={() =>
            tipoCadastro === "recurso" ? cadastrarRecursos() : cadastrarAgente()
          }
          {...modalButtonStyle}
        >
          Salvar
        </Button>
        <Button
          bg='red'
          onClick={() => setCadastraNovoAgente(false)}
          {...modalButtonStyle}
        >
          Cancelar
        </Button>
      </HStack>
    </>
  );
};

export default FormCadastroAgente;
