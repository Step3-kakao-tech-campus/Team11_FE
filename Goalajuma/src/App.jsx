import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignupPage";
import routes from "./routes";
import MainPage from "./pages/main/MainPage";

import HotPage from "./pages/hot/HotPage";
import CompletePage from "./pages/complete/CompletePage";
import MyPage from "./pages/my/Mypage";
import MyQuestionPage from "./pages/my/MyQuestionPage";
import MyParticipatePage from "./pages/my/MyParticipatePage";
import UploadPage from "./pages/upload/UploadPage";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.login} element={<LoginPage />}></Route>
        <Route path={routes.signup} element={<SignUpPage />}></Route>
        <Route path={routes.home} element={<MainPage />}></Route>
        <Route path={routes.hot} element={<HotPage />}></Route>
        <Route path={routes.complete} element={<CompletePage />}></Route>
        <Route path={routes.mypage} element={<MyPage />}></Route>
        <Route path={routes.myquestion} element={<MyQuestionPage />}></Route>
        <Route path={routes.search} element={<SearchPage />}></Route>
        <Route
          path={routes.myparticipation}
          element={<MyParticipatePage />}
        ></Route>
        {/* 마이페이지는 로그인 한 회원만 접근 가능하게 하기 */}
        <Route
          path={routes.myparticipation}
          element={<MyParticipatePage />}
        ></Route>
        <Route path={routes.upload} element={<UploadPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
