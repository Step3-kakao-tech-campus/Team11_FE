import MainButton from "./MainButton";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * @param {object} props
 * @param {function} props.changeVotes 투표시 실행. 참여 여부 변경
 * @param { array } props.options 옵션 리스트
 * @param { boolean } props.participate 참여여부
 * @param { boolean } props.isOwner 투표자인지의 여부
 * @param {string} props.active  투표 상태
 */

const ButtonLayout = ({
  changeVotes,
  options,
  participate,
  isOwner,
  active,
  voteId,
  location,
}) => {
  return (
    <>
      <Container>
        {options?.map((option, index) => {
          return (
            <MainButton
              location={location}
              changeVotes={changeVotes}
              key={index}
              name={option.optionName}
              value={option.optionRatio}
              number={option.optionCount}
              src={option.image}
              choiced={option.choice}
              participate={participate && participate}
              isOwner={isOwner}
              active={active}
              id={option.id}
              voteId={voteId}
            />
          );
        })}
      </Container>
    </>
  );
};

ButtonLayout.propTypes = {
  changeVotes: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  participate: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1rem;
  text-align: center;
`;

export default ButtonLayout;
