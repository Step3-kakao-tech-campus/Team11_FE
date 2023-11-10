import routes from "@/routes";
import { instance } from "./index";

export const getToken = (res) => {
  const accessToken = res.data.data.accessToken;
  const accessExpiredTime = res.data.data.accessExpiredTime;
  const refreshToken = res.data.data.refreshToken;
  const refreshExpiredTime = res.data.data.refreshExpiredTime;
  localStorage.setItem("token", accessToken);
  localStorage.setItem("expiredTime", accessExpiredTime);
  localStorage.setItem("refreshExpiredTime", refreshExpiredTime);
  localStorage.setItem("refreshToken", refreshToken);
};

export const removeToken = () => {
  alert("로그인이 만료되었습니다! 다시 로그인 해주세요.");
  localStorage.clear();
  location.href = routes.login;
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

export const refreshTokenInquire = async () => {
  const refreshToken = localStorage.getItem('refreshToken')
  await instance.post(`/api/auth/reissue`,{refreshToken})
  .then((res)=>{
    getToken(res)
    console.log(res)
  })
  .catch((err)=>{
    removeToken()
    console.log("리프레시 토큰 만료", err)
  })
};
