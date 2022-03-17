import axios from "axios";
import { baseURLMunicipios } from "./constants";

const apiDistritos = axios.create({
  baseURL: baseURLMunicipios,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default apiDistritos;
