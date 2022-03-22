import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const InputTabela = () => (
  <InputGroup>
    <Input
      borderRadius="50px"
      borderColor="#ccc"
      shadow="lg"
      _hover={{ borderColor: "#000" }}
      transition="border-color .4s ease"
      h="3.125rem"
    />
    <InputRightElement
      top="10%"
      children={
        <Button
          marginInlineEnd="1.25rem"
          bg="transparent"
          _hover={{ background: "transparent" }}
        >
          <SearchIcon w="1.375rem" h="1.375rem" color="#000" cursor="pointer" />
        </Button>
      }
    />
  </InputGroup>
);

export default InputTabela;
