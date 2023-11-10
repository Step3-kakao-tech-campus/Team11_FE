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
  return accessToken;
};

export const removeToken = () => {
  localStorage.clear();
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

export const refreshTokenInquire = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  await instance
    .post(`/api/auth/reissue`, { refreshToken: refreshToken })
    .then((res) => {
      console.log(res);
      console.log("리프렛시 토큰 재발급");
      return getToken(res);
    })
    .catch((err) => {
      removeToken();
      alert(err);
      console.log("리프레시 토큰 만료", err);
    });
};
