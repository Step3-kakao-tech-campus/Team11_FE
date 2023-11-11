import axios from "axios";
// import { getCookie, removeCookie } from "./Cookie";
import { refreshTokenInquire, removeToken } from "./login";
import { useSetRecoilState } from "recoil";
import { isLoginInState } from "@/utils/AuthAtom";
import { getCookie } from "./Cookie";
// import { useEffect } from "react";

const token = localStorage.getItem("token");
export const instance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_DOMAIN,
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_DOMAIN,
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  },
});

loginInstance.interceptors.request.use((config) => {
  const refreshToken = getCookie("refreshToken");
  console.log("loginInstance");
  if (refreshToken) {
    console.log(`Bearer ${refreshToken}`)
    config.headers["Cookie"] = `Bearer ${refreshToken}`;
  }
  return config;
});

instance.interceptors.request.use(async (config) => {
  const expiredTime = new Date(localStorage.getItem("expiredTime")); // accessToken 만료 시간
  const refreshExpiredTime = new Date(
    localStorage.getItem("refreshExpiredTime")
  );
  const currentTime = new Date();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  // localStorage.clear()
  console.log("hello");
  console.log(expiredTime);

  if (expiredTime < currentTime && refreshExpiredTime > currentTime) {
    try {
      const res = await refreshTokenInquire();
      console.log("refresh 요청");
      console.log(res);
      return;
    } catch (e) {
      console.log(e);
      removeToken();
      return Promise.reject(e);
    }
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      response: { status },
    } = error;
    if (status === 403) {
      //refreshtoken 요청
      console.log("status", status);
      await refreshTokenInquire();
    }
    if (status === 401) {
      // 리프레시 토큰 만료
      const setisLoginIn = useSetRecoilState(isLoginInState);
      setisLoginIn(false);
      removeToken();
      alert("로그인이 만료되었습니다! 다시 로그인 해주세요.");
      console.log("status", status);
      return Promise.resolve(error.response.data.error.message);
    }
    return Promise.reject(error.response);
  }
);
