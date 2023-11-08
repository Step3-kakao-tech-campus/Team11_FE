import axios from "axios";
import routes from "../routes";
import { getCookie, removeCookie } from "./Cookie";
import { refreshTokenInquire, token } from "./login";
import { useRecoilState } from 'recoil';
import { isLoginInState } from '@/utils/AuthAtom';
import { useEffect } from "react";
import useLogin from "@/hooks/useLogin";

export const instance = axios.create({
  baseURL: "https://ke48313f43733a.user-app.krampoline.com/",
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredential: true
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
    const [isLoginIn, setisLoginIn] = useRecoilState(isLoginInState);    
    if (status === 403) {
      //refreshtoken 요청
      console.log("status 403")
      console.log(getCookie("refreshToken"))
      const res = await refreshTokenInquire()
      if(res.status === 200){
        token(res)
      }
      else if (res.status === 401) {
        setisLoginIn(false);
        console.log(isLoginIn)
        console.log("리프만료")
        alert("로그인 시간이 만료되었습니다. 다시 로그인해주세요");
        localStorage.clear();
        removeCookie("refreshToken")
        location.href = routes.login;
      }
    }
    else if(status === 401){
      setisLoginIn(false);
      return Promise.resolve(error.response.data.error);
    }
    return Promise.reject(error.response);
  }
);
