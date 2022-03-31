import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { inputStyle } from "Utils/globalStyles";

const InputTabela = () => (
  <InputGroup>
    <Input borderRadius="25px" {...inputStyle} h="3.125rem" />
    <InputRightElement
      zIndex={0}
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
