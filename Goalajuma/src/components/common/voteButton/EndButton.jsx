import PropTypes from "prop-types";
import { useState,useEffect } from "react";
import styled from "styled-components";
import Alert from "../Alert";

/**
 * @param {object} props
 * @param {boolean} props.isOwner 작성자 확인 
 * @param {string} props.active 투표 진행중 여부 : continue, complete
 */
const EndButton = ({isOwner, active: initialActive}) => {
  const [active, setActive] = useState(initialActive);
  const [alert, setIsAlert] = useState(false);

  useEffect(() => {
    // active 상태가 업데이트될 때마다 이 효과가 실행됩니다.
    console.log(active); // 업데이트된 active 값을 여기서 사용할 수 있습니다.
  }, [active]); 
  useEffect(() => {
    // active 상태가 업데이트될 때마다 이 효과가 실행됩니다.
    console.log(alert); // 업데이트된 active 값을 여기서 사용할 수 있습니다.
  }, [alert]); 

  const handleOnClick = () => {
    setActive("complete")
    setIsAlert(true)
  };

  if(isOwner && active === "continue") {
    return (
      <>
        {alert && <Alert setIsAlert={setIsAlert}>
          투표가 종료됩니다.
        </Alert>}
        <ButtonStyled onClick={handleOnClick}>끝내기</ButtonStyled>
      </>
    )
  }
}
EndButton.propTypes = {
  isOwner: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired
}
const ButtonStyled = styled.button`
  width: 60px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 12px;
  background: #FF8E8E;
  font-weight: 700;
  font-size: 10px;
  border-radius: 20px;
  border: none;
  position: relative;
  bottom: 5px;
  line-height: 15px;
  position: relative;
  top: 2px;
  &:hover{
    background-color: #D47575;
    cursor: pointer;
  }
`
export default EndButton