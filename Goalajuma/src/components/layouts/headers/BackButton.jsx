import { GoChevronLeft } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Back>
        <GoChevronLeft fontSize={35} onClick={() => navigate(-1)}/>
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
`;

export default BackButton;
