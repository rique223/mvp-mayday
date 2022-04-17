import apiBuscaPessoaByCpf from "../Utils/apiBuscaPessoaByCpf";
import apiBuscaPontoInteresseByIdPlano from "../Utils/apiBuscaPontoInteresseByIdPlano";

const fetchBuscaPontoInteresseByIdPlano = async (idPlano) => {
  try {
    const { data } = await apiBuscaPontoInteresseByIdPlano(idPlano).get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchBuscaPontoInteresseByIdPlano;
