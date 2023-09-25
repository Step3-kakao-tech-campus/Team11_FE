import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignupPage";
import routes from "./routes";
import { MainLayout } from "./components/layouts/MainLayout";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      {" "}
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={routes.login} element={<LoginPage />}></Route>
          <Route path={routes.signup} element={<SignUpPage />}></Route>
<<<<<<< HEAD
          <Route element={<MainLayout />}>
=======
          <Route element={<MainLayout/>}>
>>>>>>> 56df394aeaa4d3b88709f6722c2fc2a35c16b0c5
            <Route path={routes.home} element={<MainPage />}></Route>
            <Route path={routes.hot} element={<MainPage />}></Route>
            <Route path={routes.complete} element={<MainPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
