const compararPlanoContingencia = (planoAntigo, planoNovo) => {
  delete planoAntigo.cidade;
  delete planoAntigo.tags;
  delete planoNovo.tags;

  return typeof planoAntigo === "object" && Object.keys(planoAntigo).length > 0
    ? Object.keys(planoAntigo).length === Object.keys(planoNovo).length &&
        Object.keys(planoAntigo).every((p) =>
          compararPlanoContingencia(planoAntigo[p], planoNovo[p])
        )
    : planoAntigo === planoNovo;
};
export default compararPlanoContingencia;
