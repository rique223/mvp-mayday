import apiMunicipios from "../Utils/apiMunicipios";
import apiPlano from "../Utils/apiPlanoAtivacao";
import apiPlanoById from "../Utils/apiPlanoAtivacaoById";

const fetchPlanoAtivacaoById = async (idPlano) => {
  try {
    const {data} = await apiPlanoById(idPlano).get();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPlanoAtivacaoById;
