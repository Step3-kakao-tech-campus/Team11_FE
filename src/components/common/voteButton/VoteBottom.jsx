import Icon from "../Icon";
import styled from "styled-components";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaShare } from "react-icons/fa";
import PropTypes from "prop-types";
import { commentCountInquire } from "@/services/main";
import { useQuery } from "@tanstack/react-query";

/**
 * @param {object} props
 * @param {func} props.onClick - 댓글 모달
 * @param {func} props.onClickShare - 공유 버튼 모달
 * @param {boolean} props.modal - 공유 버튼 모달
 * @param {number} props.id - 투표 id
 */

const VoteBottom = ({ onClick, onClickShare, modal, id }) => {
  const { data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => {
      return commentCountInquire(id);
    },
    enabled: !!id,
  });

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
