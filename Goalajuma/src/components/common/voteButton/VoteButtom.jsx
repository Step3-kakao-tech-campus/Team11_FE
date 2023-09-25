import Icon from "../Icon";
import styled from "styled-components";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaShare } from "react-icons/fa";

const VoteButtom = () => {
  return (
    <VoteButtomStyle>
      <div className="chat">
        <Icon>
          {" "}
          <HiOutlineChatBubbleOvalLeft />
        </Icon>
        댓글
      </div>
      <Icon>
        <FaShare />
      </Icon>
    </VoteButtomStyle>
  );
};

const VoteButtomStyle = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .chat {
    display: flex;
  }
`;

export default VoteButtom;
