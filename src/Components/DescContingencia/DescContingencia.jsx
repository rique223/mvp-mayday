import { Flex, Heading, Text } from "@chakra-ui/react";

const DescContingencia = () => (
  <Flex flexDir="column" marginBlockEnd="4rem">
    <Heading
      fontWeight="400"
      fontSize="2.25rem"
      lineHeight="2.625rem"
      marginBlockEnd="1rem"
    >
      Descrição
    </Heading>
    <Text fontWeight="300" fontSize="24px" lineHeight="33px" color="#000000">
      - Ocorrência de fatos pontuais podendo acontecer isoladas ou ao mesmo
      tempo. - A retirada emergencial das pessoas que estiverem nas áreas de
      risco ou afetada, nas classificações de risco Alto e Muito Alto, conforme
      levantamento prévio da prefeitura. - As vias urbanas e vicinais do
      município que poderão ser comprometidas pelos deslizamentos. - Os locais
      escolhidos como abrigo, escola municipais, terão as aulas paralisadas para
      acomodação da população que terá que ser retirada de suas residências. -
      Se houverem mais de 28 vítimas, será necessário apoio para transporte e
      recebimento delas em outras localidades para atendimento médico. -
      Necessidade de resposta especializada para o salvamento das vítimas em
      caso de soterramento.
    </Text>
  </Flex>
);

export default DescContingencia;
