import { useEffect, useState } from "react";
import { MainButtonSt, BtnContents } from "../../../styles/VotingBtnStyle";
import PercentNnumber from "./PercentNumber";
import styled from "styled-components";
import Img from "../Img";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes";

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

  const clickButton = () => {
    if (active !== "finish" && isOwner == false) {
      if (!login) {
        Swal.fire({
          icon: "error",
          html: "로그인 해야 투표가 가능합니다.<br> 로그인 하시겠습니까?",
          showCancelButton: true,
          confirmButtonText: "예",
          cancelButtonText: "아니오",
          confirmButtonColor: "#429f50",
          cancelButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(routes.login);
          }
        });
      } else if (participate == true) {
        choice == true
          ? Swal.fire({
              icon: "info",
              text: "투표를 취소하겠습니까?",
              showCancelButton: true,
              confirmButtonText: "예",
              cancelButtonText: "아니오",
              confirmButtonColor: "#429f50",
              cancelButtonColor: "#d33",
            }).then((result) => {
              if (result.isConfirmed) {
                setChoiced(!choice);
                onClick();
                /** 서버에 취소 요청 보내기*/
              }
            })
          : Swal.fire({
              icon: "info",
              text: "투표를 수정하시겠습니까?",
              showCancelButton: true,
              confirmButtonText: "예",
              cancelButtonText: "아니오",
              confirmButtonColor: "#429f50",
              cancelButtonColor: "#d33",
            }).then((result) => {
              if (result.isConfirmed) {
                setChoiced(!choice);
                /** 서버에 수정 요청 보내기*/
              }
            });
      } else {
        //투표 안한 기본 상태...
        setChoiced(true);
        onClick();
        //투표 요청보내기
      }
    }
  };
  return (
    <ButtonContainer>
      {src ? <Img src={src} /> : <></>}
      <MainButtonSt
        onClick={clickButton}
        choice={isOwner || participate || active === "finish" ? choice : false}
        id={id}
      >
        <BtnContents choice={choice} id={id}>
          {name}
        </BtnContents>
        <progress
          id={id}
          max="100"
          value={isOwner || participate || active === "finish" ? value : 0}
        ></progress>
      </MainButtonSt>
      {isOwner || participate || active === "finish" ? (
        <PercentNnumber value={value} number={number} choice={choice} id={id} />
      ) : (
        <></>
      )}
    </ButtonContainer>
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
