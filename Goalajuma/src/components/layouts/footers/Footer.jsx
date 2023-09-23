import { Link } from "react-router-dom"
import styled from "styled-components";
import {
  Home,
  HomeOutlined,
  LocalFireDepartment,
  LocalFireDepartmentOutlined, 
  BorderColorOutlined, 
  CheckBoxOutlined, 
  CheckBox, 
  AccountBoxOutlined
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <Nav>
      <LinkBox>
        <LinkNav to={"./"}>
          <Home style={{fontSize: 35}}/> 홈
        </LinkNav>
        <LinkNav to={"./"}>
          <LocalFireDepartmentOutlined style={{fontSize: 35}}/>HOT 게시판
        </LinkNav>
        <LinkNav to={""}>
          <BorderColorOutlined style={{fontSize: 35}}/>투표 등록하기
        </LinkNav>
        <LinkNav to={"./"} >
          <CheckBoxOutlined style={{fontSize: 35}}/>완료된 질문
        </LinkNav>
        <LinkNav to={"./login"}>
          <AccountBoxOutlined style={{fontSize: 35}}/>로그인/가입
        </LinkNav>
      </LinkBox>
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
  font-size: 13px;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-child(1){
    margin-left: 15px;
  }
  &:nth-child(n){
    margin-right: 15px;
  }
`;

const LinkNav = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7px;
  margin-bottom: 7px;
  color: #7192FF;
`;

