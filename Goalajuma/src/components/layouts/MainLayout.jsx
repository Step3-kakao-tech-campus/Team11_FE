import MainHeader from "./headers/MainHeader";
import { Footer } from "./footers/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

/**
 * 
 * @param {string} page 
 * @return {JSX.Element}
 */
const MainLayout = ({page}) => {
  return (
    <div>
      <MainHeader page={page}></MainHeader>
      <Content />
      <Footer page={page}></Footer>
    </div>
  );
};

const Content = styled(Outlet)`
  margin-top: 55px;
`;

export default MainLayout;
