import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
// import ScrollToTop from "./components/common/ScrollToTop";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          {/* <ScrollToTop /> */}
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>
);
