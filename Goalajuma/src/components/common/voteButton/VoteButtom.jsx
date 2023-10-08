import Icon from "../Icon";
import styled from "styled-components";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaShare } from "react-icons/fa";

const VoteButtom = ({ onClick, clickShare }) => {
  return (
    <VoteButtonStyle>
      <div className="chat" onClick={onClick}>
        <Icon reverse={true} color="#676767" size="20px">
          {" "}
          <HiOutlineChatBubbleOvalLeft />
        </Icon>
        <p>댓글</p>
      </div>
      <Icon color="#676767" size="20px" onClick={clickShare}>
        <FaShare />
      </Icon>
    </VoteButtonStyle>
  );
};

const VoteButtonStyle = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .chat {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 0.3rem;
    font-size: 11.5px;
  }
`;

export default VoteButtom;
