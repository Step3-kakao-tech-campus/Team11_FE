import styled from "styled-components";
import Icon from "../common/Icon";
import { BsPeopleFill } from "react-icons/bs";

const VoteHead = ({ voteCount }) => {
  return (
    <VoteHeadCss>
      <Icon>
        <BsPeopleFill />
      </Icon>
      <div className="voteTitle">
        <div className="voteNumber">{voteCount}명이 투표중입니다.</div>
        <div className="timer">남은시간 02:02:22</div>
      </div>
    </VoteHeadCss>
  );
};

const VoteHeadCss = styled.div`
  width: 100%;
  display: flex;

  align-items: flex-start;
  margin-bottom: 1rem;

  position: relative;

  .voteTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
  .voteNumber {
    font-size: 15.57px;
    font-weight: 700;
  }
  .timer {
    font-size: 13px;
  }
`;

export default VoteHead;
