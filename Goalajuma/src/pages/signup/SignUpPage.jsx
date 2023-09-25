import styled from "styled-components"
import {GoChevronLeft} from "react-icons/go"
import { useNavigate } from "react-router-dom";
import Button from "../../components/login/Button";
import InputGroup from "../../components/login/InputGroup";
import { useState } from "react";

const SignUpPage = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({email:"", password:""})
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
      <Button onClick={()=>navigate("/")}>가입 완료</Button>
    </>
  )
}

export default SignUpPage

const Header = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  left: 30px;
  width: 360px;
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
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #9EB0EA;
  width: 100%;
  margin: 0 auto;
  position: relative;
  right: 60px;

`;