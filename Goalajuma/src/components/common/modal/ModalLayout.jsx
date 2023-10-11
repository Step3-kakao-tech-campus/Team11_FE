import { MainContainer } from "../../../styles/Container";
import ButtonLayout from "../../home/ButtonLayout";
import VoteHead from "../../home/VoteHead";
import MainContent from "../../home/MainContent";
import VoteButtom from "../voteButton/VoteButtom";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from 'prop-types';
/**
 *
 * @param {object} data
 * @param {string} what
 */

const ModalLayout = ({ data, what }) => {
  const {
    voteCount,
    participate,
    isOwner,
    title,
    content,
    createDate,
    endDate,
    active,
    options,
  } = data;
  console.log(options);
  const [participateState, setParticipate] = useState(participate);

  const clickButton = () => {
    setParticipate(!participateState);
  };
  // const clickModal = () => {
  //   alert("모달창!!!!");
  // };
  const share = () => {
    alert("공유하기 모달창 !!!");
  };

  return (
    <MainContainer>
      <Container>
        <VoteHead
          voteCount={voteCount}
          createDate={createDate}
          endDate={endDate}
          what={what}
        ></VoteHead>
        <MainContent title={title} content={content}></MainContent>

        <ButtonLayout
          participate={participateState}
          isOwner={isOwner}
          active={active}
          options={options}
          onClick={clickButton}
        ></ButtonLayout>

        <VoteButtom clickShare={share}></VoteButtom>
      </Container>
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
  data: PropTypes.object,
  what: PropTypes.string
}
export default ModalLayout;
