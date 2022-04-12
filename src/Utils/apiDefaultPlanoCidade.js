import axios from "axios";

const apiDefaultPlanoCidade = (idCidade) => axios.create({
  baseURL: "http://localhost:8080/planoAtivacao/cadastroDefault?idCidade=" + idCidade,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default apiDefaultPlanoCidade;
