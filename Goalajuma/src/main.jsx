import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import ScrollToTop from "./components/common/ScrollToTop";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </CookiesProvider>
=======
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
>>>>>>> 88d4b909e8e7257418b0faa81289d5fe03c029f8
  </React.StrictMode>
);
