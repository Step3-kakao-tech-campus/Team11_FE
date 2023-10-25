import styled from "styled-components";
const ErrorScreen = ({ status, message, error }) => {
  return (
    <ErrorStyle>
      <p>
        {status} {error}
      </p>
      <p> {message} 🥲</p>
    </ErrorStyle>
  );
};

const ErrorStyle = styled.div`
  margin-top: 15rem;
  & p:first-child {
    font-size: 30px;
    color: #de0000;
  }
  & p:last-child {
    font-size: 20px;
  }
`;

export default ErrorScreen;
