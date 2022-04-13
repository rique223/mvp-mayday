import axios from "axios";

const apiPostPlanoContingencia = axios.create({
  baseURL: "http://localhost:8080/planoAtivacao/cadastrar",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default apiPostPlanoContingencia;
