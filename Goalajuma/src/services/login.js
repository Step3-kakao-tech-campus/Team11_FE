import { setCookie } from "./Cookie";
import { instance } from "./index";

export const loginInquire = async (data) => {
  const {email, password} = data;
  
  const res = await instance.post(`/api/auth/login`, {
    email: email,
    password: password 
  })
  const accessToken = res.data.accessToken
  const accessExpiredTime = res.data.accessExpiredTime
  const refreshToken = res.data.refreshToken
  const refreshExpiredTime = res.data.refreshExpiredTime
  localStorage.setItem("accessToken", accessToken)
  setCookie('refreshToken', refreshToken, refreshExpiredTime)
  
  const token = {access: accessToken, expiredTime:accessExpiredTime}
  return token
};

export const refreshTokenInquire = ()=>{
  return instance.post(`/api/auth/reissue`)
  //  refreshToken
  // const refreshToken = res.data.refreshToken
  // const refreshExpiredTime = res.data.refreshExpiredTime

  // setCookie('refreshToken', refreshToken, refreshExpiredTime)
}