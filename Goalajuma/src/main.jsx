import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import ScrollToTop from "./components/common/ScrollToTop";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </RecoilRoot>
  </React.StrictMode>
);
