import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../../App.scss";
import { useContext, useEffect, useState } from "react";
import fetchMunicipios from "../../Helpers/fetchMunicipios";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { Link } from "react-router-dom";
import { CidadesContext } from "../../Context/CidadesContext";

const HomeScreen = () => {
  const [municipios, setMunicipios] = useState([]);

  const [pickerItems, setPickerItems] = useState([]);

  const { cidades, setCidades } = useContext(CidadesContext);

  const handleCreateItem = (item) => {
    console.log("item", item);
    setPickerItems((curr) => [...curr, item]);
    setCidades((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    console.log(selectedItems);
    setCidades(selectedItems);
  };

  useEffect(() => {
    const getDistritos = async () => {
      const respMunicipios = await fetchMunicipios();
      setMunicipios(respMunicipios);
      setPickerItems(respMunicipios);
    };

    const localizar = () =>
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });

    localizar();
    getDistritos();
  }, []);

  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      alignItems="center"
      paddingBlockStart="12rem"
    >
      <Heading
        as="h1"
        fontSize="92px"
        fontWeight="100"
        color="rgba(0, 0, 0, 0.4)"
        textTransform="uppercase"
        marginBlockEnd="20px"
      >
        Mayday
      </Heading>
      <Flex maxW="584px" maxH="46px" height="100%" width="100%">
        {/* <Input
          borderRadius="24px 0 0 24px"
          placeholder="DIGITE O NOME DE UMA CIDADE GOIANA"
          size="lg"
          borderWidth="1px"
          borderColor="#5f6368"
          _hover={{
            bg: "#fff",
            boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
            borderColor: "rgba(223,225,229,0)",
          }}
        /> */}
        <Flex w={"100%"}>
          <CUIAutoComplete
            items={municipios}
            onCreateItem={handleCreateItem}
            placeholder="DIGITE O NOME DE UMA CIDADE GOIANA"
            // itemRenderer={customRender}
            // createItemRenderer={customCreateItemRender}
            onSelectedItemsChange={(changes) => {
              handleSelectedItemsChange(changes.selectedItems);
            }}
            disableCreateItem={true}
          />
        </Flex>
        <Link to="/modulos">
          <Button
            bg="#95AE23"
            height="48px"
            borderRadius="0 50px 50px 0"
            w="64px"
            _hover={{
              bg: "#007B2F",
              boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
            }}
            onClick={() => console.log("cidades", cidades)}
          >
            <SearchIcon w="24px" h="24px" color="white" marginInlineEnd="4px" />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
