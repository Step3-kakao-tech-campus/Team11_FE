import styled from "styled-components";
import { Palette } from "@/styles/Palette";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useValid from "@/hooks/useValid";
import { useSetRecoilState } from "recoil";
import { isLoginInState } from "@/utils/AuthAtom";
import { newNameInquire, newEmailInquire } from "@/services/my";
import Swal from "sweetalert2";
import { removeToken } from "@/services/login";
import { emailCheckInquire,nicknameCheckInquire } from "@/services/signup";
import Input from "@/components/login/Input";

/**
 *
 * @param {string} myNickName
 * @param {string} myEmail
 * @param {string} img
 * @returns
 */
const ProfileModal = ({ myNickName, myEmail, img }) => {
  const originInfo = { name: myNickName, email: myEmail };
  const [newInfo, setNewInfo] = useState({
    name: myNickName,
    email: myEmail,
    password: "",
  });
  const [input, setInput] = useState(false);
  const { validText, isValid } = useValid(newInfo);
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const setisLoginIn = useSetRecoilState(isLoginInState);

  const handleMyInfo = () => {
    setInput((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setNewInfo((prev) => ({ ...prev, [id]: value }));
    if(id === "name") {
      setCheckName(false)
    } else if(id === "email"){
      setCheckEmail(false)
    }
  };

  const handleSubmit = () => {
    if (newInfo.name != originInfo.name) {
      newNameInquire(newInfo.name);
    }
    if (newInfo.email != originInfo.email) {
      newEmailInquire(newInfo.email);
    }
    setInput((prev) => !prev);
    alert("저장되었습니다!");
  };

  const handleLogOut = () => {
    Swal.fire({
      icon: "info",
      html: "로그아웃 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
      confirmButtonColor: "#429f50",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        setisLoginIn(false);
        removeToken();
      }
    });
  };

  const nicknameCheck=()=> {
    nicknameCheckInquire(newInfo.name)
    .then(()=>{
      setCheckName(true);
      Swal.fire({
        icon: "success",
        text: "사용가능한 이름 입니다!",
        confirmButtonColor: "#429f50",
        })
    })
    .catch(err=>{
      console.log(err)
      Swal.fire({
        icon: "error",
        text: "이미 사용중인 이름입니다.",
        confirmButtonColor: "#d33",
      })
    })
  }
  useEffect(() => {
    console.log(              !isValid.isName ||
      !isValid.isEmail ||
      checkName && checkEmail)
  },[isValid.isName, isValid.isEmail, checkName, checkEmail])

  const emailCheck=()=>{
    emailCheckInquire(newInfo.email)
    .then(()=>{
      setCheckEmail(true)
      Swal.fire({
        icon: "success",
        text: "사용가능한 이메일 입니다!",
        confirmButtonColor: "#429f50",
        })
    })
    .catch(err=>{
      console.log(err)
      Swal.fire({
        icon: "error",
        text: "이미 사용중인 이메일입니다.",
        confirmButtonColor: "#d33",
      })
    })
  }
  console.log(isValid.isName, isValid.isEmail, checkName, checkEmail);
  
  return (
    <div>
      <Img src={`/image/${img}`} alt="사용자 프로필" />
      {!input && (
        <ProfileButton onClick={() => handleMyInfo()}>수정하기</ProfileButton>
      )}
      <InputBox>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          id="name"
          defaultValue={myNickName}
          disabled={!input}
          onChange={handleOnChange}
        />
        {input && <StyledButton onClick={nicknameCheck} disabled={!newInfo.name}>중복 검사</StyledButton>}
        <div className="error">{validText.nameText}</div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          defaultValue={myEmail}
          disabled={!input}
          onChange={handleOnChange}
        />
        {input && <StyledButton onClick={emailCheck} disabled={!newInfo.email}>중복 검사</StyledButton>}
        <div className="error">{validText.emailText}</div>
      </InputBox>
      <ButtonBox>
        {input ? (
          <SubmitButton
            onClick={() => handleSubmit()}
            disabled={
              !isValid.isName ||
              !isValid.isEmail 
              // !(checkName || checkEmail)
            }
          >
            저장
          </SubmitButton>
        ) : (
          <ProfileButton onClick={() => handleLogOut()}>로그아웃</ProfileButton>
        )}
      </ButtonBox>
    </div>
  );
};

ProfileModal.propTypes = {
  myNickName: PropTypes.string.isRequired,
  myEmail: PropTypes.string.isRequired,
  img: PropTypes.string,
};

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
const StyledButton = styled.button`
  border-radius: 50px;
  border: 1px solid transparent;
  font-size: 10px;
  background-color: #9eb0ea;
  padding: 0.6em;
  font-weight: 500;
  color: #fff;
  position: relative;
  width: 25%;
  bottom: 37.5px;
  left: 238px;
  cursor: pointer;
  &:hover{
    background-color: #8C9CCF;
  }
`;
const SubmitButton = styled.button`
  margin-top: 20px;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.disabled ? Palette.button_gray : Palette.button_blue};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 0px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 3px;
`;
const ProfileButton = styled.div`
  display: inline-block;
  font-size: 13px;
  margin-left: 16.9rem;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background-color: ${Palette.button_gray};
  }
`;
export default ProfileModal;
