import styled from "styled-components";
import { Palette } from "../../styles/Palette";
const Input = ({ name, placeholder }) => {
  return (
    <InputStyle>
      <label htmlFor="1">{name}</label>
      <input
        id="1"
        maxLength="50"
        rows="3"
        name={name}
        placeholder={placeholder}
      />
    </InputStyle>
  );
};

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

    resize: none;
  }

  label {
    margin-bottom: 5px;
  }
`;

export default Input;

/* Rectangle 226 */
