import styled from "styled-components";
import InputGroup from "../../components/login/InputGroup"
import Button from "../../components/login/Button";
import { useState } from "react";
import {GoChevronLeft} from "react-icons/go"
import {RiKakaoTalkFill} from "react-icons/ri"
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [value, setValue] = useState({email:"", password:""})
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {id, value} = e.target
    setValue((prev)=>({...prev, [id]:value }))
  }

  return (
    <>
      <Header>
        <StyledIcon onClick={()=>navigate(-1)}> 
          <GoChevronLeft />
        </StyledIcon>
        <Title>Goalajuma</Title>
      </Header>
      <Subheader>
        <span>계정이 없으신가요?</span>
        <button onClick={()=>{navigate("/signup")}}>회원가입하기</button>
      </Subheader>
      <Group>
        <InputGroup
          className="input"
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          label="Email"
          value={value.email}
          onChange={handleOnChange}
        />
        <InputGroup
          className="input"
          id="password"
          type="password"
          placeholder="******"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
        />
      </Group>
      <Group>
        <Button color="#9EB0EA" onClick={()=>{navigate("/")}}>로그인</Button>
        <Button color="#FEE500"> <Icon><RiKakaoTalkFill style={{paddingRight: '8px', fontSize: '20px'}}/></Icon>카카오 로그인</Button>
      </Group>
    </>
  );
};

export default LoginPage;

const Icon=styled.i`
  position: relative;
  top: 4px;
`
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #9EB0EA;
  position: relative;
  bottom: 3px;
  left: 25px;
`;
const Header = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  left: 30px;
  width: 360px;
`
const Subheader = styled.div`
  font-size:16px;
  position: absolute;
  top: 120px;
  button{
    border: none;
    font-size: 15px;
    border-radius: 50px;
    padding: 10px 15px;
    margin-left: 35px;
    color: #9EB0EA;
  }
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  top: 100px;
  align-items: center;
  .input:last-child{
    margin-bottom: 50px;
  }
`
const StyledIcon = styled.button`
  border: none;
  background: none;
  font-size:35px;
  margin: 0 5px;
`
