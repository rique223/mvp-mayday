import axios from "axios";
import { baseURLMunicipios } from "./constants";

const apiPlano = axios.create({
  baseURL: "http://localhost:8080/planoAtivacao/buscarResumoPlano",
});

export default apiPlano;