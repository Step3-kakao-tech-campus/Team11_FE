import styled from "styled-components";
import MypageMainLi from "./MypageMainLi";
import { useNavigate } from "react-router-dom";
import route from "../../../routes";

const MyPageUl = ({ votingNumber, questionNumber }) => {
  const navigate = useNavigate();
  return (
    <MyUlStyle>
      <MypageMainLi
        content="내가 참여한 투표"
        number={votingNumber}
        onClick={() => navigate(route.myparticipation)}
      ></MypageMainLi>
      <MypageMainLi
        content="내가 한 질문"
        number={questionNumber}
        onClick={() => navigate(route.myquestion)}
      ></MypageMainLi>

      <MypageMainLi
        content="내 정보 수정"
        onClick={() => alert("모달창")}
      ></MypageMainLi>
    </MyUlStyle>
  );
};

const MyUlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  color: #6b6b6b;
  margin: 0;
  padding: 0;
`;
export default MyPageUl;
