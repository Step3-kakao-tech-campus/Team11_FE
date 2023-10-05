import { MainContainer } from "../../styles/Container";
import ButtonLayout from "./ButtonLayout";
import VoteHead from "./VoteHead";
import MainContent from "./MainContent";
import VoteButtom from "../common/voteButton/VoteButtom";
import styled from "styled-components";
import { useState } from "react";

/**
 *
 * @param {object} data
 * @param {string} what
 */
const HomeLayout = ({ data, what }) => {
  const {
    voteCount,
    participate,
    isOwner,
    title,
    content,
    createDate,
    endDate,
    active,
    options,
  } = data;
  const [participateState, setParticipate] = useState(participate);
  const clickButton = () => {
    setParticipate(!participateState);
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
          createDate={createDate}
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

        <VoteButtom onClick={clickModal} clickShare={share}></VoteButtom>
      </Container>
    </MainContainer>
  );
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
