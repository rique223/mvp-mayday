import axios from "axios";
import { baseURLMunicipios } from "./constants";

const apiPlano = (idCidade) => axios.create({
  baseURL: "http://localhost:8080/planoAtivacao/buscarByIdCidade?idCidade=" + idCidade,
});

export default apiPlano;