import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InputGroup from "../../components/login/InputGroup"
import Button from "../../components/login/Button";
import { useState } from "react";


const LoginPage = () => {
  const [value, setValue] = useState({email:"", password:""})
  const handleClick = () => {
    window.history.back();
  }

  const handleOnChange = (e) => {
    const {id, value} = e.target
    setValue((prev)=>({...prev, [id]:value }))
  }

  return (
    <>
      <Header>
        <ArrowBackIosNewIcon onClick={handleClick}/>
        <Title>Goalajuma</Title>
      </Header>
      <Subheader>
        <span>계정이 없으신가요?</span>
        <button>회원가입하기</button>
      </Subheader>
      <Group>
        <InputGroup
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          label="Email"
          value={value.email}
          onChange={handleOnChange}
        />
        <InputGroup
          id="password"
          type="password"
          placeholder="******"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
        />
      </Group>
      <Button>로그인</Button>
    </>
  );
};

export default LoginPage;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #9EB0EA;
  width: 100%;
  margin: 0 auto;
  position: relative;
  bottom: 10px;
  right: 20px;
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
  position: relative;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`