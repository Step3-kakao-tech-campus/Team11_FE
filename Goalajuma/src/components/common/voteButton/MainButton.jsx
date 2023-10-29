import { useEffect, useState } from "react";
import { MainButtonSt, BtnContents } from "@/styles/VotingBtnStyle";
import PercentNnumber from "./PercentNumber";
import styled from "styled-components";
import Img from "../Img";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import Alert from "../Alert";
import { deleteVote, vote, voteChange } from "@/services/vote";

/**
 * @param {object} props
 * @param {boolean} props.choiced
 * @param {number} props.value
 * @param {number} props.number
 * @param {string} props.name
 * @param {number} props.id
 * @param {string} props.src
 * @param {boolean} props.participate
 * @param {boolean} props.isOwner
 * @param {string} props.active
 * @param {function} props.onClick 투표시 실행. 참여 여부 변경
 */

const MainButton = ({
  choiced,
  value,
  number,
  name,
  id,
  src,
  participate,
  isOwner,
  active,
  onClick,
  className,
  voteId,
}) => {
  const login = localStorage.getItem("token");
  const [alert, setIsAlert] = useState(false);
  const clickButton = (e) => {
    if (active === "complete") {
      setIsAlert(true);
    }
    if (active !== "complete" && isOwner === false) {
      if (!login) {
        setIsAlert(true);
      } else if (isOwner == true) {
        console.log("자기");
        setIsAlert(true);
      } else if (participate === true) {
        console.log(e.target);
        if (e.target.choiced === true) {
          const voteId = e.target.parentElement.id;
          const optionId = e.target.id;
          voteChange(voteId, optionId);
        } else {
          deleteVote(e.target.id);
        }
      } else {
        //투표 안한 기본 상태...
        vote(e.target.id);
        onClick();
        //투표 요청보내기
      }
    }
  };
  return (
    <>
      {alert ? (
        active === "complete" ? (
          <Alert setIsAlert={setIsAlert}>
            종료된 게시글은 투표가 불가합니다.
          </Alert>
        ) : (
          <Alert setIsAlert={setIsAlert}>로그인 후 투표가 가능합니다</Alert>
        )
      ) : null}

      <ButtonContainer id={voteId}>
        {src ? <Img src={src} /> : <></>}

        <MainButtonSt
          border={value == 100 ? true : false}
          onClick={clickButton}
          choice={choiced}
          id={voteId}
        >
          <BtnContents choice={choiced} id={id}>
            {name}
          </BtnContents>
          <progress
            id={id}
            max="100"
            value={isOwner || participate || active === "complete" ? value : 0}
          ></progress>
        </MainButtonSt>
        {isOwner || participate || active === "complete" ? (
          <PercentNnumber
            value={value}
            number={number}
            choice={choiced}
            id={id}
          />
        ) : (
          <></>
        )}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  div,
  p {
    background-color: transparent;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainButton;
