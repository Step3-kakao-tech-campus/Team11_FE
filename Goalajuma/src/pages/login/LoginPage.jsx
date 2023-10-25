import styled from "styled-components";
import InputGroup from "@/components/login/InputGroup";
import Button from "@/components/login/Button";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "@/styles/Container";
import useValid from "@/hooks/useValid";
// import {useMutation, useQueryClient} from"react-query";

const LoginPage = () => {
  //const queryClient = useQueryClient();
  const [value, setValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setValue((prev) => ({ ...prev, [id]: value }));
  };

  // 유효성 검사 text 반환을 위한 커스텀 훅
  const { validText, isValid } = useValid(value);

  // const mutation = useMutation(
  //   (data) => {
  //     return fetch('/auth/login',{
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     }).then((res)=>res.json())
  //   },
  //   {
  //     //mutation 성공 시 실행될 함수
  //     onSuccess: (data)=>{
  //       console.log('로그인 성공',data)
  //       localStorage.setItem('token', data.token)  
  //       navigate("/")
  //       // 전역 상태로 토큰 저장
  //       queryClient.setQueryData('token',data.token)
  //     }
  //   }
  // )
  const handleLogin =()=>{
    if(isValid.isEmail && isValid.isPassword){
      // mutation.mutate(value)
      navigate("/")
    }else{
      console.log('입력 내용이 올바르지 않습니다.')
    }
  }
  return (
    <MainContainer>
      <Header>
        <StyledIcon onClick={() => navigate(-1)}>
          <GoChevronLeft />
        </StyledIcon>
        <Title>Goalajuma</Title>
      </Header>
      <Subheader>
        <span>계정이 없으신가요?</span>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하기
        </button>
      </Subheader>
      <Group>
        <InputGroup
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          label="Email"
          value={value.email}
          valid={!isValid.isEmail}
          onChange={handleOnChange}
        />
        <StyledErr>{validText.emailText}</StyledErr>
        <InputGroup
          className="input"
          id="password"
          type="password"
          placeholder="******"
          label="비밀번호"
          value={value.password}
          valid={!isValid.isPassword}
          onChange={handleOnChange}
        />
        <StyledErr>{validText.passwordText}</StyledErr>
      </Group>
      <ButtonGroup>
        <Button
          className="firstButton"
          color="#9EB0EA"
          onClick={handleLogin}
          disabled={isValid.isEmail && isValid.isPassword ? false : true}
        >
          로그인
        </Button>
        <Button color="#FEE500">
          <Icon>
            <RiKakaoTalkFill
              style={{
                paddingRight: "8px",
                fontSize: "20px",
                position: "relative",
                top: "4px",
              }}
            />
            카카오 로그인
          </Icon>
        </Button>
      </ButtonGroup>
    </MainContainer>
  );
};

export default LoginPage;

const Icon = styled.div`
  color: #333;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #9eb0ea;
  position: relative;
  bottom: 3px;
  left: 25px;
`;
const Header = styled.div`
  display: flex;
  position: relative;
  width: 360px;
`;
const Subheader = styled.div`
  font-size: 16px;
  position: relative;
  top: 30px;
  button {
    margin-left: 40px;
    color: #9eb0ea;
    border: none;
    padding: 8px 15px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
    background-color:#d3d3d6 ;
    }
  }


`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;
  top: 50px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;
  top: 50px;
  .firstButton {
    margin-top: 50px;
  }
`;
const StyledIcon = styled.button`
  border: none;
  background: none;
  font-size: 35px;
  margin: 0 5px;
  cursor: pointer;
`;
const StyledErr = styled.div`
  color: #e45151;
  font-size: 13px;
  position: relative;
  right: 60px;
  bottom: 10px;
`;

