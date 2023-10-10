import { useState } from "react";
import { MainButtonSt, BtnContents } from "../../../styles/VotingBtnStyle";
import PercentNnumber from "./PercentNumber";
import styled from "styled-components";
import Img from "../Img";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes";
import PropTypes from 'prop-types'

/**
 * @param {object} props
 * @param {boolean} props.choiced
 * @param {number} props.value 버튼 안에 퍼센트
 * @param {number} props.number 투표 참여자 수
 * @param {string} props.name 선택지 이름
 * @param {string} props.src 선택지 이미지
 * @param {boolean} props.participate 유저 참여 여부
 * @param {boolean} props.isOwner 유저와 작성자 일치 여부
 * @param {string} props.active 투표종료 ("continue, finished")
 * @param {function} props.onClick 투표시 실행. 참여 여부 변경
 */

const MainButton = ({
  choiced,
  value, 
  number,
  name,
  src,
  participate,
  isOwner,
  active,
  onClick,
}) => {
  const navigate = useNavigate();
  const login = localStorage.getItem("token");
  const [choice, setChoiced] = useState(choiced);

  // 투표 버튼 클릭 시 동작 
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
        if (choice == true) {
          Swal.fire({
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
          });
        } else {
          Swal.fire({
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
        }
      } else {
        //투표 안한 기본 상태
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
      >
        <BtnContents choice={choice}>
          {name}
        </BtnContents>
        <progress
          max="100"
          value={isOwner || participate || active === "finish" ? value : 0}
        ></progress>
      </MainButtonSt>
      {isOwner || participate || active === "finish" ? (
        <PercentNnumber value={value} number={number} choice={choice} />
      ) : (
        <></>
      )}
    </ButtonContainer>
  );
};

MainButton.propTypes = {
  choiced: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  participate: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainButton;
