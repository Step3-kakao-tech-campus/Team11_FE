import axios from "axios";
// import { getCookie, removeCookie } from "./Cookie";
import { refreshTokenInquire, removeToken } from "./login";
import { useSetRecoilState } from 'recoil';
import { isLoginInState } from '@/utils/AuthAtom';
// import { useEffect } from "react";

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
    if (status === 403) {
      //refreshtoken 요청
      console.log(status);
      const res = await refreshTokenInquire()
      if (res.status === 401) {
        const setisLoginIn = useSetRecoilState(isLoginInState);
        setisLoginIn(false);
      }
    }
    if(status === 401){
      // 로그인 만료
      // setisLoginIn(false);
      // removeToken()
      console.log('status', status);
      return Promise.resolve(error.response.data.error.message);
    }
    return Promise.reject(error.response);
  }
);
