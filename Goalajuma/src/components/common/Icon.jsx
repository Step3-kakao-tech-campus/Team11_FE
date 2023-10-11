import styled from "styled-components";

/**
 *
 * @param {boolean} reverse 죄우반전 여부
 * @param {string} size 기본값 26px
 * @param {string} color 기본값 검정
 * @param {function} onClick 클릭 이벤트
 *
 */
const Icon = ({ children, reverse, size, color, onClick }) => {
  return (
    <IconCss reverse={reverse} size={size} color={color} onClick={onClick}>
      {children}
    </IconCss>
  );
};

const IconCss = styled.div`
  font-size: ${(props) => props.size || "26px"};
  transform: ${(props) => props.reverse && "scaleX(-1)"};
  color: ${(props) => props.color || "#000000"};
`;

export default Icon;
