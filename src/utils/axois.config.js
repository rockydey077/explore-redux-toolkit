import axios from "axios";

let URL;

switch (import.meta.env.VITE_REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "https://redux-sarver.vercel.app/";
    break;
  case "PRODUCTION":
    URL = "https://redux-toolkit.js.org/";
    break;
  default:
    URL = "https://redux-sarver.vercel.app/";
}

const baseAxois = axios.create({
  baseURL: URL,
});

export default baseAxois;
