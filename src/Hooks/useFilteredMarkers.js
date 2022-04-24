export const useFilteredMarkers = (filtrosSelecionados, marcadores) => {
  let marcadoresFiltrados = [];

  const filtrosSelecionadosSemTudo = filtrosSelecionados.filter(
    (filtro) => filtro.descricao !== "Tudo"
  );

  const existemFiltrosSelecionados = Boolean(filtrosSelecionadosSemTudo.length);
  const existemMarcadores = Boolean(marcadores.length);
  if (existemFiltrosSelecionados && existemMarcadores) {
    marcadoresFiltrados = marcadores;
    if (marcadoresFiltrados.length > 0) {
      marcadoresFiltrados = marcadoresFiltrados.filter((marcador) =>
        filtrosSelecionados.includes(marcador.tipoPontoInteresse.descricao)
      );
    }
  }

  if (
    typeof marcadoresFiltrados === "object" &&
    !Array.isArray(marcadoresFiltrados) &&
    marcadoresFiltrados !== null
  ) {
    marcadoresFiltrados = [marcadoresFiltrados];
  }

  return marcadoresFiltrados;
};
