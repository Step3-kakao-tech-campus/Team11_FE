import { InputStyle } from "./input";
import styled from "styled-components";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { uploadState } from "../../utils/Atom";

/**
 *
 * @param {string} name
 */
const TextArea = ({ name }) => {
  const [upload, setUpload] = useRecoilState(uploadState);
  const textArea = useRef();

  const textAreaHeight = () => {
    textArea.current.style.height = 0;
    //초기화해야함(안해주면 scrollHeight이 누적됨.)
    textArea.current.style.height = textArea.current.scrollHeight + "px";
  };
  return (
    <TextAreaStyle>
      <label htmlFor="2">{name}</label>
      <textarea
        id="2"
        placeholder="상세설명을 입력해주세요"
        ref={textArea}
        onBlur={(e) => {
          setUpload({ ...upload, content: e.target.value });
        }}
        onChange={textAreaHeight}
        rows={1}
      ></textarea>
    </TextAreaStyle>
  );
};

const TextAreaStyle = styled(InputStyle)`
  margin-top: 2rem;
  textarea {
    width: 271px;
    height: 28px;
    padding: 15px 20px 0 15px;
    line-height: 140%;

    border: 1px solid #4f4f4f;
    border-radius: 6px;

    box-shadow: 0px 2px 2px rgba(126, 126, 126, 0.25);
    resize: none;
  }
`;

export default TextArea;
