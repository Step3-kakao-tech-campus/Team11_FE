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
        <StyledButton onClick={()=>navigate(-1)}> 
          <GoChevronLeft />
        </StyledButton>
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
  font-size: 30px;
  font-weight: bold;
  color: #9EB0EA;
  width: 100%;
  margin: 0 auto;
  position: relative;
  right: 60px;

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
    margin-left: 30px;
    color: #9EB0EA;
  }
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .input{
    position: relative;
    bottom: 60px;
  }
`
const StyledButton = styled.button`
  border: none;
  position: relative;
  bottom: 10px;
  right: 30px;
  background: none;
  font-size:30px;
`
