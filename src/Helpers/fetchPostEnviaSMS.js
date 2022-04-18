import apiEnviaSMS from "../Utils/apiEnviaSMS";

const fetchPostEnviaSMS = async (sms) => {
  try {
    const { data } = await apiEnviaSMS().post("", sms);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPostEnviaSMS;
