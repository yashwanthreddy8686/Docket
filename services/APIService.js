import axios from "axios";
// cookie
import cookie from "js-cookie";

class APIService {
  accessToken;
  refreshToken;
  constructor() {}
  setAccessToken(token) {
    return cookie.set("accessToken", token);
  }
  getAccessToken() {
    return cookie.get("accessToken");
  }
  setRefreshToken(token) {
    return cookie.set("refreshToken", token);
  }
  getRefreshToken() {
    return cookie.get("refreshToken");
  }
  setUserInfo(data) {
    return cookie.set("user", JSON.stringify(data));
  }
  getUserInfo() {
    if (cookie.get("user")) {
      return JSON.parse(cookie.get("user"));
    }
  }
}

export default AccountService;
