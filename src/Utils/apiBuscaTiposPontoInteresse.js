import axios from "axios";
import { baseURLMunicipios } from "./constants";

const apiBuscaTiposPontoInteresse = () => axios.create({
  baseURL: `http://localhost:8080/tipoPontoInteresse/buscarTodos`,
});

export default apiBuscaTiposPontoInteresse;