import {
  Stack,
  Button,
  Image,
  Portal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import Play from "../../Media/play.svg";
import ThreeDots from "../../Media/three_dots.svg";
import { AddIcon } from "@chakra-ui/icons";

const BotoesAct = ({
  isPortal = false,
  setCadastraNovoAgente,
  setCadastraNovoRecurso,
}) => {
  const bigButtonStyle = {
    w: "114px",
    h: "114px",
    borderRadius: "57px",
    boxShadow: "lg",
  };

  const smallButtonStyle = {
    w: "50px",
    h: "50px",
    borderRadius: "50%",
    padding: "0",
    boxShadow: "md",
  };

  return isPortal ? (
    <Portal>
      <Stack
        spacing='1.25rem'
        direction='row'
        justifyContent='end'
        position='fixed'
        right='1%'
        bottom='2rem'
        zIndex='9999'
      >
        <Button
          {...bigButtonStyle}
          background='#007B2F'
          _hover={{ background: "#95AE23" }}
          _active={{
            filter: "brightness(120%)",
          }}
          transition='background .2s ease-in-out, filter .2s ease-in-out'
        >
          <Image src={Play} boxSize='57px' />
        </Button>
        <Menu placement='top'>
          <MenuButton
            as={IconButton}
            background='#fff'
            icon={<AddIcon w='2.375rem' h='2.375rem' color='#007B2F' />}
            aria-label='Options'
            variant='outline'
            {...bigButtonStyle}
          />
          <MenuList minW='auto' fontSize='1.5rem' zIndex={3}>
            <MenuItem onClick={() => setCadastraNovoAgente(true)}>
              Novo Agente
            </MenuItem>
            <MenuItem onClick={() => setCadastraNovoRecurso(true)}>
              Novo Recurso
            </MenuItem>
          </MenuList>
        </Menu>
        <Button {...bigButtonStyle} background='#FFFFFF'>
          <Image src={ThreeDots} boxSize='38px' />
        </Button>
      </Stack>
    </Portal>
  ) : (
    <>
      <Button
        {...smallButtonStyle}
        background='#007B2F'
        _hover={{ background: "#95AE23" }}
        marginInlineEnd='8px'
      >
        <Image src={Play} boxSize='32px' />
      </Button>
      <Button {...smallButtonStyle} background='#fff'>
        <Image src={ThreeDots} boxSize='25px' />
      </Button>
    </>
  );
};
export default BotoesAct;
