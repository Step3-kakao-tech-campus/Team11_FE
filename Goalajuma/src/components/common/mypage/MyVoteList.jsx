import ActiveSign from "./ActiveSign";
import { GoChevronRight } from "react-icons/go";
import styled from "styled-components";
import { Palette } from "@/styles/Palette";
import PropTypes from "prop-types";
import Modal from "../modal/Modal";
import { ModalTest } from "../modal/ModalTest";
import ModalLayout from "../modal/ModalLayout";
import { useState } from "react";

/**
 * @param {object} data
 * @returns {JSX.Element}
 */
const MyVoteList = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const datas = ModalTest.data.vote;

  const clickModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <MyVote onClick={clickModal}>
      <VoteInfo>
        <ActiveSign active={data.active}/>
        <div>{data.title}</div>
      </VoteInfo>
      <Vote >
        더보기
        <GoChevronRight className="modal"/>
      </Vote>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}>
            <ModalLayout data={datas} />
        </Modal>
      )}
    </MyVote>
  )
}

MyVoteList.propTypes = {
  data: PropTypes.object.isRequired
}
const MyVote = styled.div`
  height: 4rem;
  display: flex;
  border-top: 1px solid ${Palette.percent_gray};
  border-bottom: 1px solid ${Palette.percent_gray};
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${Palette.percent_gray}
  }
`;
const VoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  font-size: 17px;
`;
const Vote = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  & > .modal {
    font-size: 20px;
    color: ${Palette.font_blue};
  }
`;

export default MyVoteList;