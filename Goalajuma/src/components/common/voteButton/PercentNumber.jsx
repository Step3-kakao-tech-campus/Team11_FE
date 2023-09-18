import { PercentNnumberSt } from "../../../styles/VotingBtnStyle";

const PercentNumber = ({ value, number, choice }) => {
  return (
    <PercentNnumberSt choice={choice}>
      <p>{value}%</p>
      <p>{number}명</p>
    </PercentNnumberSt>
  );
};

export default PercentNumber;
