import routes from "@/routes";
import { loginInstance,instance } from "./index";
import { getCookie, removeCookie, setCookie } from "./Cookie";

export const getToken = (res) => {
  const accessToken = res.data.data.accessToken;
  const accessExpiredTime = res.data.data.accessExpiredTime;
  const refreshToken = res.data.data.refreshToken;
  const refreshExpiredTime = res.data.data.refreshExpiredTime;
  localStorage.setItem("token", accessToken);
  localStorage.setItem("expiredTime", accessExpiredTime);
  localStorage.setItem("refreshExpiredTime", refreshExpiredTime);
  setCookie("refreshToken", refreshToken, refreshExpiredTime);
  return accessToken;
};

export const removeToken = () => {
  localStorage.clear();
  removeCookie("refreshToken");
  location.href = routes.login;
  console.log("remove");
};

export const loginInquire = async (data) => {
  const { email, password } = data;

  const res = await instance.post(`/api/auth/login`, {
    email: email,
    password: password,
  });
  if (res.status === 200) {
    getToken(res);
  }
  return res;
};


export const refreshTokenInquire = async()=>{
  try{
    console.log(getCookie("refreshToken"))
    const res = await loginInstance.post(`/api/auth/reissue`, null, {withCredentials: true})
    console.log(res)
    return getToken(res)
  } catch(err){
    console.log('리프레시 토큰 요청 중 오류',err)
    alert("로그인이 만료되었습니다! 다시 로그인 해주세요.");
    removeToken()
  }
}