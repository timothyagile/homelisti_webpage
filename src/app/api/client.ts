import axios from "axios";

const domain = "https://homlisti.tpblog.net";
const apiKey = "14efc224-34ec-4ccf-8c02-07ae1f0364c6";

const apiRequestTimeOut = 6000;

const api = axios.create({
  baseURL: domain + "/wp-json/rtcl/v1/",
  timeout: apiRequestTimeOut,
  headers: {
    Accept: "application/json",
    "X-API-KEY": apiKey,
  },
});
export default api;
