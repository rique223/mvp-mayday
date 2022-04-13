import apiPostPlanoContingencia from "../Utils/apiPostPlanoContingencia";

const fetchPostPlanoContingencia = async (plano) => {
  try {
    const {data} = await apiPostPlanoContingencia.post("", plano);
    console.log("fetchPostPlanoContingencia", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPostPlanoContingencia;
