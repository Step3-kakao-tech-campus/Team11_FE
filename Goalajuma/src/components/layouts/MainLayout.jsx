import { MainHeader } from "./headers/MainHeader";
import { Footer } from "./footers/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <Content />
      <Footer></Footer>
    </div>
  );
};

const Content = styled(Outlet)`
  margin-top: 55px;
`;

export default MainLayout;
