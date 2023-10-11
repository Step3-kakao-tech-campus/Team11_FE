import styled from "styled-components";

const ImgStyle = styled.img`
  width: 111px;
  min-height: 50px;
`;
const ImgContainer = styled.div`
  width: 111px;
  height: 111px;
  overflow: hidden;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = ({ src }) => {
  return (
    <ImgContainer>
      <ImgStyle src={`public/image/${src}`}>
        {/* //백엔드 배포 주소 나오면 수정 */}
        {/* vite는 public 주소 제공 x */}
      </ImgStyle>
    </ImgContainer>
  );
};

export default Img;
