import styled from "styled-components";
import { CategoryBox } from "./headers/CategoryBox";
import { SearchButton } from "./headers/SearchButton";

/**
 * 
 * @param {string} key
 * @return {JSX.Element}
 */
const Main = ({key}) => {
  return (
    <Nav>
      <CategoryBox/>
      <SearchButton key={key}/>
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
