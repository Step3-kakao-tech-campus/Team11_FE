import styled from "styled-components";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Button from "../../components/login/Button";
import InputGroup from "../../components/login/InputGroup";
import { useState } from "react";
import { JoinContainer } from "../../styles/Container";
import useValid from "../../hooks/useValid";
import routes from "@/routes";
import Swal from "sweetalert2";
import {
  emailCheckInquire,
  signupInquire,
  nicknameCheckInquire,
} from "@/services/signup";

const SignUpPage = () => {
  const [allAgree, setAllAgree] = useState(false);
  const [agreeService, setAgreeService] = useState(false);
  const [agreePollcy, setAgreePollcy] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  // 유효성 검사 text 반환을 위한 커스텀 훅
  const { validText, isValid } = useValid(value);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setValue((prev) => ({ ...prev, [id]: value }));
    if (id === "name") {
      setCheckName(false);
    } else if (id === "email") {
      setCheckEmail(false);
    }
  };
  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreeService(value);
    setAgreePollcy(value);
  };
  const handleAgree = (e) => {
    const { name, checked } = e.target;
    if (name === "service-agree") {
      setAgreeService(checked);
    } else if (name === "policy-agree") {
      setAgreePollcy(checked);
    }
    if (!checked) {
      setAllAgree(false);
    }
  };

  const handleSignUp = () => {
    if (
      isValid.isName &&
      isValid.isEmail &&
      isValid.isPassword &&
      isValid.isPasswordConfirm
    ) {
      signupInquire(value)
        .then(() => {
          navigate(routes.login);
        })
        .catch((err) => alert(err.data.message));
    } else {
      alert("입력 내용이 올바르지 않습니다.");
    }
  };
  const nicknameCheck = () => {
    nicknameCheckInquire(value.name)
      .then(() => {
        setCheckName(true);
        Swal.fire({
          icon: "success",
          text: "사용가능한 이름 입니다!",
          confirmButtonColor: "#429f50",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: "이미 사용중인 이름입니다.",
          confirmButtonColor: "#d33",
        });
      });
  };

  const emailCheck = () => {
    emailCheckInquire(value.email)
      .then(() => {
        setCheckEmail(true);
        Swal.fire({
          icon: "success",
          text: "사용가능한 이메일 입니다!",
          confirmButtonColor: "#429f50",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "이미 사용중인 이메일입니다.",
          confirmButtonColor: "#d33",
        });
      });
  };
  return (
    <JoinContainer>
      <Header>
        <StyledIcon onClick={() => navigate(-1)}>
          <GoChevronLeft />
        </StyledIcon>
        <Title>Goalajuma</Title>
      </Header>
      <Group>
        <InputContainer>
          <InputGroup
            className="name"
            id="name"
            type="name"
            placeholder="닉네임을 입력해주세요"
            label="닉네임"
            value={value.name}
            onChange={handleOnChange}
          />
          <StyledButton onClick={nicknameCheck} disabled={!value.name}>
            중복 검사
          </StyledButton>
          <StyledErr>{validText.nameText}</StyledErr>
        </InputContainer>
        <InputContainer>
          <InputGroup
            className="email"
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            label="Email"
            value={value.email}
            onChange={handleOnChange}
          />
          <StyledButton onClick={emailCheck} disabled={!value.email}>
            중복 검사
          </StyledButton>
        </InputContainer>
        <StyledErr>{validText.emailText}</StyledErr>
        <InputGroup
          className="password"
          id="password"
          type="password"
          placeholder="8글자 이상 입력해주세요"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
        />
        <StyledErr>{validText.passwordText}</StyledErr>
        <InputGroup
          className="passwordConfirm"
          id="passwordConfirm"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          label="비밀번호 확인"
          value={value.passwordConfirm}
          onChange={handleOnChange}
        />
        <StyledErr>{validText.passwordConfirmText}</StyledErr>
      </Group>
      <PolicyGroup>
        <Policy>
          <input
            type="checkbox"
            name="all-agree"
            checked={agreeService && agreePollcy}
            onChange={handleAllAgree}
          />
          <label htmlFor="all-agree">전체 동의</label>
        </Policy>
        <Policy>
          <input
            type="checkbox"
            name="service-agree"
            checked={agreeService}
            onChange={handleAgree}
          />
          <label htmlFor="all-agree">서비스 이용 약관 동의</label>
        </Policy>
        <Policy>
          <input
            type="checkbox"
            name="policy-agree"
            checked={agreePollcy}
            onChange={handleAgree}
          />
          <label htmlFor="all-agree">개인 정보 수집 동의</label>
        </Policy>
      </PolicyGroup>
      <ButtonGroup>
        <Button
          color="#9EB0EA"
          onClick={handleSignUp}
          disabled={
            isValid.isName &&
            isValid.isEmail &&
            isValid.isPassword &&
            isValid.isPasswordConfirm &&
            checkName &&
            checkEmail &&
            agreePollcy &&
            agreeService
              ? false
              : true
          }
        >
          가입 완료
        </Button>
      </ButtonGroup>
      <DuplicateErr>
        {!isValid.isName ||
        !isValid.isEmail ||
        !isValid.isPassword ||
        !isValid.isPasswordConfirm ||
        (checkEmail && checkName)
          ? ""
          : "중복검사를 진행해주세요"}
      </DuplicateErr>
    </JoinContainer>
  );
};

export default SignUpPage;

const Header = styled.div`
  display: flex;
  position: relative;
  width: 360px;
  bottom: 25px;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
const InputContainer = styled.div`
  height: 100px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 15px;
`;
const StyledIcon = styled.button`
  border: none;
  background: none;
  font-size: 35px;
  margin: 0 5px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #9eb0ea;
  position: relative;
  bottom: 3px;
  left: 25px;
`;
const StyledButton = styled.button`
  border-radius: 50px;
  border: 1px solid transparent;
  font-size: 13px;
  background-color: #9eb0ea;
  padding: 0.6em;
  font-weight: 500;
  color: #fff;
  position: relative;
  width: 30%;
  bottom: 40px;
  left: 90px;
  cursor: pointer;
  &:hover {
    background-color: #8c9ccf;
  }
`;
const PolicyGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  bottom: 20px;
  left: 10px;
  text-align: left;
  margin-top: 50px;
`;
const Policy = styled.div`
  display: flex;
  gap: 5px;
`;
const StyledErr = styled.div`
  color: #e45151;
  font-size: 13px;
  position: relative;
  right: 60px;
  bottom: 10px;
`;
const DuplicateErr = styled.div`
  color: #e45151;
  font-size: 13px;
  position: relative;
  right: 8px;
  top: 20px;
  align-items: center;
`;
