import styled from "styled-components";
import Icon from "../common/Icon";
import { BsPeopleFill } from "react-icons/bs";
import Timer from "./Timer";
/**
 * @param {object} props
 * @param {number} props.voteCount
 * @param {string} props.createDate
 * @param {string} props.endDate
 * @param {string} props.what hot,complete,main
 */
const VoteHead = ({ voteCount, endDate, what }) => {
  return (
    <VoteHeadCss>
      {what == "hot" ? (
        <img src={`public/image/fire.png`} />
      ) : (
        <Icon>
          <BsPeopleFill />{" "}
        </Icon>
      )}

      {what === "complete" ? (
        <>
          <div className="completeTitle">
            <p>투표자수</p>
            <p>{voteCount}</p>
          </div>
        </>
      ) : (
        <div className="voteTitle">
          <div className="voteNumber">{voteCount}명이 투표중입니다.</div>
          <Timer endDate={endDate}></Timer>
        </div>
      )}
    </VoteHeadCss>
  );
};

const VoteHeadCss = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  align-items: flex-start;
  position: relative;

  .voteTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    margin-bottom: 1rem;
  }
  .voteNumber {
    font-size: 15.57px;
    font-weight: 700;
  }

  .completeTitle {
    display: flex;
    align-items: center;
    margin-left: 10px;
    position: relative;
    bottom: 1rem;
  }
  .completeTitle p:first-child {
    font-size: 10px;
    margin-right: 0.3rem;
  }
  .completeTitle p:last-child {
    font-size: 20px;
    font-weight: 900;
  }
`;

export default VoteHead;
