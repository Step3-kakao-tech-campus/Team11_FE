import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "NanumGothic";
    //폰트 이게 아닌데
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    
  }
  #root {
    max-width: 393px;
    height: 852px;
    padding: 0 48px;
    margin-top: 5rem;

  }
`;

export default GlobalStyle;
