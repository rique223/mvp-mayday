import { Center, Checkbox, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { headingStyle } from "../../Utils/globalStyles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useFilterToggle } from "../../Hooks/useFilterToggle";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useFilteredMarkers } from "../../Hooks/useFilteredMarkers";
import { useLeafletIcons } from "../../Hooks/useLeafletIcons";

const MapaContingencia = ({
  cidadeAtual,
  tipoPontoInteresse,
  pontoInteresse,
}) => {
  const tiposMapeados = [
    {
      id: 0,
      descricao: "Tudo",
      checked: true,
    },
    ...tipoPontoInteresse.map((tipo) => {
      return {
        id: tipo.id,
        descricao: tipo.descricao,
        checked: true,
      };
    }),
  ];

  const [filtros, setFiltros] = useState(tiposMapeados);

  const filtrosSelecionados = filtros
    .filter((filtro) => filtro.checked)
    .map((filtro) => filtro.descricao);

  const marcadoresFiltrados = useFilteredMarkers(
    filtrosSelecionados,
    pontoInteresse
  );

  const onColorSelect = useLeafletIcons();

  const onFilterToggle = useFilterToggle(setFiltros);

  const handleCentralizaCidadeAtual = async (mapInstance) => {
    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: cidadeAtual.label });

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
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {marcadoresFiltrados.length > 0 &&
            marcadoresFiltrados.map((marcador, i) => {
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
            })}
        </MapContainer>
      )}
    </Flex>
  );
};

export default MapaContingencia;
