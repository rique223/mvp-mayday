import axios from "axios";
import { baseURLMunicipios } from "./constants";

const apiEnviaSMS = () => axios.create({
  baseURL: `http://localhost:8080/enviarSMS`,
});

export default apiEnviaSMS;