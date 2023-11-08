import { getCookie, removeCookie } from "@/services/Cookie";
import { refreshTokenInquire } from "@/services/login"
import { useRecoilState } from 'recoil';
import { isLoginInState } from '@/utils/AuthAtom';
import { useEffect } from "react";

const useLogin = ()=>{
  console.log('dd')
  const [isLoginIn, setisLoginIn] = useRecoilState(isLoginInState);
  const accessToken = localStorage.getItem("token")
  const expiredTime = localStorage.getItem("expiredTime") // accessToken 만료 시간
  const refreshTokenExpiredTime = getCookie("refreshTokenExpiredTime")
  const currentTime = Math.floor(Date.now() / 1000)
  const isAccessToken = accessToken && accessToken !== "";
  console.log(accessToken)
  console.log(expiredTime)
  console.log(refreshTokenExpiredTime)
  console.log(isAccessToken)

  if(isAccessToken && expiredTime > currentTime) {
    console.log('h')
    setisLoginIn(true)
  }
  else if(isAccessToken && expiredTime < currentTime && refreshTokenExpiredTime > currentTime) {
    console.log('hi')
    setisLoginIn(true)
    refreshTokenInquire()
  }
  else if(refreshTokenExpiredTime < currentTime){
    console.log('hii')
    setisLoginIn(false)
  }

  return isLoginIn
}

export default useLogin