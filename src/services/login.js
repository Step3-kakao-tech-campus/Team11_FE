import routes from "@/routes";
import { removeCookie, setCookie } from "./Cookie";
import { instance } from "./index";

export const getToken = (res) => {
  const accessToken = res.data.data.accessToken;
  const accessExpiredTime = res.data.data.accessExpiredTime;
  const refreshToken = res.data.data.refreshToken;
  const refreshExpiredTime = res.data.data.refreshExpiredTime;
  localStorage.setItem("token", accessToken);
  localStorage.setItem("expiredTime", accessExpiredTime);
  localStorage.setItem("refreshExpiredTime", refreshExpiredTime);
  setCookie("refreshToken", refreshToken);
};
export const removeToken = () => {
  alert("로그인이 만료되었습니다! 다시 로그인 해주세요.");
  removeCookie("refreshToken");
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
  try {
    const res = await instance.post(`/api/auth/reissue`, null, {
      withCredentials: true,
    });
    console.log(res.data.status);
    if (res.status === 200) {
      getToken(res);
    }
    return res;
  } catch (err) {
    console.log("리프레시 토큰 요청 중 오류", err);
    if (err.response.status === 401) {
      console.log("here");
      // removeToken()
    }
    return err;
  }
};
