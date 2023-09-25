import styled from "styled-components"

const Button = ({children, color, onClick, disabled, className}) => {
	return (
		<StyledButton color={color} className = {className} disabled={disabled} onClick={(e) => {
			e.preventDefault()
			onClick(e)
		}}>
			{children}
		</StyledButton>
	)
}

export default Button;

const StyledButton = styled.button`
	width: 280px;
	height: 50px;
  border-radius: 50px;
  font-size: 15px;
	font-weight: bold;
	background-color: ${(props)=> props.color};
`