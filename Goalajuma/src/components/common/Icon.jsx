import styled from "styled-components";
import PropTypes from "prop-types";

/**
 *
 * @param {object} prop
 * @param {boolean} prop.reverse 죄우반전 여부
 * @param {string} prop.size 기본값 26px
 * @param {string} prop.color 기본값 검정
 * @param {function} prop.onClick 클릭 이벤트
 * @param {string} prop.hoverColor 호버 시 색깔
 * @param {string} prop.hoverBackColor 호버 시 배경색깔
 *
 */
const Icon = ({
  children,
  reverse,
  size,
  color,
  onClick,
  hoverColor,
  hoverBackColor,
}) => {
  return (
    <IconCss
      reverse={reverse}
      size={size}
      color={color}
      onClick={onClick}
      hoverBackColor={hoverBackColor}
      hoverColor={hoverColor}
    >
      {children}
    </IconCss>
  );
};

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  hoverColor: PropTypes.string,
  hoverBackColor: PropTypes.string,
};
const IconCss = styled.div`
  font-size: ${(props) => props.size || "26px"};
  transform: ${(props) => props.reverse && "scaleX(-1)"};
  color: ${(props) => props.color || "#000000"};
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBackColor};
  }
`;

export default Icon;
