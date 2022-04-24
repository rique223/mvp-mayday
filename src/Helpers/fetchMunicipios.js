import apiMunicipios from "../Utils/apiMunicipios";

const fetchMunicipios = async () => {
  try {
    const { data } = await apiMunicipios.get();
    const municipiosMapeados = data.map((municipio) => {
      return {
        value: municipio.id,
        label: municipio.descricao,
      };
    });
    return municipiosMapeados;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMunicipios;
