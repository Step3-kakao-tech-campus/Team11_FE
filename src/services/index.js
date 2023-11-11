import axios from "axios";
// import { getCookie, removeCookie } from "./Cookie";
import { refreshTokenInquire, removeToken } from "./login";
import { useSetRecoilState } from "recoil";
import { isLoginInState } from "@/utils/AuthAtom";
// import { useEffect } from "react";

export const instance = axios.create({
  baseURL: "https://ke48313f43733a.user-app.krampoline.com/",
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredential: true
});

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  const expiredTime = localStorage.getItem("expiredTime"); // accessToken 만료 시간
  const refreshExpiredTime = localStorage.getItem("refreshExpiredTime");
  const currentTime = new Date();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  // console.log("hello");
  console.log(new Date(parseInt(expiredTime)));

  const expiredTimeData = new Date(parseInt(expiredTime));
  const refreshExpiredTimeData = new Date(parseInt(refreshExpiredTime));

  if (expiredTimeData < currentTime && refreshExpiredTimeData > currentTime) {
    try {
      const res = await refreshTokenInquire();
      console.log("refresh 요청");
      console.log(res);
      localStorage.setItem(
        "refreshExpiredTime",
        res.data.data.refreshExpiredTime
      );
      localStorage.setItem("refreshToken", res.data.data.refreshToken);
      config.headers["Authorization"] = `Bearer ${res.data.data.refreshToken}`;
      return;
    } catch (e) {
      console.log(e);
      removeToken();
      return config;
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
      // await refreshTokenInquire();
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
