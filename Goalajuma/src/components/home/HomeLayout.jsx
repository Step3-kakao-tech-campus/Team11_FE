import { MainContainer } from "@/styles/Container";
import ButtonLayout from "../common/voteButton/ButtonLayout";
import VoteHead from "../common/voteButton/VoteHead";
import MainContent from "./MainContent";
import VoteBottom from "../common/voteButton/VoteBottom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "../common/modal/Modal";
import { ModalTest } from "../common/modal/ModalTest";
import ModalLayout from "../common/modal/ModalLayout";
import { useQuery } from "react-query";
import { detailInquire } from "@/services/main";

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
  const [modalData, setModalData] = useState(null);
  const [optionState, setOptionState] = useState(options);
  const [count, setCount] = useState(0);

  const { data: detailData } = useQuery(
    ["votes", id],
    async () => detailInquire(id),
    { enabled: !!id }
  );

  console.log(modalData);
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

  const clickModal = () => {
    setModalVisible(true);
    setModalData(detailData);
  };
  const closeModal = () => {
    setModalVisible(false);
    setModalData(null);
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

        <VoteBottom onClick={clickModal} onClickShare={share}></VoteBottom>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
          >
            <ModalLayout data={modalData} what="main" />
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
