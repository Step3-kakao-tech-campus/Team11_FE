import { setCookie } from "./Cookie";
import { instance } from "./index";

const token = (res)=>{
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
  console.log(res)
  return token(res)
};

export const refreshTokenInquire = async()=>{
  try{
    const res = await instance.post(`/api/auth/reissue`, null, {withCredentials: true})
    console.log(res)
    return token(res)
  } catch(err){
    console.log('리프레시 토큰 요청 중 오류',err)
  }
}