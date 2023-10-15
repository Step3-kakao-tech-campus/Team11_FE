// 메인페이지, 완료된 페이지 헤더 
import styled from "styled-components";
import { CategoryBox } from "./CategoryBox";
import SearchButton from "./SearchButton";

const Main = () => {
  return (
    <Nav>
      <CategoryBox/>
      <SearchButton/>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 55px;
  position: fixed;
  top: 0px;
  width: 390px;
  background-color: #FFF;
  color: #000;
  display: flex;
  align-items: center;
  z-index: 500;

`;

export default Main;
