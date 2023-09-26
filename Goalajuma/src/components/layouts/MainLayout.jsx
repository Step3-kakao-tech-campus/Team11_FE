import { Header } from "./headers/Header";
import { Footer } from "./footers/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Content/>
      <Footer></Footer>
    </div>
  )
}

const Content = styled(Outlet)`
  margin-top: 55px;
`;
