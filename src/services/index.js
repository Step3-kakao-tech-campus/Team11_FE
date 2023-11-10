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
  const expiredTime = new Date(localStorage.getItem("expiredTime")); // accessToken 만료 시간
  const refreshExpiredTime = new Date(localStorage.getItem("refreshExpiredTime"));
  const currentTime = new Date();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  console.log('hello')
  if(expiredTime < currentTime && refreshExpiredTime > currentTime){
    try{ 
      console.log('refresh 요청')
      const res = await refreshTokenInquire()
      console.log(res)
      config.headers["Authorization"] = `Bearer ${res}`
    }
    catch(e){
      console.log(e)
      removeToken()
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
      console.log('status',status);
      await refreshTokenInquire();
    }
    if (status === 401) {
      // 리프레시 토큰 만료 
      const setisLoginIn = useSetRecoilState(isLoginInState)
      setisLoginIn(false);
      removeToken()
      alert("로그인이 만료되었습니다! 다시 로그인 해주세요.");
      console.log("status", status);
      return Promise.resolve(error.response.data.error.message);
    }
    return Promise.reject(error.response);
  }
);
