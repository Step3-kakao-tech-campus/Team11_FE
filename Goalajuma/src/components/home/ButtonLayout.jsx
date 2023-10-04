import MainButton from "../common/voteButton/MainButton";
import styled from "styled-components";
/**
 * @param { list } options
 */
const ButtonLayout = ({ onClick, options, participate, isOwner, active }) => {
  //서버에서 받아온 value, number 값

  const optionList = options;

  //choice 하나만 선택할 수 있는 함수 구현해서 프롭스로 보내주기

  return (
    <>
      <Container>
        {optionList?.map((option) => {
          return (
            <MainButton
              onClick={onClick}
              key={option.id}
              id={option.id}
              name={option.optionName}
              value={option.optionRatio}
              number={option.optionCount}
              src={option.image}
              choiced={option.choiced}
              participate={participate}
              isOwner={isOwner}
              active={active}
            />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

export default ButtonLayout;
