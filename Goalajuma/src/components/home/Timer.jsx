import styled from "styled-components";
import { useEffect, useState } from "react";

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
    return days + "일 " + hour + ":" + min + ":" + sec;
  } else {
    return "종료";
  }
}

const Timer = ({ createDate, endDate }) => {
  let time = remaindTime(endDate);
  const [endTime, setEndTime] = useState(time);
  useEffect(() => {
    setEndTime;
    const interval = setInterval(() => {
      time = remaindTime(endDate);
      setEndTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <TimerStyle>
      <div className="timer">남은시간 {time}</div>
    </TimerStyle>
  );
};
const TimerStyle = styled.div`
  font-size: 13px;
  font-weight: 100;
`;

export default Timer;
