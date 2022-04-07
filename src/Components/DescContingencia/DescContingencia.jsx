import { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { headingStyle } from "../../Utils/globalStyles";
import Editavel from "../Editavel";

const DescContingencia = () => {
  const [descricao, setDescricao] = useState(
    "- Ocorrência de fatos pontuais podendo acontecer isoladas ou ao mesmo tempo. - A retirada emergencial das pessoas que estiverem nas áreas de risco ou afetada, nas classificações de risco Alto e Muito Alto, conforme levantamento prévio da prefeitura. - As vias urbanas e vicinais do município que poderão ser comprometidas pelos deslizamentos. - Os locais escolhidos como abrigo, escola municipais, terão as aulas paralisadas para acomodação da população que terá que ser retirada de suas residências. - Se houverem mais de 28 vítimas, será necessário apoio para transporte e recebimento delas em outras localidades para atendimento médico. - Necessidade de resposta especializada para o salvamento das vítimas em caso de soterramento."
  );
  const [descricaoOriginal, setDescricaoOriginal] = useState(
    "- Ocorrência de fatos pontuais podendo acontecer isoladas ou ao mesmo tempo. - A retirada emergencial das pessoas que estiverem nas áreas de risco ou afetada, nas classificações de risco Alto e Muito Alto, conforme levantamento prévio da prefeitura. - As vias urbanas e vicinais do município que poderão ser comprometidas pelos deslizamentos. - Os locais escolhidos como abrigo, escola municipais, terão as aulas paralisadas para acomodação da população que terá que ser retirada de suas residências. - Se houverem mais de 28 vítimas, será necessário apoio para transporte e recebimento delas em outras localidades para atendimento médico. - Necessidade de resposta especializada para o salvamento das vítimas em caso de soterramento."
  );

  const descriptionStyle = {
    fontWeight: "300",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    py: 2,
    px: 4,
  };

  return (
    <Flex
      flexDir='column'
      marginBlockEnd='4rem'
      paddingInline='1rem'
      maxW='101rem'
      w='100%'
    >
      <Heading {...headingStyle}>Descrição</Heading>
      <Editavel
        onSubmit={() => setDescricaoOriginal(descricao)}
        onCancel={() => setDescricao(descricaoOriginal)}
        onChange={(e) => setDescricao(e.target.value)}
        texto={descricao}
        estiloInput={descriptionStyle}
      />
    </Flex>
  );
};

export default DescContingencia;
