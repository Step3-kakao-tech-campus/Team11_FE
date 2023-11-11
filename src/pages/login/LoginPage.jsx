import styled from "styled-components";
import InputGroup from "@/components/login/InputGroup";
import Button from "@/components/login/Button";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "@/styles/Container";
import useValid from "@/hooks/useValid";
import { loginInquire } from "@/services/login";
import routes from "@/routes";
import { useSetRecoilState } from "recoil";
import { isLoginInState } from "@/utils/AuthAtom";

const LoginPage = () => {
  const setisLoginIn = useSetRecoilState(isLoginInState);
  const [value, setValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setValue((prev) => ({ ...prev, [id]: value }));
  };

  // 유효성 검사 text 반환을 위한 커스텀 훅
  const { validText, isValid } = useValid(value);

  const handleLogin = () => {
    if (isValid.isEmail && isValid.isPassword) {
      loginInquire(value)
        .then(() => {
          setisLoginIn(true);
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    } else {
      alert("입력 내용이 올바르지 않습니다.");
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

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
            navigate(routes.signup);
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
          onKeyDown={handleEnterKey}
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
          onKeyDown={handleEnterKey}
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
      </ButtonGroup>
    </MainContainer>
  );
};

export default LoginPage;

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
      background-color: #d3d3d6;
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
