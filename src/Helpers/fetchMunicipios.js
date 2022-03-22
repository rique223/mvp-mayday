import apiMunicipios from "../Utils/apiMunicipios";

const fetchMunicipios = async () => {
  try {
    const { data } = await apiMunicipios.get();
    const resp = data.map((a) => {
      return {
        value: a.id,
        label: a.nome
      }
    })
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMunicipios;
