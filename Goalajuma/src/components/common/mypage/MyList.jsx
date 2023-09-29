import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

const MyList = ({ votingNumber, questionNumber }) => {
  return (
    <MyListStyle>
      <li>
        내가 참여한 투표 <span>({votingNumber})</span>
      </li>
      <li>
        내가 한 질문 <span>({questionNumber})</span>
      </li>
      <li>개인정보 수정</li>
    </MyListStyle>
  );
};

const MyListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    text-align: start;
  }
  li span {
    color: ${Palette["point_blue"]};
  }
`;
export default MyList;
