// 내가 한 투표, 내가 한 질문 헤더 
import styled from "styled-components";
import BackButton from "./BackButton";
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} prop
 * @param {string} page
 * @param {number} prop.count 
 * @return {JSX.Element}
 */
const SubMyPageHeader = ({page, count}) => {
  count = count || 2;
  page = page ||"내가 한 질문"
  return (
    <Nav>
      <BackButton/>
      <PageName>
        <Title>
          {page}{`(${count})`}
        </Title>
      </PageName>
    </Nav>
  )
}
SubMyPageHeader.propTypes = {
  page: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
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
  width: 100%;
  margin : auto 120px auto 73px ;
  font-size: 18px;
  font-weight: bold;
  display:flex;
`;


export default SubMyPageHeader;