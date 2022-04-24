import apiBuscaPessoaByCpf from "../Utils/apiBuscaPessoaByCpf";
import apiBuscaTiposPontoInteresse from "../Utils/apiBuscaTiposPontoInteresse";

const fetchBuscaTiposPontoInteresse = async () => {
  try {
    const { data } = await apiBuscaTiposPontoInteresse().get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchBuscaTiposPontoInteresse;
