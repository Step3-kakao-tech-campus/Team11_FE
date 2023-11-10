import Icon from "../Icon";
import styled from "styled-components";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaShare } from "react-icons/fa";
import PropTypes from "prop-types";
import { commentCountInquire } from "@/services/main";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

/**
 * @param {object} props
 * @param {object} onClick - 댓글 모달
 * @param {object} onClickShare - 공유 버튼 모달
 */
const VoteBottom = ({ onClick, onClickShare, modal, id }) => {
  // const [count, setCount] = useState(null)
  const { data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => {
      return commentCountInquire(id);
    },
    enabled: !!id,
  });

  // console.log(data?.data.data.commentCount)
  return (
    <VoteButtonStyle>
      <div className="chat" onClick={onClick}>
        <Icon reverse={true} color="#676767" size="20px">
          {" "}
          <HiOutlineChatBubbleOvalLeft />
        </Icon>

        <p>댓글({data?.data.data.commentCount})</p>
      </div>

      <Icon color="#676767" size="20px" onClick={onClickShare} modal={modal}>
        <FaShare />
      </Icon>
    </VoteButtonStyle>
  );
};

VoteBottom.propTypes = {
  onClickShare: PropTypes.func,
  onClick: PropTypes.func,
  modal: PropTypes.bool,
  id: PropTypes.number,
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
