import styled from "styled-components";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Palette } from "@/styles/Palette";

/**
 *
 * @param {object} prop
 * @param {string} prop.endDate 작성자가 지정한 투표 종료 시간
 * @param {string} prop.username 작성자 이름
 */
const Timer = ({ endDate, username }) => {
  let time = remaindTime(endDate)[0];
  const [endTime, setEndTime] = useState(time);
  const [oneMinute, setOneMinute] = useState(false); // 일분 남았을 때 빨강 글씨 여부

  //타이머 함수
  function remaindTime(endDate) {
    // 현재 시간을 구한다.
    let now = new Date();
    // 마감 기간을 가져온다.
    let end = new Date(endDate);

    // 현재 시간을 ms로 반환한다.
    let nt = now.getTime();
    // 마감 기간을 ms로 반환한다.
    let et = end.getTime();

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
      <div>{username}</div>

      <div className="timer"> 남은시간 {endTime}</div>
    </TimerStyle>
  );
};

Timer.propTypes = {
  endDate: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
const TimerStyle = styled.div`
  & div {
    margin-right: 5px;
  }
  & div:first-child {
    color: ${Palette.font_gray};
    margin-right: 5px;
  }
  & div:first-child:after {
    content: "|";
    color: ${Palette.percent_gray};
    margin-left: 5px;
  }

  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 100;
  color: ${(props) => (props.color ? "#e40808" : "#000000")};
`;

export default Timer;
