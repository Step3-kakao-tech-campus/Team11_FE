import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../../../routes";
import {GoHome, GoHomeFill, GoPlusCircle } from 'react-icons/go';
import {AiOutlineFire, AiFillFire} from 'react-icons/ai';
import {BsClipboardCheck, BsClipboardCheckFill, BsPerson, BsPersonFill} from 'react-icons/bs';
import { Palette } from "../../../styles/Palette";
import PropTypes from 'prop-types'

/**
 * @param {string} page 각 페이지 이름 
 */
export const Footer = ({page}) => {  
  
  // 해당 푸터 버튼 클릭시 맨 위로 이동 
  const handlePage = (index) => {
    if (page[index] === true) { // 맨위로 이동
      console.log();
    }
  };

  return (
    <Nav>
      <LinkBox>
        <LinkNav to={routes.home}>
          <div>
            {page==='main' ? <GoHomeFill fontSize={28}/> : <GoHome fontSize={28} />}
          </div>
          <div>홈</div>
        </LinkNav>
        <LinkNav to={routes.hot}>
          <div>
            { page==='hot' ? <AiFillFire fontSize={28}/> : <AiOutlineFire fontSize={28}/>}
          </div>
          <div>HOT</div>
        </LinkNav>
        <UploadLink to={routes.upload} className="upload-button">
          <div>
            <GoPlusCircle fontSize={40}/>
          </div>
        </UploadLink>
        <LinkNav to={routes.complete} >
          <div>
            { page==='complete' ? <BsClipboardCheckFill fontSize={28}/> : <BsClipboardCheck fontSize={28} /> }
          </div>
          <div>완료</div>
        </LinkNav>
        <LinkNav to={routes.login}> 
          <div>
            {page==='mypage' ? <BsPersonFill fontSize={28}/> :<BsPerson fontSize={28}/>}
          </div>
          <div>로그인</div>
        </LinkNav>
      </LinkBox>
    </Nav>
  )
}
Footer.propTypes ={
  page: PropTypes.string.isRequired
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
