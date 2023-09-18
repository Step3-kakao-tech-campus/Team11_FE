import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignupPage";
import routes from "./routes";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.login} element={<LoginPage />}></Route>
          <Route path={routes.signup} element={<SignUpPage />}></Route>
          <Route path={routes.home} element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
