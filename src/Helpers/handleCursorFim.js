export const handleCursorFim = (ref) => {
  const fimDaDescricao = ref.current.value.length;

  ref.current.setSelectionRange(fimDaDescricao, fimDaDescricao);
};
