import routes from "@/routes";
import { getCookie, removeCookie, setCookie } from "./Cookie";
import { instance } from "./index";

export const getToken = (res)=>{
  const accessToken = res.data.data.accessToken
  const accessExpiredTime = new Date(res.data.data.accessExpiredTime)
  const refreshToken = res.data.data.refreshToken
  const refreshExpiredTime = new Date (res.data.data.refreshExpiredTime)
  localStorage.setItem("token", accessToken)
  localStorage.setItem("expiredTime", accessExpiredTime)
  setCookie('refreshToken', refreshToken, refreshExpiredTime)
}

export const loginInquire = async (data) => {
  const {email, password} = data;
  
  const res = await instance.post(`/api/auth/login`, {
    email: email,
    password: password 
  })
  getToken(res)
  return res
};

export const refreshTokenInquire = async()=>{
  try{
    const res = await instance.post(`/api/auth/reissue`, null, {withCredentials: true})
    console.log(getCookie("refreshToken"))
    console.log(res.data.status)
    getToken(res)
    return res
  } catch(err){
    console.log('리프레시 토큰 요청 중 오류',err)
    console.log(err.status)
    return err
  }
}