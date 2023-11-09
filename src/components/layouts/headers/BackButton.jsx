import { GoChevronLeft } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import Icon from "@/components/common/Icon";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Back>
        <Icon size="35px" onClick={() => navigate(-1)}>
          <GoChevronLeft/>
        </Icon>
      </Back>
    </div>
  )
};

// 이거 없애고 Icon 컴포넌트 사용하기 
const Back  = styled.button`
  margin-top: 3px;
  margin-left: 5px;
  color: #7192FF;
  background-color: #fff;
  border-width: 0px;
  cursor: pointer;
`;

export default BackButton;
