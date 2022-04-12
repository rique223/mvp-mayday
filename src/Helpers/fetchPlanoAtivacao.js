import apiMunicipios from "../Utils/apiMunicipios";
import apiPlano from "../Utils/apiPlanoAtivacao";

const fetchPlanoAtivacao = async (idCidade) => {
  try {
    const {data} = await apiPlano(idCidade).get();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPlanoAtivacao;
