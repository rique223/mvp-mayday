import { Box, Flex, Portal } from "@chakra-ui/react";
import React from "react";
const Modal = ({ onOverlayClick, children }) => {
  return (
    <Portal>
      <Flex alignItems='center' justifyContent='center'>
        <Box
          bg='#000'
          opacity='0.5'
          w='100%'
          h='100vh'
          position='fixed'
          top='0px'
          background-color='black'
          onClick={() => onOverlayClick()}
          zIndex='9999'
        />
        <Flex
          flexDir='column'
          position='fixed'
          top='50%'
          transform='translateY(-50%)'
          borderRadius='25px'
          align
          bg='#ffffff'
          maxW='62rem'
          w='100%'
          h='auto'
          padding='2rem'
          zIndex='9999'
        >
          {children}
        </Flex>
      </Flex>
    </Portal>
  );
};

export default Modal;
