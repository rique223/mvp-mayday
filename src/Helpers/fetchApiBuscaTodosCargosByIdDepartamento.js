import apiBuscaPessoaByCpf from "../Utils/apiBuscaPessoaByCpf";
import apiBuscaTodosCargosByIdDepartamento from "../Utils/apiBuscaTodosCargosByIdDepartamento";

const fetchApiBuscaTodosCargosByIdDepartamento = async (idDepartamento) => {
  try {
    const { data } = await apiBuscaTodosCargosByIdDepartamento(idDepartamento).get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiBuscaTodosCargosByIdDepartamento;
