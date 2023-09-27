import { PercentNnumberSt } from "../../../styles/VotingBtnStyle";

const PercentNumber = ({ value, number, choice, id }) => {
  return (
    <PercentNnumberSt choice={choice} id={id}>
      <p>{value}%</p>
      <p>{number}명</p>
    </PercentNnumberSt>
  );
};

export default PercentNumber;
