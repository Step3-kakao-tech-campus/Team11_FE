import styled from "styled-components";
import { AiOutlineFire } from "react-icons/ai";
import { SearchButton } from "./SearchButton";

// 핫게 헤더
const HotPageHeader = () => {
  return (
    <Nav>
      <PageName>
        <AiOutlineFire fontSize={28}/>
        <Title>
          HOT 게시판
        </Title>
      </PageName>
      <SearchButton/>
    </Nav>
  )
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

const Title = styled.div`
  margin: 2px 0 0 5px;
`;
const PageName = styled.div`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  display:flex;
`;

export default HotPageHeader;