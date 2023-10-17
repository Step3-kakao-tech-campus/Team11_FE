import { useState } from 'react';
import Modal from './Modal'
import {ModalTest} from './ModalTest';
import ModalLayout from './ModalLayout';
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
          <ModalLayout data={data} what="main" />
        </Modal>
      }
    </>
  )
}

export default Practice