import styled from "styled-components";
import { useRecoilState } from "recoil";
import { uploadState } from "../../utils/Atom";

const Input = ({ name, placeholder }) => {
  const [upload, setUpload] = useRecoilState(uploadState);
  return (
    <InputStyle>
      <label htmlFor="1">{name}</label>
      <input
        id="1"
        maxLength="50"
        rows="3"
        name={name}
        placeholder={placeholder}
        onBlur={(e) => {
          setUpload({ ...upload, title: e.target.value });
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
