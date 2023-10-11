import Icon from "../common/Icon";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import { Palette } from "../../styles/Palette";

const PlusBtn = ({ onClick }) => {
  return (
    <PlusBtnStyle>
      <Icon size="30px" color={Palette["point_blue"]} onClick={onClick}>
        <AiFillPlusCircle />
      </Icon>
      <p>선택지 추가 (최대 6개)</p>
    </PlusBtnStyle>
  );
};

const PlusBtnStyle = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  p {
    font-size: 14px;
    color: #575757;
    margin: 0 0 0.6rem 0.3rem;
  }
`;

export default PlusBtn;
