import styled from "styled-components";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

/**
 *
 * @param {object} prop
 * @param {string} prop.endDate 작성자가 지정한 투표 종료 시간
 */
const Timer = ({ endDate }) => {
  let time = remaindTime(endDate)[0];
  const [endTime, setEndTime] = useState(time);
  const [oneMinute, setOneMinute] = useState(false); // 일분 남았을 때 빨강 글씨 여부 
  
  //타이머 함수
  function remaindTime(endDate) {
    // 현재 시간을 구한다.
    var now = new Date();
    // 마감 기간을 가져온다.
    var end = new Date(endDate);

    // 현재 시간을 ms로 반환한다.
    var nt = now.getTime();
    // 마감 기간을 ms로 반환한다.
    var et = end.getTime();

    // 마감 기간이 현재 시간보다 클 경우
    if (nt < et) {
      let sec = parseInt(et - nt) / 1000;
      let days = parseInt(sec / 60 / 60 / 24);
      sec = sec - days * 60 * 60 * 24;
      let hour = parseInt(sec / 60 / 60);
      sec = sec - hour * 60 * 60;
      let min = parseInt(sec / 60);
      sec = parseInt(sec - min * 60);

      if (hour < 10) {
        hour = "0" + hour;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      return [days + "일 " + hour + ":" + min + ":" + sec, et - nt];
    } else {
      return ["종료", 60001];
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      time = remaindTime(endDate);
      setEndTime(time[0]);
      setOneMinute(time[1] < 60000 ? true : false);
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <TimerStyle color={oneMinute}>
      <div className="timer">남은시간 {endTime}</div>
    </TimerStyle>
  );
};

 Timer.propTypes = {
  endDate: PropTypes.string.isRequired
 }
const TimerStyle = styled.div`
  font-size: 13px;
  font-weight: 100;
  color: ${(props) => (props.color ? "#e40808" : "#000000")};
`;

export default Timer;
