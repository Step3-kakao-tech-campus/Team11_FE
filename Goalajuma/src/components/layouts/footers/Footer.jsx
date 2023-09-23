import { Link } from "react-router-dom"
import styled from "styled-components";

export const Footer = () => {
  return (
    <Nav>
      <Link to={"./"}>홈</Link>
      <Link to={""}>HOT 게시판</Link>
      <Link to={""}>투표 등록하기</Link>
      <Link to={""}>완료된 질문</Link>
      <Link to={""}>로그인/가입</Link>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 68px;
  background-color: #FFF;
  color: #000;
  font-size: 14px;
`;
