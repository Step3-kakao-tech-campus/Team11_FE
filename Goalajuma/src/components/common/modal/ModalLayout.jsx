import { MainContainer } from "@/styles/Container";
import ButtonLayout from "@/components/common/voteButton/ButtonLayout";
import VoteHead from "@/components/common/voteButton/VoteHead";
import MainContent from "@/components/home/MainContent";
import VoteBottom from "@/components/common/voteButton/VoteBottom";
import ChatForm from "./ChatForm";
import ChatWriteForm from "./ChatWriteForm";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import ShareForm from "./ShareForm";
import { detailInquire } from "@/services/main";
import { useQuery } from "react-query";

/**
 *
 * @param {object} data
 * @param {string} what
 */

const ModalLayout = ({ id, what }) => {
  console.log(id)
  const {data} = useQuery(["voteId",id], 
    async (id) => {return detailInquire(id)}, 
    { enabled: !!id }
  )
  // const data = detailInquire(id);
  console.log(data)
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
  } = data.vote;

  const [participateState, setParticipate] = useState(participate);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(category)
  const shareCloseModal = () => {
    setModalVisible(false);
  };
  const shareOpenModal = () => {
    setModalVisible(true);
  };

  const clickButton = () => {
    setParticipate(!participateState);
  };

  return (
    <MainContainer className="modal">
      <Container>
        <VoteHead
          totalCount={totalCount}
          endDate={endDate}
          what={what}
          isOwner={isOwner}
          active={active}
          username={username}
          categoryValue={category}
        ></VoteHead>
        <MainContent title={title} content={content}></MainContent>

        <ButtonLayout
          participate={participateState}
          isOwner={isOwner}
          active={active}
          options={options}
          onClick={clickButton}
        ></ButtonLayout>

        <VoteBottom onClickShare={shareOpenModal}></VoteBottom>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={shareCloseModal}
          >
            <ShareForm/>
          </Modal>
        )}

      </Container>
      <Chat>
        <ChatForm />
        <ChatWriteForm participate={participate} />
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
  id: PropTypes.number,
  what: PropTypes.string,
};
const Chat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
`;
export default ModalLayout;
