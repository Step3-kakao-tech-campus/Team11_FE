import { useEffect, useState } from "react";
import { MainButtonSt, BtnContents } from "../../../styles/VotingBtnStyle";
import PercentNnumber from "./PercentNumber";

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
    <>
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
    </>
  );
};

export default MainButton;
