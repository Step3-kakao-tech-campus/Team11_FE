import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import routes from "../../../routes";
import {GoHome, GoHomeFill, GoPlusCircle } from 'react-icons/go';
import {AiOutlineFire, AiFillFire} from 'react-icons/ai';
import {BsClipboardCheck, BsClipboardCheckFill, BsPerson} from 'react-icons/bs';


export const Footer = () => { // state를 페이지 명으로 해서 관리하는 것이 더 좋을 수도.. 시간 될 때 수정하자!!
  const [page, setPage] = useState([true, false, false]); // home, hot, complete 
  const handlePage = (index) => {
    if (page[index] === true) {
      console.log();
    }
    const newPage = page.map((item, i) => i === index);
    setPage(newPage);
  };

  return (
    <Nav>
      <LinkBox>
        <LinkNav to={routes.home}>
          <div onClick={() => handlePage(0)}>
            {page[0] ? <GoHomeFill fontSize={28}/> : <GoHome fontSize={28} />}
          </div>
          <div>홈</div>
        </LinkNav>
        <LinkNav to={routes.hot}>
          <div onClick={() => handlePage(1)}>
            { page[1] ? <AiFillFire fontSize={28}/> : <AiOutlineFire fontSize={28}/>}
          </div>
          <div>HOT</div>
        </LinkNav>
        <LinkNav to={""}>
          <div>
            <GoPlusCircle fontSize={40}/>
          </div>
        </LinkNav>
        <LinkNav to={routes.complete} >
          <div onClick={() => handlePage(2)}>
            { page[2] ? <BsClipboardCheckFill fontSize={28}/> : <BsClipboardCheck fontSize={28} /> }
          </div>
          <div>완료</div>
        </LinkNav>
        <LinkNav to={routes.login}>
          <div>
            <BsPerson fontSize={28}/>
          </div>
          <div>로그인</div>
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
  font-size: 12px;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px ;
`;

const LinkNav = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 11px 0;
  color: #7192FF;
  >div {
    height: 28px;
  }
`
