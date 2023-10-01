import styled from "styled-components";

const Label = ({children, htmlFor}) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  )
}

export default Label;

const StyledLabel = styled.label`
  display:block;
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: #333;

`