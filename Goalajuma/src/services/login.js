import { setCookie } from "./Cookie";
import { instance } from "./index";

const token = (res)=>{
  const accessToken = res.data.data.accessToken
  const accessExpiredTime = res.data.data.accessExpiredTime
  const refreshToken = res.data.data.refreshToken
  const refreshExpiredTime = res.data.data.refreshExpiredTime
  localStorage.setItem("token", accessToken)
  setCookie('refreshToken', refreshToken, refreshExpiredTime)

  const Token = {access: accessToken, expiredTime:accessExpiredTime}
  return Token
}

export const loginInquire = async (data) => {
  const {email, password} = data;
  
  const res = await instance.post(`/api/auth/login`, {
    email: email,
    password: password 
  })
  return token(res)
};

export const refreshTokenInquire = ()=>{
  return instance.post(`/api/auth/reissue`)
}