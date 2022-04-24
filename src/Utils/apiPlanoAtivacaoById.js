import axios from "axios";
import { baseURLMunicipios } from "./constants";

const apiPlanoById = (idPlano) => axios.create({
  baseURL: `http://localhost:8080/planoAtivacao/buscarById?idPlano=${idPlano}`,
});

export default apiPlanoById;