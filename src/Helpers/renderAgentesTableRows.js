import { Td, Text, Tr } from "@chakra-ui/react";
import Agente from "../Components/Agente";
import BotoesAct from "../Components/BotoesAct";
import fetchPostEnviaSMS from "./fetchPostEnviaSMS";

export const renderAgentesTableRows = (perfis, mensagemSMS, setarPerfis) => {
  const PostEnvioSMSIndividual = async (perfil) => {
    try {
      await fetchPostEnviaSMS([
        {
          number: perfil.telefone,
          type: null,
          key: null,
          msg: mensagemSMS,
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const deletaAgente = (agente) => {
    setarPerfis(perfis.filter((agenteAtual) => agenteAtual.cpf !== agente.cpf));
  };

  return (
    perfis.length > 0 &&
    perfis.map((perfil) => (
      <Tr key={perfil.cpf}>
        <Td display='flex' flexDirection='row' alignItems='center'>
          <Agente dadosAgente={perfil} />
        </Td>
        <Td>
          <Text
            fontWeight='400'
            fontSize='1.5rem'
            lineHeight='21px'
            color='#303030'
          >
            {perfil.telefone}
          </Text>
        </Td>
        <Td>
          <BotoesAct
            PostEnvioSMSIndividual={() => PostEnvioSMSIndividual(perfil)}
            deletaAgente={() => deletaAgente(perfil)}
          />
        </Td>
      </Tr>
    ))
  );
};
