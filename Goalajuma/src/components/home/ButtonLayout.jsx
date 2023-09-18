import { useState } from "react";
import MainButton from "../common/voteButton/MainButton";
import styled from "styled-components";

//map 으로 버튼 받아온거 뿌려주기
const ButtonLayout = ({ options, participants, isOwner }) => {
  //서버에서 받아온 value, number 값
  const optionList = options?.result;
  const [participant, setParticipant] = useState(participants);
  const [choice, setChoice] = useState(options?.choice);

  const clickButton = (e) => {
    setParticipant(true);
    setChoice(e.target.id);

    //이미 클릭된거는 클릭 막기.............
  };
  return (
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
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 393px;
  justify-content: center;
`;

export default ButtonLayout;
