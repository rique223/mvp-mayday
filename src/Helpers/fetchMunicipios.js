import apiMunicipios from "../Utils/apiMunicipios";

const fetchMunicipios = async () => {
  try {
    const { data } = await apiMunicipios.get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMunicipios;
