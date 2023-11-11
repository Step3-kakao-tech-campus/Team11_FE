import { refreshTokenInquire, removeToken } from "@/services/login";
import { useRecoilState } from "recoil";
import { isLoginInState } from "@/utils/AuthAtom";

const useLogin = () => {
  const [isLoginIn, setisLoginIn] = useRecoilState(isLoginInState);

  const accessToken = localStorage.getItem("token");
  const expiredTime = new Date(parseInt(localStorage.getItem("expiredTime"))); // accessToken 만료 시간
  const refreshExpiredTime = new Date(
    parseInt(localStorage.getItem("refreshExpiredTime"))
  );
  const currentTime = new Date();
  const isAccessToken = accessToken && accessToken !== "";

  if (isAccessToken && expiredTime > currentTime) {
    setisLoginIn(true);
  } else if (
    isAccessToken &&
    expiredTime < currentTime &&
    refreshExpiredTime > currentTime
  ) {
    setisLoginIn(true);
    refreshTokenInquire();
  } else if (refreshExpiredTime < currentTime) {
    setisLoginIn(false);
    removeToken();
  }

  return isLoginIn;
};

export default useLogin;
