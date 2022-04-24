import axios from "axios";
import { baseURLMunicipios } from "./constants";

const apiBuscaPessoaByCpf = (cpf) => axios.create({
  baseURL: `http://localhost:8080/pessoa/buscarByCpf?cpf=${cpf}`,
});

export default apiBuscaPessoaByCpf;