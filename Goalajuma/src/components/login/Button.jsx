import styled from "styled-components"

const Button = ({children, color, onClick, disabled, className}) => {
	return (
		<StyledButton color={color} className={`button ${className}`} disabled={disabled} onClick={(e) => {
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
	border: 1px solid transparent;
  font-size: 15px;
	background-color: ${(props)=> props.color};
  padding: 0.6em 1.2em;
  font-weight: 500;
`