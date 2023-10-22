import { useEffect, useState } from "react";
import { MainButtonSt, BtnContents } from "@/styles/VotingBtnStyle";
import PercentNnumber from "./PercentNumber";
import styled from "styled-components";
import Img from "../Img";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import Alert from "../Alert";

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
}) => {
  const navigate = useNavigate();
  const login = localStorage.getItem("token");
  const [choice, setChoiced] = useState(choiced);
  const [alert, setIsAlert] = useState(false);
  console.log();
  const clickButton = () => {
    if (active === "complete") {
      setIsAlert(true);
    }
    if (active !== "complete" && isOwner === false) {
      if (!login) {
        setIsAlert(true);
      } else if (participate === true) {
        choice === true
          ? (setChoiced(!choice), onClick())
          : setChoiced(!choice);
        /** 서버에 수정 요청 보내기*/
      } else {
        //투표 안한 기본 상태...
        setChoiced(true);
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

      <ButtonContainer>
        {src ? <Img src={src} /> : <></>}

        <MainButtonSt
          onClick={clickButton}
          choice={
            isOwner || participate || active === "complete" ? choice : false
          }
          id={id}
        >
          <BtnContents choice={choice} id={id}>
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
            choice={choice}
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
