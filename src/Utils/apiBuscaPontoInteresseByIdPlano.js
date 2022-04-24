import axios from "axios";

const apiBuscaPontoInteresseByIdPlano = (idPlano) => axios.create({
  baseURL: "http://localhost:8080/pontoInteresse/buscarByIdPlano?idPlano=" + idPlano,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default apiBuscaPontoInteresseByIdPlano;
