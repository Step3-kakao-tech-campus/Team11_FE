import styled from "styled-components";
import PropTypes from 'prop-types'

/**
 *
 * @param {object} prop 
 * @param {string} prop.src 이미지 주소
 * @param {string} size 이미지 크기
 */
const Img = ({ src, size }) => {
  return (
    <ImgContainer size={size}>
      <ImgStyle src={`public/image/${src}`} size = {size}>
        {/* 백엔드 배포 주소 나오면 수정 */}
        {/* vite는 public 주소 제공 x */}
      </ImgStyle>
    </ImgContainer>
  );
};

  Img.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string
  }
  const ImgStyle = styled.img`
    width: ${(props) => props.size || "111px"};
    min-height: ${(props) => props.size || "50px"};
  `;
  const ImgContainer = styled.div`
    width: ${(props) => props.size || "111px"};
    height: ${(props) => props.size || "111px"};
    overflow: hidden;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

export default Img;
