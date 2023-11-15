import axios from "axios";

const domain = "https://localhost:7075";
// const apiKey = "14efc224-34ec-4ccf-8c02-07ae1f0364c6";

const apiRequestTimeOut = 6000;

const api = axios.create({
  baseURL: domain + "/api/",
  // timeout: apiRequestTimeOut,
  headers: {
    Accept: "application/json",
  },
});
export default api;
