import { IconButton, Stack, Button, Image, Icon } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import Play from "../../Media/play.svg";
import GreenPlus from "../../Media/green_plus.svg";
import ThreeDots from "../../Media/three_dots.svg";

const BotoesAct = ({ isPortal = false }) =>
  isPortal ? (
    ReactDOM.createPortal(
      <Stack
        spacing="1.25rem"
        direction="row"
        justifyContent="end"
        position="fixed"
        right="1%"
        bottom="2rem"
      >
        <IconButton
          w="114px"
          h="114px"
          borderRadius="57px"
          background="#007B2F"
          boxShadow="lg"
          _hover={{ background: "#95AE23" }}
        >
          <Image src={Play} boxSize="57px" />
        </IconButton>
        <Button
          w="114px"
          h="114px"
          borderRadius="57px"
          background="#FFFFFF"
          boxShadow="lg"
        >
          <Image src={GreenPlus} boxSize="38px" />
        </Button>
        <Button
          w="114px"
          h="114px"
          borderRadius="57px"
          background="#FFFFFF"
          boxShadow="lg"
        >
          <Image src={ThreeDots} boxSize="38px" />
        </Button>
      </Stack>,
      document.body
    )
  ) : (
    <>
      <Button
        marginInlineEnd="8px"
        w="50px"
        h="50px"
        background="#007B2F"
        borderRadius="50%"
        padding="0"
        _hover={{ background: "#95AE23" }}
        boxShadow="md"
      >
        <Image src={Play} boxSize="32px" />
      </Button>
      <Button
        w="50px"
        h="50px"
        background="#fff"
        borderRadius="50%"
        padding="0"
        boxShadow="md"
      >
        <Image src={ThreeDots} boxSize="25px" />
      </Button>
    </>
  );

export default BotoesAct;
