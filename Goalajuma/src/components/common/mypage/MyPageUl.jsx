import styled from "styled-components";
import MypageMainLi from "./MypageMainLi";
import { useNavigate } from "react-router-dom";
import route from "@/routes";
import PropTypes from 'prop-types'
import { useState } from "react";
import Modal from '../modal/Modal'
import ProfileModal from "@/pages/my/ProfileModal"
import { MainMyData } from "./MyPageData";

/**
 *
 * @param {number} votingNumber 내가 한 투표수
 * @param {number} questionNumber 내가 한 질문
 * @return {JSX.Element}
 */
const MyPageUl = ({ votingNumber, questionNumber }) => {
  const navigate = useNavigate(); // Li tag 아래 버튼을 주고 onclick 주기
  const [profile, setProfile] = useState(false);
  const datas = MainMyData.data;
  
  const openProfile = () => {
    setProfile(true);
  }
  const closeProfile = () => {
    setProfile(false);
  }
  return ( 
    <MyUlStyle> 
      <MypageMainLi
        content="내가 참여한 투표"
        number={datas.participateVoteCount}
        onClick={()=>navigate(route.myparticipation)}
      ></MypageMainLi>
      <MypageMainLi
        content="내가 한 질문"
        number={datas.createVoteCount}
        onClick={()=>navigate(route.myquestion)}
      ></MypageMainLi>
      <MypageMainLi
        content="내 정보 수정"
        onClick={openProfile}
      >
      </MypageMainLi>
      {
          profile &&
          <Modal
            visible={profile}
            closable={true}
            maskClosable={true}
            onClose={closeProfile}>
            <ProfileModal
              myNickName ={datas.nickName}
              myEmail={datas.email}
              img={datas.image}
            />
          </Modal>
      }
    </MyUlStyle>
  );
};

MyPageUl.propTypes={
  votingNumber: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired
}
const MyUlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  color: #6b6b6b;
  margin: 0;
  padding: 0;
`;
export default MyPageUl;
