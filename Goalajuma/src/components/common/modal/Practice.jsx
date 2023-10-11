import { useState } from 'react';
import Modal from './Modal'
import {ModalTest} from './ModalTest';
import ModalLayout from './ModalLayout';
// import HomeLayout from "../home/HomeLayout"
// import { ButtonTest } from "../home/ButtonTest.js";
import { HomeContainer } from "../../../styles/Container";
import Button from '../../login/Button';

const Practice = () => {
  // 모달 보임 여부 결정 
  const [modalVisible, setModalVisible] = useState(false) 
  const data = ModalTest.data.vote;

  const openModal = () =>{
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <>
      <Button onClick={openModal} color='red'>Open Modal</Button>
      {
        modalVisible && 
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}>
            <HomeContainer>
              <ModalLayout data={data} what="main" />
            </HomeContainer>
        </Modal>
      }
    </>
  )
}

export default Practice