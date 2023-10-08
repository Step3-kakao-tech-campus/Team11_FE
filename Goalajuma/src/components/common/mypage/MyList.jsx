import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

const MyList = ({ votingNumber, questionNumber }) => {
  return (
    <MyListStyle>
      <li className="myli">
        내가 참여한 투표 <span>({votingNumber})</span>
      </li>
      <li className="myli">
        내가 한 질문 <span>({questionNumber})</span>
      </li>
      <li className="myli">개인정보 수정</li>
    </MyListStyle>
  );
};

const MyListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  .myli {
    text-align: start;
  }
  .myli span {
    color: ${Palette["point_blue"]};
  }
`;
export default MyList;
