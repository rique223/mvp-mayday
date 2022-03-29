import { Stack, Button, Image } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import Play from "../../Media/play.svg";
import GreenPlus from "../../Media/green_plus.svg";
import ThreeDots from "../../Media/three_dots.svg";

const BotoesAct = ({ isPortal = false, setCadastraNovoAgente }) => {
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
    ReactDOM.createPortal(
      <Stack
        spacing="1.25rem"
        direction="row"
        justifyContent="end"
        position="fixed"
        right="1%"
        bottom="2rem"
      >
        <Button
          {...bigButtonStyle}
          background="#007B2F"
          _hover={{ background: "#95AE23" }}
        >
          <Image src={Play} boxSize="57px" />
        </Button>
        <Button
          {...bigButtonStyle}
          background="#FFFFFF"
          onClick={() => setCadastraNovoAgente(true)}
        >
          <Image src={GreenPlus} boxSize="38px" />
        </Button>
        <Button {...bigButtonStyle} background="#FFFFFF">
          <Image src={ThreeDots} boxSize="38px" />
        </Button>
      </Stack>,
      document.body
    )
  ) : (
    <>
      <Button
        {...smallButtonStyle}
        background="#007B2F"
        _hover={{ background: "#95AE23" }}
        marginInlineEnd="8px"
      >
        <Image src={Play} boxSize="32px" />
      </Button>
      <Button {...smallButtonStyle} background="#fff">
        <Image src={ThreeDots} boxSize="25px" />
      </Button>
    </>
  );
};
export default BotoesAct;
