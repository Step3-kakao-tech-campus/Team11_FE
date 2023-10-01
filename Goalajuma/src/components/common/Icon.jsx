import styled from "styled-components";

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
