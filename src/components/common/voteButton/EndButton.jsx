import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import Alert from "../Alert";
import { closeInquire } from "@/services/main";
import Swal from "sweetalert2";

/**
 * @param {object} props
 * @param {boolean} props.isOwner 작성자 확인
 * @param {string} props.active 투표 진행중 여부 : continue, complete
 */
const EndButton = ({ isOwner, id, active: initialActive }) => {
  const [active, setActive] = useState(initialActive);
  const [alert, setIsAlert] = useState(false);

  const handleOnClick = () => {
    Swal.fire({
      icon: "info",
      html: "투표를 종료하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
      confirmButtonColor: "#429f50",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        setActive("complete");
        setIsAlert(true);
        closeInquire(id);
        window.location.reload();
      }
    });
  };

  return (
    <>
      {alert && <Alert setIsAlert={setIsAlert}>투표가 종료됩니다.</Alert>}
      {isOwner && active === "continue" ? (
        <ButtonStyled onClick={handleOnClick}>끝내기</ButtonStyled>
      ) : (
        ""
      )}
    </>
  );
};
EndButton.propTypes = {
  isOwner: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  active: PropTypes.string.isRequired,
};
const ButtonStyled = styled.button`
  width: 60px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 12px;
  background: #ff8e8e;
  font-weight: 700;
  font-size: 10px;
  border-radius: 20px;
  border: none;
  position: relative;
  bottom: 5px;
  line-height: 15px;
  position: relative;
  top: 2px;
  &:hover {
    background-color: #d47575;
    cursor: pointer;
  }
`;
export default EndButton;
