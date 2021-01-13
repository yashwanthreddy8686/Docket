import axios from "axios";
// constants
import { BASE_LOCAL, BASE_PROD } from "constants/endpoints";
// services
import AccountService from "services/AccountService";

if (process.env.APP_ENV === "production") {
  axios.defaults.baseURL = BASE_PROD;
} else {
  axios.defaults.baseURL = BASE_LOCAL;
}

export function setAxiosHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
}

export const getAxiosHeader = () => {
  return axios.defaults.headers.common["Authorization"];
};

(function () {
  const token = AccountService.getAccessToken();
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = "";
  }
})();
