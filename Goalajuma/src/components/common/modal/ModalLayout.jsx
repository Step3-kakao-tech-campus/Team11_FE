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
  const {data} = useQuery(`/votes/${id}`, 
    async () => detailInquire(id), 
    { enabled: !!id }
  )
  console.log(id)
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
  } = data;
  console.log(data)
  
  const [participateState, setParticipate] = useState(participate);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(category)
  const closeModal = () => {
    setModalVisible(false);
  };
  const share = () => {
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

        <VoteBottom onClickShare={share}></VoteBottom>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
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
