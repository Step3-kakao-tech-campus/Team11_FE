import styled from "styled-components";
import { Palette } from "@/styles/Palette";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import useValid from "@/hooks/useValid";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";

/**
 * 
 * @param {string} myNickName
 * @param {string} myEmail 
 * @param {string} img
 * @returns
 */
const ProfileModal = ({myNickName, myEmail, img}) => {
  const [newInfo, setNewInfo] = useState({name: myNickName, email: myEmail, password: "",});
  const [input, setInput] = useState(false);
  const nicknameRef = useRef(null);
  const emailRef = useRef(null);
  const {validText, isValid} = useValid(newInfo);
  const navigate = useNavigate();
  
  console.log(isValid);

  const handleMyInfo = () => {
    setInput((prev) => !prev);
    if (!input) {
      nicknameRef.current.defaultValue = myNickName;
      emailRef.current.defaultValue = myEmail;
    } else {
      nicknameRef.current.value = myNickName;
      emailRef.current.value = myEmail;
      setNewInfo({name: myNickName, email: myEmail});
      setInput(false);
    }
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setNewInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    console.log(newInfo);
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate(routes.home);
  }
  
  return (
    <div>
      <Img src={`/image/${img}`} alt="사용자 프로필" />
      {!input && <Modify onClick={() => handleMyInfo()}>수정하기</Modify>}
      <InputBox>
        <label htmlFor="nickname">닉네임</label>
        <input 
          type="text" 
          id="name" 
          defaultValue={myNickName}
          ref={nicknameRef}
          disabled={!input}
          onChange={handleOnChange}
        />
        <div className="error">{validText.nameText}</div>
        <label htmlFor="email">이메일</label>
        <input 
          type="email" 
          id="email" 
          defaultValue={myEmail} 
          ref={emailRef}
          disabled={!input}
          onChange={handleOnChange}
        />
        <div className="error">{validText.emailText}</div>
      </InputBox>
      <ButtonBox>
        {input && <SubmitButton onClick={() => handleSubmit()} disabled={!isValid.isName && !isValid.isEmail}>저장</SubmitButton>}
        {input ? <LogOutButton onClick={() => handleMyInfo()}>취소</LogOutButton>:
         <LogOutButton onClick={() => handleLogOut()}>로그아웃</LogOutButton>}
      </ButtonBox>
    </div>
  );
}

ProfileModal.propTypes = {
  myNickName : PropTypes.string.isRequired,
  myEmail : PropTypes.string.isRequired,
  img : PropTypes.string,
};

const Modify = styled.div`
  font-size: 13px;
  text-align: right;
  cursor: pointer;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 0;
  > label {
    color: ${Palette.font_blue};
    font-size: 12px;
    margin-bottom: 5px;
  }
  > input {
    height: 2em;
    border: 0;
    border-bottom: 1px solid ${Palette.button_blue};
    margin-bottom: 10px;
  }
  .error {
    color: #e45151;
    font-size: 13px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 95px;
  height: 95px;
  margin: 10px auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000000000px;
  box-shadow: 0 0 0 2.3px #ffffff, 0 0 0 4.6px ${Palette.point_blue};
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => (props.disabled ? Palette.button_gray : Palette.button_blue)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 0px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 3px;

`
const LogOutButton = styled.div`
  width: 4rem;
  font-size: 13px;
  margin: 10px 0 0 85%;
  cursor: pointer;
  /* right: 10%; */
`;
export default ProfileModal;
