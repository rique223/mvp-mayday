import apiBuscaPessoaByCpf from "../Utils/apiBuscaPessoaByCpf";

const fetchBuscaPessoaByCpf = async (cpf) => {
  try {
    const { data } = await apiBuscaPessoaByCpf(cpf).get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchBuscaPessoaByCpf;
