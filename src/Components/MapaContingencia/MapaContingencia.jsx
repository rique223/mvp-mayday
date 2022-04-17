import { Center, Checkbox, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { headingStyle } from "../../Utils/globalStyles";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import { filtrosDeMapa } from "../../Utils/filtros";
import { useFilterToggle } from "../../Hooks/useFilterToggle";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { pontoInteresse } from "../../Utils/pontosDeInteresse";
import { useFilteredMarkers } from "../../Hooks/useFilteredMarkers";
import { useLeafletIcons } from "../../Hooks/useLeafletIcons";

const MapaContingencia = ({
  cidadeAtual,
  tipoPontoInteresse,
  pontoInteresse,
}) => {
  const [filtros, setFiltros] = useState([]);

  useEffect(() => {
    const setarFiltro = () => {
      let auxFiltro = [...filtros];
      auxFiltro.push({
        id: 0,
        descricao: "Tudo",
        checked: true,
      });
      if (tipoPontoInteresse && tipoPontoInteresse.length > 0) {
        tipoPontoInteresse.map((t) => {
          auxFiltro.push({
            id: t.id,
            descricao: t.descricao,
            checked: true,
          });
        });
      }
      console.log("auxFiltro42", auxFiltro);
      setFiltros(auxFiltro);
      setarFiltrosSelecionados(auxFiltro);
    };

    setarFiltro();
  }, [tipoPontoInteresse, tipoPontoInteresse.length]);

  const [filtrosSelecionados, setFiltrosSelecionados] = useState([]);

  const setarFiltrosSelecionados = (auxFiltro) => {
    console.log("auxFiltro45", auxFiltro);
    const filtroFilter = auxFiltro
      .filter((filtro) => filtro.checked)
      .map((filtro) => filtro.descricao);
    setFiltrosSelecionados(filtroFilter);
  };

  // useEffect(() => {
  //   setarFiltrosSelecionados();
  // }, [filtros]);

  const onColorSelect = useLeafletIcons();

  const onFilterToggle = useFilterToggle(setFiltros);

  const [marcadoresFiltrados, setMarcadoresFiltrados] = useState([]);

  useEffect(() => {
    const setarMarcadoresFiltrados = () => {
      console.log("pontoInteresse", pontoInteresse);
      // setarFiltrosSelecionados();
      let auxMarcadores = [...marcadoresFiltrados];
      const arrFiltro = valorFiltroMarkers;
      console.log("arrFiltro", arrFiltro);
      if (arrFiltro.length > 0) {
        auxMarcadores = auxMarcadores.concat(arrFiltro);
        console.log("auxMarcadores", auxMarcadores);
      }
      setMarcadoresFiltrados(auxMarcadores);
    };
    setarMarcadoresFiltrados();
  }, [pontoInteresse, pontoInteresse.length]);

  const valorFiltroMarkers = useFilteredMarkers(
    filtrosSelecionados,
    pontoInteresse
  );

  const handleCentralizaCidadeAtual = async (mapInstance) => {
    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: cidadeAtual });

    mapInstance.setView({ lat: results[0].y, lng: results[0].x });
  };

  return (
    <Flex flexDir="column" marginBlockEnd="4rem" w="100%" alignItems="center">
      <Heading
        {...headingStyle}
        paddingInlineStart="1rem"
        maxWidth="101rem"
        w="100%"
      >
        Mapa
      </Heading>
      <Center
        justifyContent="space-around"
        paddingInline="1rem"
        marginBlockEnd="1rem"
        maxW="101rem"
        w="100%"
      >
        {filtros.map((filtro) => (
          <Checkbox
            key={filtro.id}
            size="lg"
            isChecked={filtro.checked}
            onChange={() => onFilterToggle(filtro)}
          >
            {filtro.descricao}
          </Checkbox>
        ))}
      </Center>
      {cidadeAtual && (
        <MapContainer
          center={[0, 0]}
          zoom={13}
          style={{
            height: "500px",
            width: "100%",
          }}
          scrollWheelZoom={false}
          whenCreated={handleCentralizaCidadeAtual}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marcadoresFiltrados.length > 0 &&
            marcadoresFiltrados.map((marcador, i) => {
              console.log(marcadoresFiltrados);
              if (marcador) {
                return (
                  <Marker
                    key={marcador.id || i}
                    position={[
                      Number(marcador.latitude),
                      Number(marcador.longitude),
                    ]}
                    icon={onColorSelect(marcador.cor)}
                  >
                    <Popup>{marcador.mensagem}</Popup>
                  </Marker>
                );
              }
            })}
        </MapContainer>
      )}
    </Flex>
  );
};

export default MapaContingencia;
