import { InputStyle } from "./input";
import styled from "styled-components";

const TextArea = ({ name }) => {
  return (
    <TextAreaStyle>
      <label htmlFor="2">{name}</label>
      <textarea id="2" placeholder="상세설명을 입력해주세요">
        dd
      </textarea>
    </TextAreaStyle>
  );
};

const TextAreaStyle = styled(InputStyle)`
  margin-top: 2rem;
  textarea {
    width: 100%;
    border: 1px solid #4f4f4f;
  }
`;

export default TextArea;
