import apiDefaultPlanoCidade from "../Utils/apiDefaultPlanoCidade";
import apiMunicipios from "../Utils/apiMunicipios";

const fetchDefaultPlanoCidade = async (idCidade) => {
  try {
    const { data } = await apiDefaultPlanoCidade(idCidade).get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDefaultPlanoCidade;
