import { MainContainer } from "../../styles/Container";
import ButtonLayout from "./ButtonLayout";
import VoteHead from "./VoteHead";
import MainContent from "./MainContent";
import VoteButtom from "../common/voteButton/VoteButtom";
import styled from "styled-components";
const HomeLayout = ({ data, options }) => {
  const { id, voteCount, participants, isOwner, title, content } = data;
  const clickModal = () => {
    alert("모달창!!!!");
  };
  const share = () => {
    alert("공유하기");
  };
  return (
    <MainContainer>
      {}
      <Container>
        <VoteHead voteCount={voteCount}></VoteHead>
        <MainContent title={title} content={content}></MainContent>

        <ButtonLayout
          options={options}
          participants={participants}
          isOwner={isOwner}
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
