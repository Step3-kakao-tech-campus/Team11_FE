import { ModalMainContainer } from "@/styles/Container";
import ButtonLayout from "@/components/common/voteButton/ButtonLayout";
import VoteHead from "@/components/common/voteButton/VoteHead";
import MainContent from "@/components/home/MainContent";
import VoteBottom from "@/components/common/voteButton/VoteBottom";
import ChatForm from "./ChatForm";
import ChatWriteForm from "./ChatWriteForm";
import styled from "styled-components";
import { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import ShareForm from "./ShareForm";
import { detailInquire, ChatInquire } from "@/services/main";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/assets/Loader";

/**
 *
 * @param {object} id
 * @param {string} what
 */

const ModalLayout = ({ id, what }) => {
  const { modalId, setModalId } = useState(id);
  const {
    data: voteData,
    isLoading: voteIsLoading,
    error: voteError,
  } = useQuery({
    queryKey: ["voteId", id],
    queryFn: () => {
      console.log(id);
      return detailInquire(id);
    },
    enabled: !!id,
  });

  const {
    data: chatData,
    isLoading: chatIsLoading,
    error: chatError,
  } = useQuery({
    queryKey: ["commentId", id],
    queryFn: () => {
      return ChatInquire(id);
    },
    enabled: !!id,
  });

  const detailData = voteData?.data.data.vote;
  const [participateState, setParticipate] = useState(detailData?.participate);
  const [modalVisible, setModalVisible] = useState(false);

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
    <>
      {chatError || voteError ? (
        <>
          {chatError}|{voteError}
        </>
      ) : (
        <>
          {voteIsLoading || chatIsLoading ? (
            <Loader />
          ) : (
            detailData && (
              <ModalMainContainer className="modal">
                <Container>
                  <VoteHead
                    totalCount={detailData?.totalCount}
                    endDate={detailData?.endDate}
                    what={what}
                    isOwner={detailData?.isOwner}
                    active={detailData?.active}
                    username={detailData?.username}
                    categoryValue={detailData?.category}
                  ></VoteHead>
                  <MainContent
                    title={detailData?.title}
                    content={detailData?.content}
                  ></MainContent>

                  <ButtonLayout
                    participate={participateState}
                    isOwner={detailData?.isOwner}
                    active={detailData?.active}
                    options={detailData?.options}
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
                      <ShareForm />
                    </Modal>
                  )}
                </Container>
                <Chat>
                  <ChatForm data={chatData} />
                  <ChatWriteForm participate={detailData?.participate} />
                </Chat>
              </ModalMainContainer>
            )
          )}
        </>
      )}
    </>
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
