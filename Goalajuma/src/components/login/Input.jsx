import styled from "styled-components";

const Input = ({type, value, className, onChange, placeholder, id}) => {
  return (
    <StyledInput 
      id={id}
      className={className}
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
    />
  )
}

export default Input;

const StyledInput = styled.input`
  width: 240px;
  padding:15px 20px;
  border-radius: 50px;
  font-size: 15px;
`