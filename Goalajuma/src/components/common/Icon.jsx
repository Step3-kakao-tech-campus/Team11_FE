import styled from "styled-components";

const Icon = ({ children }) => {
  return <IconCss>{children}</IconCss>;
};

const IconCss = styled.div`
  font-size: 26px;
`;

export default Icon;
