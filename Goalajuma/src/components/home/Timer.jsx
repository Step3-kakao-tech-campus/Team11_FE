import styled from "styled-components";

const Timer = ({ createDate, endDate }) => {
  return (
    <TimerStyle>
      <div className="timer">남은시간 {createDate}</div>
    </TimerStyle>
  );
};
const TimerStyle = styled.div`
  font-size: 13px;
  font-weight: 100;
`;

export default Timer;
