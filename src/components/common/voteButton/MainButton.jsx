import { useState } from "react";
import { MainButtonSt, BtnContents } from "@/styles/VotingBtnStyle";
import PercentNumber from "./PercentNumber";
import styled from "styled-components";
import Img from "../Img";
import PropTypes from "prop-types";
import Alert from "../Alert";
import { changeOption, deleteVote, vote } from "@/services/vote";
import Swal from "sweetalert2";

/**
 * @param {object} props
 * @param {boolean} props.choiced
 * @param {number} props.value
 * @param {number} props.number
 * @param {string} props.name
 * @param {number} props.id
 * @param {string} props.src
 * @param {boolean} props.participate
 * @param {boolean} props.isOwner
 * @param {string} props.active
 * @param {function} props.onClick 투표시 실행. 참여 여부 변경
 */

const MainButton = ({
  choiced,
  value,
  number,
  name,
  id,
  src,
  participate,
  isOwner,
  active,
  voteId,
  changeVotes,
}) => {
  const login = localStorage.getItem("token");
  const [alert, setIsAlert] = useState(false);
  const buttonActive = isOwner || participate || active === "complete";

  const clickButton = (e) => {
    if (active === "complete") {
      setIsAlert(true);
    }
    if (isOwner === true) {
      setIsAlert(true);
    } else if (active !== "complete" && isOwner === false) {
      if (!login) {
        setIsAlert(true);
      } else if (participate === true) {
        //투표 수정
        if (choiced !== true) {
          changeOption(e.target.id).then((res) => {
            const result = res?.data.data;
            changeVotes(true, result);
          });
        } else {
          //투표 취소
          Swal.fire({
            icon: "info",
            html: "투표 취소 시 댓글이 전부 삭제될 수 있습니다. <br><br> 취소하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
            confirmButtonColor: "#429f50",
            cancelButtonColor: "#d33",
          }).then((result) => {
            if (result.isConfirmed) {
              deleteVote(e.target.id).then((res) => {
                const result = res?.data.data;
                changeVotes(false, result);
              });
            }
          });
        }
      } else {
        //투표 안한 상태
        vote(e.target.id)
          .then((res) => {
            const result = res?.data.data;
            changeVotes(true, result);
          })
          .catch((err) => console.log(err));
      }
    }
  };
  return (
    <>
      {alert ? (
        active === "complete" ? (
          <Alert setIsAlert={setIsAlert}>
            종료된 게시글은 투표가 불가합니다.
          </Alert>
        ) : isOwner === true ? (
          <Alert setIsAlert={setIsAlert}>본인 게시글은 투표 불가합니다.</Alert>
        ) : (
          <Alert setIsAlert={setIsAlert}>로그인 후 투표가 가능합니다</Alert>
        )
      ) : null}

      <ButtonContainer id={voteId}>
        {src && <Img src={src} server={true} />}

        <MainButtonSt
          border={value == 100 ? true : false}
          onClick={clickButton}
          choice={choiced}
          id={voteId}
        >
          <BtnContents choice={participate && choiced} id={id}>
            {name}
          </BtnContents>
          <progress
            id={id}
            max="100"
            value={buttonActive ? value : 0}
          ></progress>
        </MainButtonSt>
        {buttonActive ? (
          <PercentNumber
            value={value}
            number={number}
            choice={choiced}
            id={id}
          />
        ) : (
          <></>
        )}
      </ButtonContainer>
    </>
  );
};

MainButton.propTypes = {
  choiced: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  participate: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  voteId: PropTypes.number.isRequired,
  changeVotes: PropTypes.func,
};

const ButtonContainer = styled.div`
  div,
  p {
    background-color: transparent;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainButton;
