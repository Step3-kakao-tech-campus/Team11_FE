import { ModalMainContainer } from "@/styles/Container";
import ButtonLayout from "@/components/common/voteButton/ButtonLayout";
import VoteHead from "@/components/common/voteButton/VoteHead";
import MainContent from "@/components/home/MainContent";
import VoteBottom from "@/components/common/voteButton/VoteBottom";
import { useState } from "react";
import Modal from "./Modal";
import ShareForm from "./ShareForm";
import styled from "styled-components";
import ChatBeta from "./ChatBeta";
// import routes from "@/routes";

const ModalTemplate = ({ detailData, click, what }) => {
  const {
    totalCount,
    participate,
    isOwner,
    title,
    content,
    endDate,
    active,
    options,
    username,
    category,
    id,
  } = detailData;

  const [optionState, setOptionState] = useState(options);
  const [participateState, setParticipate] = useState(participate);
  const [modalVisible, setModalVisible] = useState(false);

  const shareCloseModal = () => {
    setModalVisible(false);
  };
  const shareOpenModal = () => {
    setModalVisible(true);
  };

  const changeVotes = (participate, result) => {
    click(participate, result);
    setParticipate(participate);

    const copyOptions = optionState?.map((choice, index) => {
      return {
        ...choice,
        optionCount: result[index]?.optionCount,
        optionRatio: result[index]?.optionRatio,
        choice: result[index].choice,
      };
    });

    setOptionState(copyOptions);
  };
  return (
    <div>
      <ModalMainContainer className="modal">
        <Container>
          <VoteHead
            totalCount={totalCount}
            endDate={endDate}
            what={what}
            isOwner={isOwner}
            active={active}
            username={username}
            categoryValue={category}
            id={id}
          ></VoteHead>
          <MainContent title={title} content={content}></MainContent>

          <ButtonLayout
            participate={participateState}
            isOwner={isOwner}
            active={active}
            options={optionState}
            changeVotes={changeVotes}
          ></ButtonLayout>

          <VoteBottom onClickShare={shareOpenModal} modal={true}></VoteBottom>
          {modalVisible && (
            <Modal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={shareCloseModal}
            >
              <ShareForm />
            </Modal>
          )}
        </Container>
        <Chat>
          <ChatBeta participate={participateState || isOwner} />
        </Chat>
      </ModalMainContainer>
    </div>
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
const Chat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
`;

export default ModalTemplate;
