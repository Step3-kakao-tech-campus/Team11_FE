import styled from "styled-components";
import Img from "./Img";
import { GoX } from "react-icons/go";

const ChoiceOption = ({ id, data, inputOption, deleteOption, src }) => {
  const optionId = id + 1;

  return (
    <div>
      <Container>
        {optionId > 2 ? (
          <div
            className="xbutton"
            id={id}
            onClick={(e) => {
              deleteOption(e);
            }}
          >
            <GoX id={id} />
          </div>
        ) : (
          <div className="box"></div>
        )}
        <input
          value={data?.name}
          onChange={(e) => {
            inputOption(e);
          }}
          placeholder={`선택지 ${optionId}`}
          className="nameInput"
          id={id}
        ></input>
        <Img id={id} src={src}></Img>
      </Container>
    </div>
  );
};

const Container = styled.div`
  background-color: #ececec;
  width: 162px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .xbutton {
    position: relative;
    left: 65px;
    top: 5px;
  }
  .nameInput {
    border: 1px solid #4f4f4f;
    border-radius: 6px;
    height: 33px;
    width: 108px;
    padding-left: 10px;

    box-shadow: 0px 2px 2px rgba(126, 126, 126, 0.25);
  }
  .box {
    margin-top: 15px;
  }
`;

export default ChoiceOption;
