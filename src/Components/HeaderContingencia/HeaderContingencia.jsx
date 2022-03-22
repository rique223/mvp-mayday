import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import ProfilePic from "../../Media/ProfilePic.svg";

const HeaderContingencia = () => (
  <Flex flexDir="row" alignItems="center" marginBlockEnd="4rem">
    <Image
      borderRadius="full"
      boxSize="190px"
      src={ProfilePic}
      alt="Foto de perfil da contingência"
      marginInlineEnd="28px"
      fallbackSrc
    />
    <Flex flexDir="column">
      <Heading
        as="h1"
        fontWeight="400"
        fontSize="64px"
        lineHeight="75px"
        color="#000000"
      >
        Incêndio/Bombeiros
      </Heading>
      <Text fontWeight="300" fontSize="36px" lineHeight="42px" color="#808080">
        Corpo de Bombeiros do Estado de Goiás
      </Text>
    </Flex>
  </Flex>
);

export default HeaderContingencia;
