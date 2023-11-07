import { setCookie } from "./Cookie";
import { instance } from "./index";

const token = (res)=>{
  const accessToken = res.accessToken
  const accessExpiredTime = new Date(res.accessExpiredTime)
  const refreshToken = res.refreshToken
  const refreshExpiredTime = new Date (res.refreshExpiredTime)
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
  return token(res.data.data)
};

export const refreshTokenInquire = ()=>{
  try{
    const res = instance.post(`/api/auth/reissue`, null, {withCredentials: true})
    console.log(res)
    return token(res.data.data)
  } catch(err){
    console.log('리프레시 토큰 요청 중 오류',err)
  }
}