import { Center, Checkbox, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { headingStyle } from "../../Utils/globalStyles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { filtrosDeMapa } from "../../Utils/filtros";
import { useFilterToggle } from "../../Hooks/useFilterToggle";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { pontosInteresse } from "../../Utils/pontosDeInteresse";
import { useFilteredMarkers } from "../../Hooks/useFilteredMarkers";
import { useLeafletIcons } from "../../Hooks/useLeafletIcons";

const MapaContingencia = ({ cidadeAtual }) => {
  const [filtros, setFiltros] = useState(filtrosDeMapa);

  const filtrosSelecionados = filtros
    .filter((filtro) => filtro.checked)
    .map((filtro) => filtro.titulo);

  const onColorSelect = useLeafletIcons();

  const onFilterToggle = useFilterToggle(setFiltros);

  const marcadoresFiltrados = useFilteredMarkers(
    filtrosSelecionados,
    pontosInteresse
  );

  const handleCentralizaCidadeAtual = async (mapInstance) => {
    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: cidadeAtual });

    mapInstance.setView({ lat: results[0].y, lng: results[0].x });
  };

  return (
    <Flex flexDir='column' marginBlockEnd='4rem' w='100%' alignItems='center'>
      <Heading
        {...headingStyle}
        paddingInlineStart='1rem'
        maxWidth='101rem'
        w='100%'
      >
        Mapa
      </Heading>
      <Center
        justifyContent='space-around'
        paddingInline='1rem'
        marginBlockEnd='1rem'
        maxW='101rem'
        w='100%'
      >
        {filtros.map((filtro) => (
          <Checkbox
            key={filtro.id}
            size='lg'
            isChecked={filtro.checked}
            onChange={() => onFilterToggle(filtro)}
          >
            {filtro.titulo}
          </Checkbox>
        ))}
      </Center>
      {cidadeAtual && (
        <MapContainer
          center={[0, 0]}
          zoom={13}
          style={{ height: "500px", width: "100%" }}
          scrollWheelZoom={false}
          whenCreated={handleCentralizaCidadeAtual}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {marcadoresFiltrados.length &&
            marcadoresFiltrados.map((marcador) => (
              <Marker
                key={marcador.id}
                position={[marcador.latitude, marcador.longitude]}
                icon={onColorSelect(marcador.tipoPontoInteresse.cor)}
              >
                <Popup>{marcador.mensagem}</Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </Flex>
  );
};

export default MapaContingencia;
