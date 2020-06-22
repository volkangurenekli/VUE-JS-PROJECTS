import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://vueaxiosblogg.firebaseio.com",
});
customAxios.defaults.headers.common["Authorization"] = "VGurenekli";
customAxios.defaults.headers.post["Content-Type"] =
  "application/volkangurenekli";

export default customAxios;
