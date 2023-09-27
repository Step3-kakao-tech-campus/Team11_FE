import styled from "styled-components";

const MainContent = ({ title, content }) => {
  return (
    <MainContentStyle>
      <h1>Q. {title}</h1>
      <span>{content}</span>
    </MainContentStyle>
  );
};
const MainContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  margin: 0 1.5rem 2rem 1.5rem;
  width: 90%;
  h1 {
    font-size: 23px;
    font-weight: 900;
    color: #000000;
    margin-bottom: 20px;
  }
  span {
    font-size: 13px;
  }
`;

export default MainContent;
