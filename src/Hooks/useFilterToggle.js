import { useCallback } from "react";

export const useFilterToggle = (setData) => {
  const onChange = useCallback(
    (item) =>
      setData((prevFiltros) => {
        const novosFiltros = prevFiltros;

        const filtrosSemTudo = novosFiltros.filter(
          ({ descricao }) => descricao !== "Tudo"
        );
        const opcaoTudo = novosFiltros.find(
          ({ descricao }) => descricao === "Tudo"
        );
        const filtroClicado = novosFiltros.find(({ id }) => id === item.id);

        const clicouNoTudo = item.descricao === "Tudo";
        if (clicouNoTudo) {
          filtrosSemTudo.forEach((filtroAtual) => {
            filtroAtual.checked = !item.checked;
          });
        }

        if (filtroClicado) {
          filtroClicado.checked = !filtroClicado.checked;
        }

        const existemFiltrosDesmarcados =
          opcaoTudo &&
          filtrosSemTudo.some((filtroAtual) => filtroAtual.checked === false);
        if (existemFiltrosDesmarcados) {
          opcaoTudo.checked = false;
        }

        const naoExistemFiltrosDesmarcados =
          opcaoTudo &&
          filtrosSemTudo.every((filtroAtual) => filtroAtual.checked === true);
        if (naoExistemFiltrosDesmarcados) {
          opcaoTudo.checked = true;
        }

        return [...prevFiltros];
      }),
    [setData]
  );

  return onChange;
};
