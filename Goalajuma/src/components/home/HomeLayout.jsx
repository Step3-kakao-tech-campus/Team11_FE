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

/**
 *
 * @param {object} props.data
 * @param {string} props.what
 */

const HomeLayout = ({ data, what }) => {
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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [optionState, setOptionState] = useState(options);
  // const [count, setCount] = useState(0);

  // const Data = ModalTest.data.vote;
  const changeVotes = (result) => {
    setParticipate(!participateState);

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

  const clickModal = (data) => {
    setModalVisible(true);
    setModalId(data.id);
    const { data: Data } = useQuery(
      `/votes/${id}`,
      async () => detailInquire(id),
      {
        enabled: !!id,
      }
    );
    console.log(id);
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
    console.log(data);
  };
  const closeModal = () => {
    setModalVisible(false);
    setModalId(null);
  };
  const share = () => {
    alert("공유하기");
  };
  return (
    <MainContainer>
      <Container>
        <VoteHead
          totalCount={totalCount}
          endDate={endDate}
          what={what}
          username={username}
          active={active}
          isOwner={isOwner}
          categoryValue={category}
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
          onClickShare={share}
        ></VoteBottom>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
          >
            <ModalLayout id={modalId} what="main" />
          </Modal>
        )}
      </Container>
    </MainContainer>
  );
};
HomeLayout.propTypes = {
  data: PropTypes.string,
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
