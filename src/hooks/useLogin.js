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
    console.log("엑세스 만료 전");
    setisLoginIn(true);
  } else if (
    isAccessToken &&
    expiredTime < currentTime &&
    refreshExpiredTime > currentTime
  ) {
    console.log("리프요청 해야함");
    setisLoginIn(true);
    refreshTokenInquire();
  } else if (refreshExpiredTime < currentTime) {
    console.log(refreshExpiredTime);
    console.log(currentTime);
    console.log("리프도 만료됨");
    setisLoginIn(false);
    removeToken();
    // alert("로그인이 만료되었습니다! 다시 로그인 해주세요.");
  }

  return isLoginIn;
};

export default useLogin;
