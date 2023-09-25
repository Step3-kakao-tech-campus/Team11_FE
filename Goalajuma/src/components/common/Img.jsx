import styled from "styled-components";

const ImgStyle = styled.img`
  width: 111px;
`;
export const ImgContainer = styled.div`
  width: 111px;
  height: 111px;
  overflow: hidden;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fdfd00; */
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
