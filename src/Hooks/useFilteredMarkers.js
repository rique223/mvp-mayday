export const useFilteredMarkers = (filtrosSelecionados, marcadores) => {
  let marcadoresFiltrados = [];

  const filtrosSelecionadosSemTudo = filtrosSelecionados.filter(
    (filtro) => filtro.titulo !== "Tudo"
  );

  const existemFiltrosSelecionados = Boolean(filtrosSelecionadosSemTudo.length);
  if (existemFiltrosSelecionados) {
    marcadoresFiltrados = marcadores;
    marcadoresFiltrados = marcadoresFiltrados.filter((marcador) =>
      filtrosSelecionados.includes(marcador.tipoPontoInteresse.descricao)
    );
  }

  return marcadoresFiltrados;
};
