import ActiveSign from "./ActiveSign"
import { GoChevronRight } from "react-icons/go"
import styled from "styled-components"
import { Palette } from "../../../styles/Palette"
import PropTypes from 'prop-types'

/**
 * @param {object} data
 * @returns {JSX.Element}
 */
const MyVoteList = ({data}) => {
  return (
    <MyVote>
      <VoteInfo>
        <ActiveSign active={data.active}/>
        <div>{data.title}</div>
      </VoteInfo>
      <Vote>
        더보기
        <GoChevronRight className="modal"/>
      </Vote>
    </MyVote>
  )
}

MyVoteList.propTypes = {
  data: PropTypes.object.isRequired
}
const MyVote = styled.div`
  height: 4rem;
  display: flex;
  border-top: 1px solid ${Palette.percent_gray};
  border-bottom: 1px solid ${Palette.percent_gray};
  position: relative;
`;
const VoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  font-size: 17px;
`;
const Vote = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  & > .modal {
    font-size: 20px;
    color: ${Palette.font_blue};
  }
`;

export default MyVoteList;