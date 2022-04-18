import apiEnviaSMS from "../Utils/apiEnviaSMS";

const fetchPostEnviaSMS = async (plano) => {
  try {
    const {data} = await apiEnviaSMS().post("", plano);
    console.log("fetchPostEnviaSMS", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPostEnviaSMS;
