import Icon from "../Icon";
import styled from "styled-components";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaShare } from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {object} onClick - 댓글 모달
 * @param {object} onClickShare - 공유 버튼 모달
 */
const VoteBottom = ({ onClick, onClickShare, modal }) => {
  return (
    <VoteButtonStyle>
      <div className="chat" onClick={onClick}>
        <Icon reverse={true} color="#676767" size="20px" modal={true}>
          {" "}
          <HiOutlineChatBubbleOvalLeft />
        </Icon>
        <p>댓글</p>
      </div>
      <Icon color="#676767" size="20px" onClick={onClickShare} modal={modal}>
        <FaShare />
      </Icon>
    </VoteButtonStyle>
  );
};

VoteBottom.propTypes = {
  onClickShare: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  modal: PropTypes.bool
};
const VoteButtonStyle = styled.div`
  margin-top: 2rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .chat {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 0.3rem;
    font-size: 11.5px;
  }
`;

export default VoteBottom;
