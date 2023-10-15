import { MainContainer } from "../../../styles/Container";
import ButtonLayout from "../voteButton/ButtonLayout";
import VoteHead from "../voteButton/VoteHead";
import MainContent from "../../home/MainContent";
import VoteButtom from "../voteButton/VoteButtom";
import ChatForm from "./ChatForm";
import ChatWriteForm from "./ChatWriteForm";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {object} data
 * @param {string} what
 */

const ModalLayout = ({ data, what }) => {
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
  // const clickModal = () => {
  //   alert("모달창!!!!");
  // };
  const share = () => {
    alert("공유하기 모달창 !!!");
  };

  return (
    <MainContainer className="modal">
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

        <VoteButtom onClickShare={share}></VoteButtom>
      </Container>
      <Chat>
        <ChatForm />
        <ChatWriteForm />
      </Chat>

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
ModalLayout.propTypes = {
  data: PropTypes.object,
  what: PropTypes.string,
};
const Chat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export default ModalLayout;
