import styled from "styled-components";
import { Palette } from "@/styles/Palette";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {string} nickName
 * @param {string} email 
 * @param {string} img
 * @returns 
 */
const ProfileModal = ({nickName, email, img}) => {
  const [newInfo, setNewInfo] = useState({name: nickName, newEmail: email});
  const [input, setInput] = useState(false);
  const nicknameRef = useRef(null);
  const emailRef = useRef(null);
  

  const handleMyInfo = () => {
    setInput(prev => !prev)
    if (!input) {
      nicknameRef.current.defaultValue = nickName;
      emailRef.current.defaultValue = email;
    } else {
      nicknameRef.current.value = nickName;
      emailRef.current.value = email;
      setNewInfo({newName: nickName, newEmail: email});
    }
  }

  const handleOnChange = (e) => {
    const { id, value} = e.target;
    setNewInfo((prev) => ({...prev, [id]: value}));
  };

  const handleSubmit = () => {
    console.log(newInfo);
  }
  
  return (
    <div>
      <Img src={`public/image/${img}`} alt="사용자 프로필" />
      {!input && <Modify onClick={() => handleMyInfo()}>수정하기</Modify>}
      <InputBox>
        <label htmlFor="nickname">닉네임</label>
        <input 
          type="text" 
          id="name" 
          defaultValue={nickName}
          ref={nicknameRef}
          disabled={!input}  
          onChange={handleOnChange}
        />
        <label htmlFor="email">이메일</label>
        <input 
          type="email" 
          id="email" 
          defaultValue={email} 
          ref={emailRef}
          disabled={!input}
          onChange={handleOnChange}
        />
      </InputBox>
      <ButtonBox>
        {input && <SubmitButton onClick={() => handleSubmit()}>저장</SubmitButton>}
        {input ? <LogOutButton onClick={() => handleMyInfo()}>취소</LogOutButton>:
         <LogOutButton>로그아웃</LogOutButton>}
      </ButtonBox>
    </div>
  );
}

ProfileModal.propTypes = {
  nickName : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  img : PropTypes.string,
};


const Modify = styled.div`
  font-size: 8px;
  text-align: right;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 0;
  >label {
    color: ${Palette.font_blue};
    font-size: 12px;
    margin-bottom: 5px;
  }
  >input {
    height: 2em;
    border: 0;
    border-bottom: 1px solid ${Palette.button_blue};
    margin-bottom: 20px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
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
  background-color: ${Palette.button_blue};
  border: 0px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 3px;
`
const LogOutButton = styled.div`
  font-size: 8px;
  margin: 10px 0 0 85%;
  /* right: 10%; */
`
export default ProfileModal;