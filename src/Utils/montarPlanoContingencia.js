const montarPlanoContingencia = (idPlano, tituloOriginal, subTituloOriginal, 
    descricaoOriginal, comAlternativaOriginal, historicoOriginal, danosOriginal, tag, pontoInteresse, agentes, recursos, cidade) => {
    return {
      id: Number(idPlano),
      titulo: tituloOriginal,
      subtitulo: subTituloOriginal,
      descricao: descricaoOriginal,
      comunicacaoAlternativa:comAlternativaOriginal,
      historicoEventos: historicoOriginal,
      danos: danosOriginal,
      tags: tag,
      pontoInteresse: pontoInteresse,
      agentes: agentes,
      recursos: recursos,
      cidade
    }
}

export default montarPlanoContingencia;