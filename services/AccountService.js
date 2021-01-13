import axios from "axios";
// cookie
import cookie from "js-cookie";

class AccountService {
  accessToken;
  refreshToken;
  constructor() {}
  static async login(data) {
    return axios
      .post("/api/token/", data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static async logout() {
    cookie.remove("accessToken");
    cookie.remove("refreshToken");
    cookie.remove("user");
  }
  static setAccessToken(token) {
    cookie.set("accessToken", token);
  }
  static getAccessToken() {
    return cookie.get("accessToken");
  }
  static setRefreshToken(token) {
    cookie.set("refreshToken", token);
  }
  static getRefreshToken() {
    return cookie.get("refreshToken");
  }
  static setUserInfo(data) {
    cookie.set("user", JSON.stringify(data));
  }
  static getUserInfo() {
    if (cookie.get("user")) {
      return JSON.parse(cookie.get("user"));
    }
    return null;
  }
}

export default AccountService;
