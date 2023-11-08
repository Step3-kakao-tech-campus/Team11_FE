import axios from "axios";
import routes from "../routes";
import { removeCookie } from "./Cookie";
import { refreshTokenInquire } from "./login";
import { useRecoilState } from 'recoil';
import { isLoginInState } from '@/utils/AuthAtom';
import { useEffect } from "react";
import useLogin from "@/hooks/useLogin";

export const instance = axios.create({
  baseURL: "https://ke48313f43733a.user-app.krampoline.com/",
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  }
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
  async (error) => {
    const {
      response: { status },
    } = error;
    if (status === 403) {
      //refreshtoken 요청
      console.log("status 403")
      try{
        await refreshTokenInquire();
      } catch(err){
        console.log("error refreshing",err)
      }
    }
    if (status === 401) {
      const [isLoginIn, setisLoginIn] = useRecoilState(isLoginInState);
      setisLoginIn(false);
      console.log(isLoginIn)
      console.log("리프만료")
      alert("로그인 시간이 만료되었습니다. 다시 로그인해주세요");
      localStorage.clear();
      removeCookie("refreshToken")
      location.href = routes.login;
      return Promise.resolve(error.response.data.error.message);
    }
    return Promise.reject(error.response);
  }
);
