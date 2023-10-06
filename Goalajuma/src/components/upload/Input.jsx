import styled from "styled-components";
import { useRecoilState } from "recoil";
import { titleState } from "../../utils/UploadAtom";

/**
 * @param {object} param
 * @param {string} param.name
 * @param {string} param.placeholder
 */
const Input = ({ name, placeholder }) => {
  const [upload, setUpload] = useRecoilState(titleState);
  return (
    <InputStyle>
      <label htmlFor="title">{name}</label>
      <input
        id="title"
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          setUpload(e.target.value);
        }}
      />
    </InputStyle>
  );
};
//onChange 에서 쓰로틀? 로 해야하나 암튼 글자 입력 완료 시 setUpload 할수있게하기
//함수 새로 만들기...(인풋에서 손 땠을때 실행되게 하기...)

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 300;
  align-items: flex-start;
  color: #999999;

  input {
    width: 286px;
    height: 43px;
    font-size: 14px;
    padding-left: 20px;

    border-radius: 6px;
    border: 1px solid #4f4f4f;

    box-shadow: 0px 2px 2px rgba(126, 126, 126, 0.25);
  }

  label {
    margin-bottom: 5px;
  }
`;

export default Input;

/* Rectangle 226 */
