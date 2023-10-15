import { MainContainer } from "../../styles/Container";
import ButtonLayout from "../common/voteButton/ButtonLayout";
import VoteHead from "../common/voteButton/VoteHead";
import MainContent from "./MainContent";
import VoteButtom from "../common/voteButton/VoteButtom";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {object} props.data
 * @param {string} props.what
 */

const HomeLayout = ({ data, what }) => {
  const {
    voteCount,
    participate,
    isOwner,
    title,
    content,
    endDate,
    active,
    options,
  } = data;
  const [participateState, setParticipate] = useState(participate);

  const clickButton = () => {
    setParticipate(!participateState);
    // 투표 참여 안했을때
  };
  const clickModal = () => {
    alert("모달창!!!!");
  };
  const share = () => {
    alert("공유하기");
  };
  return (
    <MainContainer>
      <Container>
        <VoteHead
          voteCount={voteCount}
          endDate={endDate}
          what={what}
        ></VoteHead>
        <MainContent title={title} content={content}></MainContent>

        <ButtonLayout
          participate={participateState}
          isOwner={isOwner}
          active={active}
          options={options}
          onClick={clickButton}
        ></ButtonLayout>

        <VoteButtom onClick={clickModal} onClickShare={share}></VoteButtom>
      </Container>
    </MainContainer>
  );
};
HomeLayout.propTypes = {
  data: PropTypes.object,
  what: PropTypes.string,
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  height: auto;
  border-bottom: 2px solid #e2e2e2;
  margin-top: 1.5rem;
  padding-bottom: 1rem;
`;

export default HomeLayout;
