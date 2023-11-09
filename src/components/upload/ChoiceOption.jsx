import styled from "styled-components";
import Img from "./Img";
import { GoX } from "react-icons/go";
import PropTypes from "prop-types";

/**
 *
 * @param {object} param
 * @param {number} param.id
 * @param {object} param.data
 * @param {func} param.inputOption
 * @param {func} param.deleteOption
 *  @param {string} param.src
 * @returns
 */

const ChoiceOption = ({ id, data, inputOption, deleteOption, src }) => {
  const optionId = id + 1;

  return (
    <div>
      <Container>
        <div
          className="xbutton"
          id={id}
          onClick={(e) => {
            deleteOption(e);
          }}
        >
          <GoX className="xIcon" id={id} />
        </div>

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
ChoiceOption.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  inputOption: PropTypes.func.isRequired,
  deleteOption: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
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

  .xIcon:hover {
    background-color: #d2d2d2;
    border-radius: 10px;
  }
  .nameInput {
    border: 1px solid #4f4f4f;
    border-radius: 6px;
    height: 33px;
    width: 108px;
    padding-left: 10px;

    box-shadow: 0px 2px 2px rgba(126, 126, 126, 0.25);
  }
`;

export default ChoiceOption;
