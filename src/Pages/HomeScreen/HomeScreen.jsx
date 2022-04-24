import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
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

  const [urlCidades, setUrlCidades] = useState("");

  const [mostrarTela, setMostrarTela] = useState(false);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setCidades((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    setCidades(selectedItems);
  };

  useEffect(() => {
    const setarUrlCidades = () => {
      let valorAux = "";
      for (let c in cidades) {
        valorAux += cidades[c].value;
        valorAux += c < cidades.length - 1 ? "+" : "";
      }
      setUrlCidades(valorAux);
    };

    setarUrlCidades();
  }, [cidades]);

  useEffect(() => {
    const getDistritos = async () => {
      try {
        const respMunicipios = await fetchMunicipios();
        setMunicipios(respMunicipios);
        setPickerItems(respMunicipios);
        setMostrarTela(true);
      } catch (err) {
        setMostrarTela(true);
        console.log(err);
      }
    };

    const localizar = () =>
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });

    localizar();
    getDistritos();
  }, []);

  const autoCompleteListStyle = {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    maxWidth: "584px",
    maxHeight: "300px",
    overflowY: "scroll",
    css: {
      "&::-webkit-scrollbar": {
        width: "10px",
        height: "50px",
        marginInlineEnd: "20px",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "10px",
        background: "#CCCCCC",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(0, 0, 0, .5)",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#000",
      },
    },
  };

  const autoCompleteInputStyle = {
    borderRadius: "25px",
    placeholder: "DIGITE O NOME DE UMA CIDADE GOIANA",
    size: "lg",
    borderWidth: "1px",
    borderColor: "#D0D0D0",
    _hover: {
      bg: "#fff",
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
      borderColor: "rgba(223,225,229,0)",
    },
  };

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
      <Flex
        flexDir="column"
        maxW="584px"
        maxH="46px"
        height="100%"
        width="100%"
      >
        {municipios && municipios.length > 0 && (
          <>
            <Box width="100%">
              <CUIAutoComplete
                items={municipios}
                onCreateItem={handleCreateItem}
                placeholder="DIGITE O NOME DE UMA CIDADE GOIANA"
                onSelectedItemsChange={(changes) => {
                  handleSelectedItemsChange(changes.selectedItems);
                }}
                disableCreateItem={true}
                hideToggleButton={true}
                listStyleProps={autoCompleteListStyle}
                inputStyleProps={autoCompleteInputStyle}
              />
            </Box>
            <Link to={"modulos/" + urlCidades}>
              <Button
                bg="#95AE23"
                height="48px"
                w="100%"
                _hover={{
                  bg: "#007B2F",
                  boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
                }}
              >
                <SearchIcon
                  w="24px"
                  h="24px"
                  color="white"
                  marginInlineEnd="4px"
                />
              </Button>
            </Link>
          </>
        )}
        {(!municipios || municipios.length == 0) && mostrarTela && (
          <div style={{ fontSize: "30px" }}>
            {" "}
            Não foi possível trazer a lista de cidades
          </div>
        )}
      </Flex>
      {(!municipios || municipios.length == 0) && !mostrarTela && (
        <Flex width={"100%"} height={"100%"} justifyContent={"center"}>
          <Spinner size="xl"></Spinner>
        </Flex>
      )}
    </Flex>
  );
};

export default HomeScreen;
