import { Container, Flex, Text } from "@chakra-ui/react";

const AutoComplete = () => {
  return (
    <Container display="flex" flexDir="column">
      <Flex
        flexDir="row"
        borderTop="1px solid rgba(0, 0, 0, .25)"
        borderBottom="1px solid rgba(0, 0, 0, .25)"
        paddingBlock="17px"
      >
        <Text fontWeight="300" fontSize="35px" color="#000000">
          Goiânia
        </Text>
        <Text fontWeight="300" fontSize="24px" color="rgba(0, 0, 0, 0.5)">
          0.7km
        </Text>
      </Flex>
    </Container>
  );
};

export default AutoComplete;
