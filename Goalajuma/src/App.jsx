import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignupPage";
import routes from "./routes";
import { MainLayout } from "./components/layouts/MainLayout";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import HotPage from "./pages/hot/HotPage";
import CompletePage from "./pages/complete/CompletePage";

function App() {
  return (
    <>
      {" "}
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={routes.login} element={<LoginPage />}></Route>
          <Route path={routes.signup} element={<SignUpPage />}></Route>
          <Route element={<MainLayout />}>
            <Route path={routes.home} element={<MainPage />}></Route>
            <Route path={routes.hot} element={<HotPage />}></Route>
            <Route path={routes.complete} element={<CompletePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
