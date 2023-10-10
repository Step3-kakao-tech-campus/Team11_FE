import styled from "styled-components";
import MypageMainLi from "./MypageMainLi";
import { useNavigate } from "react-router-dom";
import route from "../../../routes";

/**
 *
 * @param {number} votingNumber
 * @param {number} questionNumber
 * @return {JSX.Element}
 */
const MyPageUl = ({ votingNumber, questionNumber }) => {
  const navigate = useNavigate(); // Li tag 아래 버튼을 주고 onclick 주기
  return ( 
    <MyUlStyle> 
      <MypageMainLi
        content="내가 참여한 투표"
        number={votingNumber}
        onClick={()=>navigate(route.myparticipation)}
      ></MypageMainLi>
      <MypageMainLi
        content="내가 한 질문"
        number={questionNumber}
        onClick={()=>navigate(route.myquestion)}
      ></MypageMainLi>

      <MypageMainLi
        content="내 정보 수정"
        onClick={""}
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
