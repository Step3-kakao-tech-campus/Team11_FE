import styled from "styled-components";
const ErrorScreen = ({ error }) => {
  // status={error.data.status}
  // error={error.data.error}
  // message={error.data.message}
  return (
    <ErrorStyle>
      <p>
        {error?.data?.status} {error?.data?.error}
      </p>
      <p> {error?.data?.message} 🥲</p>
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
