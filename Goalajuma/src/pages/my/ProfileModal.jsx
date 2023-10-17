import { MainMyData } from "../../components/common/mypage/MyPageData";
import styled from "styled-components";
import { Palette } from "../../styles/Palette";
import { Button } from "@mui/material";

const ProfileModal = () => {
  const datas = MainMyData.data;
  return (
    <div>
      <Img src={`public/image/${datas.image}`} alt="사용자 프로필" />
      <InputBox>
        <label htmlFor="nickname">닉네임</label>
        <input type="text" id="nickname" placeholder={datas.nickName}/>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" placeholder={datas.email} />
      </InputBox>
      <ButtonBox>
        <SubmitButton>저장</SubmitButton>
        <LogOutButton>로그아웃</LogOutButton>
      </ButtonBox>
    </div>
  );
}

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
  box-shadow: 0 0 0 2.3px #ffffff, 0 0 0 4.6px ${Palette["point_blue"]};
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
  margin: 10px 0 0 60%;
  right: 10%;
`
export default ProfileModal;