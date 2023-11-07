import { getCookie } from "@/services/Cookie";
import { refreshTokenInquire } from "@/services/login"
import { useRecoilState } from 'recoil';
import { isLoginInState } from '@/utils/AuthAtom';

const useLogin = ()=>{
  const [isLoginIn, setisLoginIn] = useRecoilState(isLoginInState);
  const accessToken = localStorage.getItem("token")
  const expiredTime = localStorage.getItem("expiredTime") // accessToken 만료 시간
  const refreshTokenExpiredTime = getCookie("refreshTokenExpiredTime")
  const currentTime = Math.floor(Date.now() / 1000)
  const isAccessToken = accessToken && accessToken !== "";

  if(isAccessToken && expiredTime > currentTime) {
    setisLoginIn(true)
  }
  else if(isAccessToken && expiredTime < currentTime && refreshTokenExpiredTime > currentTime) {
    refreshTokenInquire()
  }
  else if(refreshTokenExpiredTime < currentTime){
    setisLoginIn(false)
  }

  return isLoginIn
}

export default useLogin