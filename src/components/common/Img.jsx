import styled from "styled-components";
import PropTypes from "prop-types";

/**
 *
 * @param {object} prop
 * @param {string} prop.src 이미지 주소
 * @param {string} size 이미지 크기
 * @param {boolean} server 서버에서 이미지를 가져올지 여부
 */
const Img = ({ src, size, server }) => {
  return (
    <ImgContainer size={size}>
      {server ? (
        <ImgStyle src={`${src}`} size={size}></ImgStyle>
      ) : (
        <ImgStyle src={`/image/${src}`} size={size}></ImgStyle>
      )}
    </ImgContainer>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  server: PropTypes.bool,
};

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
