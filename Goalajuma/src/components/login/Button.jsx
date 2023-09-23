import styled from "styled-components"

const Button = ({children, onClick, disabled, className}) => {
	return (
		<StyledButton className = {className} disabled={disabled} onClick={(e) => {
			e.preventDefault()
			onClick(e)
		}}>
			{children}
		</StyledButton>
	)
}

export default Button;

const StyledButton = styled.button`
	padding:15px 120px;
  border-radius: 50px;
  font-size: 15px;
	font-weight: bold;
	background-color: #9EB0EA;
`