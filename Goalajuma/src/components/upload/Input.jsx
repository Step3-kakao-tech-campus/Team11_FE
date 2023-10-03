import styled from "styled-components";
import { Palette } from "../../styles/Palette";
const Input = ({ name, placeholder }) => {
  return (
    <InputStyle>
      <label>{name}</label>
      <input name={name} placeholder={placeholder} />
    </InputStyle>
  );
};

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 300;
  align-items: flex-start;
  color: #999999;

  input {
    width: 286px;
    height: 43px;
    border-radius: 6px;
    border: 1px solid #4f4f4f;
    box-shadow: 0px 2px 2px rgba(126, 126, 126, 0.25);
    padding-left: 20px;
    font-size: 13px;
  }
  label {
    margin-bottom: 5px;
  }
`;

export default Input;

/* Rectangle 226 */
