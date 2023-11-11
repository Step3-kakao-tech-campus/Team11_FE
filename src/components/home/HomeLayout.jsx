import { MainContainer } from "@/styles/Container";
import ButtonLayout from "../common/voteButton/ButtonLayout";
import VoteHead from "../common/voteButton/VoteHead";
import MainContent from "./MainContent";
import VoteBottom from "../common/voteButton/VoteBottom";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../common/modal/Modal";
import ModalLayout from "../common/modal/ModalLayout";
import { useNavigate, useParams } from "react-router-dom";
import ShareForm from "../common/modal/ShareForm";

/**
 *
 * @param {object} props.data
 * @param {string} props.what
 */

const HomeLayout = ({ data, what, route }) => {
  const navigate = useNavigate();
  const { id: modalId } = useParams();

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
  } = data;
  const [participateState, setParticipate] = useState(
    participate && participate
  );
  const [modalVisible, setModalVisible] = useState(modal);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [optionState, setOptionState] = useState(options);
  const [totalCountState, setTotalCountState] = useState(totalCount);

  const changeVotes = (participate, result) => {
    const resultData = result?.result;
    setParticipate(participate);

    const copyOptions = optionState?.map((choice, index) => {
      return {
        ...choice,
        optionCount: resultData[index]?.optionCount,
        optionRatio: resultData[index]?.optionRatio,
        choice: resultData[index].choice,
      };
    });

    setOptionState(copyOptions);
    setTotalCountState(result?.total);
  };

  const clickModal = (data) => {
    navigate(route + data.id);
    setModalVisible(true);
  };
  const closeModal = () => {
    navigate(route);
    setModalVisible(false);
  };

  const shareCloseModal = () => {
    setShareModalVisible(false);
  };
  const shareOpenModal = () => {
    setShareModalVisible(true);
  };
  return (
    <MainContainer>
      <Container>
        <VoteHead
          totalCount={totalCountState}
          endDate={endDate}
          what={what}
          username={username}
          active={active}
          isOwner={isOwner}
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
          voteId={id}
        ></ButtonLayout>

        <VoteBottom
          onClick={() => clickModal(data)}
          onClickShare={shareOpenModal}
          modal={true}
          id={id}
        ></VoteBottom>
        {shareModalVisible && (
          <Modal
            visible={shareModalVisible}
            closable={true}
            maskClosable={true}
            onClose={shareCloseModal}
          >
            <ShareForm id={id} />
          </Modal>
        )}
        {modalVisible && modalId == id && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
          >
            <ModalLayout
              what="main"
              optionState={optionState}
              click={changeVotes}
            />
          </Modal>
        )}
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
