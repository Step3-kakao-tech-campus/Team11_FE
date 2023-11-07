import axios from "axios";
import routes from "../routes";
import { removeCookie } from "./Cookie";

export const instance = axios.create({
  baseURL: "https://ke48313f43733a.user-app.krampoline.com/",
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      // config,
      response: { status },
    } = error;
    if (status === 403 || status === 500) {
      //refreshtoekn
    }
    if (status == 401) {
      alert("로그인 시간이 만료되었습니다. 다시 로그인해주세요");
      localStorage.clear();
      removeCookie("refreshToken")
      location.href = routes.login;
      return Promise.resolve(error.response.data.error.message);
    }
    return Promise.reject(error.response);
  }
);
