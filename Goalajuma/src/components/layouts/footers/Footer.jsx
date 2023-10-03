import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import routes from "../../../routes";
import {GoHome, GoHomeFill, GoPlusCircle } from 'react-icons/go';
import {AiOutlineFire, AiFillFire} from 'react-icons/ai';
import {BsClipboardCheck, BsClipboardCheckFill, BsPerson} from 'react-icons/bs';
import { Palette } from "../../../styles/Palette";

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
        <UploadLink to={routes.upload} className="upload-button">
          <div>
            <GoPlusCircle fontSize={40}/>
          </div>
        </UploadLink>
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
  bottom: 0px;
  width: 390px;
  height: 68px;
  background-color: #FFF;
  font-size: 12px;
  z-index: 500;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px ;
`;

const LinkNav = styled(Link)`
  margin-top: 15px;
  color: #7192FF;
  >div {
    height: 26px;
  }
`;

const UploadLink = styled(Link)`
  color: ${Palette.font_blue};
  margin-top: 7px;
`
