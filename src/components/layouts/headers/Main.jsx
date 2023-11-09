// 메인페이지, 완료된 페이지 헤더 
import styled from "styled-components";
import { CategoryBox } from "./CategoryBox";
import SearchButton from "./SearchButton";
import { CompleteCategoryBox } from "./CompleteCategoryBox";
import PropTypes from "prop-types";


/**
 * 
 * @param {string} page 
 * @returns 
 */
const Main = ({page}) => {
  return (
    <Nav>
      { page ==="main" ? <CategoryBox/> : <CompleteCategoryBox/>}
      <SearchButton/>
    </Nav>
  );
}

Main.propTypes = {
  page : PropTypes.string.isRequired,
};

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
