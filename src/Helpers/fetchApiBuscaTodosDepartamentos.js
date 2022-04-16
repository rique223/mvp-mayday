import apiBuscaPessoaByCpf from "../Utils/apiBuscaPessoaByCpf";
import apiBuscaTodosDepartamentos from "../Utils/apiBuscaTodosDepartamentos";

const fetchApiBuscaTodosDepartamentos = async () => {
  try {
    const { data } = await apiBuscaTodosDepartamentos().get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiBuscaTodosDepartamentos;
