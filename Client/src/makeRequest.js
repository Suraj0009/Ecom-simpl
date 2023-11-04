import axios from "axios";

const apiURL = import.meta.env.VITE_REACT_APP_API_URL;
const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;
export const makeRequest = axios.create({
    
  baseURL: apiURL,
  headers: {
    Authorization: "bearer " + apiToken,
  },
});
