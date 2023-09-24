import { useEffect, useState } from "react";
import { MainButtonSt, BtnContents } from "../../../styles/VotingBtnStyle";
import PercentNnumber from "./PercentNumber";
import styled from "styled-components";

const MainButton = ({
  value,
  number,
  clickButton,
  participant,
  choice,
  name,
  id,
}) => {
  const [choices, setChoice] = useState(choice);
  //choice 할 때

  useEffect(() => {
    if (participant && choice == id) {
      setChoice(true);
    }
  }, [choices, choice]);

  return (
    <ButtonContainer>
      <MainButtonSt onClick={clickButton} choice={choices} id={id}>
        <BtnContents choice={choices} id={id}>
          {name}
        </BtnContents>
        <progress id={id} max="100" value={participant ? value : 0}>
          {" "}
        </progress>
      </MainButtonSt>
      {participant ? (
        <PercentNnumber value={value} number={number} choice={choices} />
      ) : (
        <></>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainButton;
