import { getCookie, removeCookie } from "@/services/Cookie";
import { refreshTokenInquire } from "@/services/login"
import { useRecoilState } from 'recoil';
import { isLoginInState } from '@/utils/AuthAtom';
import { useEffect } from "react";

const useLogin = ()=>{
  const [isLoginIn, setisLoginIn] = useRecoilState(isLoginInState);
  const accessToken = localStorage.getItem("token")
  const expiredTime = new Date(localStorage.getItem("expiredTime")) // accessToken 만료 시간
  const refreshExpiredTime = new Date(localStorage.getItem("refreshExpiredTime"))
  const currentTime = new Date()
  const isAccessToken = accessToken && accessToken !== "";
  console.log(accessToken)
  console.log(expiredTime)
  console.log(currentTime)
  console.log(expiredTime > currentTime)

  if(isAccessToken && expiredTime > currentTime) {
    console.log('h')
    setisLoginIn(true)
  }
  else if(isAccessToken && expiredTime < currentTime && refreshExpiredTime > currentTime) {
    console.log('hi')
    setisLoginIn(true)
    refreshTokenInquire()
  }
  else if(refreshExpiredTime < currentTime){
    console.log('hii')
    setisLoginIn(false)
  }

  return isLoginIn
}

export default useLogin