import axios from "axios";

const apiBuscaTodosDepartamentos = () => axios.create({
  baseURL: "http://localhost:8080/departamento/buscarTodos",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default apiBuscaTodosDepartamentos;
