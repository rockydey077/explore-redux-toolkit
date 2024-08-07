import axios from "axios";

let URL;

switch (import.meta.env.VITE_REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "http://localhost:5000/";
    break;
  case "PRODUCTION":
    URL = "https://redux-toolkit.js.org/";
    break;
  default:
    URL = "http://localhost:5000/";
}

const baseAxois = axios.create({
  baseURL: URL,
});

export default baseAxois;
