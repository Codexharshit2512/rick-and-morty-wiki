import axios from "axios";
const apiConfig = {
  baseUrl: "https://rickandmortyapi.com/api/",
};

const instance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
