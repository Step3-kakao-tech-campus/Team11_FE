import styled from "styled-components"
import {GoChevronLeft} from "react-icons/go"
import { useNavigate } from "react-router-dom";
import Button from "../../components/login/Button";
import InputGroup from "../../components/login/InputGroup";
import { useState } from "react";

const SignUpPage = () => {
  const [allAgree, setAllAgree] = useState(false)
  const [agreeService, setAgreeService] = useState(false)
  const [agreePollcy, setAgreePollcy] = useState(false)
  const [value, setValue] = useState({
    name:"",
    email:"", 
    password:"",
    checkPW:""
  })
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    const {id, value} = e.target
    setValue((prev)=>({...prev, [id]:value }))
  }
  const handleAllAgree = (e)=>{
    const value = e.target.checked
    setAgreeService(value)
    setAgreePollcy(value)

  }
  const handleAgree = (e)=>{
    const{name, checked} = e.target
    if(name === 'service-agree'){
      setAgreeService(checked)
    } else if(name === 'policy-agree'){
      setAgreePollcy(checked)
    }

    if(!checked){
      setAllAgree(false)
    }
  }

  return (
    <>
      <Header>
        <StyledIcon onClick={()=>navigate(-1)}> 
          <GoChevronLeft />
        </StyledIcon>
        <Title>Goalajuma</Title>
      </Header>
      <Group>
        <InputGroup
          className="name"
          id="name"
          type="name"
          placeholder="닉네임을 입력해주세요"
          label="닉네임"
          value={value.name}
          onChange={handleOnChange}
        />
        <InputGroup
          className="email"
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          label="Email"
          value={value.email}
          onChange={handleOnChange}
        />
        <InputGroup
          className="password"
          id="password"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
        />
        <InputGroup
          className="checkPW"
          id="checkPW"
          type="checkPW"
          placeholder="비밀번호를 다시 입력해주세요"
          label="비밀번호 확인"
          value={value.password}
          onChange={handleOnChange}
        />
      </Group>
      <StyledButton onClick={()=>navigate("/")}>중복 검사</StyledButton>
      <PolicyGroup>
        <Policy>
          <input type="checkbox" name="all-agree" checked={agreeService && agreePollcy} onChange={handleAllAgree} />
          <label htmlFor="all-agree">전체 동의</label>
        </Policy>
        <Policy>
          <input type="checkbox" name="service-agree" checked={agreeService} onChange={handleAgree} />
          <label htmlFor="all-agree">서비스 이용 약관 동의</label>
        </Policy>
        <Policy>
          <input type="checkbox" name="policy-agree" checked={agreePollcy} onChange={handleAgree} />
          <label htmlFor="all-agree">개인 정보 수집 동의</label>
        </Policy>
      </PolicyGroup>
      <ButtonGroup>
        <Button color="#9EB0EA" onClick={()=>navigate("/login")}>가입 완료</Button>
      </ButtonGroup>
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
  position: relative;
  top: 40px;
  align-items: center;
  .input:last-child{
    margin-bottom: 50px;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;  
  align-items: center;
  position: relative;
  top: 100px;
`
const StyledIcon = styled.button`
  border: none;
  background: none;
  font-size:35px;
  margin: 0 5px;
`
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #9EB0EA;
  position: relative;
  bottom: 3px;
  left: 25px;
`;
const StyledButton = styled.button`
  border-radius: 50px;
	border: 1px solid transparent;
  font-size: 15px;
	background-color: #9EB0EA;
  padding: 0.6em 1.2em;
  font-weight: 500;
  color: #fff;
  position: absolute;
  top: 290px;
  right: 60px;
`
const PolicyGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  top: 70px;
  text-align: left;
`
const Policy = styled.div`
  display: flex;
  gap: 5px;
  input{
    border-radius: 50px;
  }
`