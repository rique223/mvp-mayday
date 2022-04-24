import axios from "axios";

const apiBuscaTodosCargosByIdDepartamento = (idDepartamento) => axios.create({
  baseURL: "http://localhost:8080/cargo/buscarById?idDepartamento=" + idDepartamento,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default apiBuscaTodosCargosByIdDepartamento;
