import { useState } from "react";
import MainButton from "../common/voteButton/MainButton";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
//map 으로 버튼 받아온거 뿌려주기
const ButtonLayout = ({ options, participants, isOwner }) => {
  //서버에서 받아온 value, number 값
  const login = localStorage.getItem("token");
  const navigate = useNavigate();
  const optionList = options?.result;
  const [participant, setParticipant] = useState(participants);
  const [choice, setChoice] = useState(options?.choice);

  const clickButton = (e) => {
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
    } else if (participant === true && choice !== e.target.id) {
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
          setChoice(e.target.id);
          /** 서버에 수정 요청 보내기*/
        }
      });
    } else {
      setParticipant(true);
      setChoice(e.target.id);
    }
  };

  return (
    <>
      <Container>
        {optionList?.map((option) => {
          return (
            <MainButton
              key={option.id}
              id={option.id}
              name={option.optionName}
              value={option.optionRatio}
              number={option.optionCount}
              participant={participant}
              clickButton={clickButton}
              choice={choice}
              src={option.image}
            />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
`;

export default ButtonLayout;
