import { Button, Image } from "@chakra-ui/react";
import Play from "../../Media/play.svg";
import ThreeDots from "../../Media/three_dots.svg";

const BotoesAct = () => (
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
