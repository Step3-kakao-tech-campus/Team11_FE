import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "NanumGothic";
    line-height: 1.5;
    margin:0;
    outline: none;

  }
  * {
    text-decoration: none;
}
  #root {
  max-width: 390px;
  max-height: 844px;
  margin: 0 auto;
  
  text-align: center;
  margin-top: 55px;
  padding-bottom: 6rem;
}
*{
  font-family: "NanumGothic";
}

`;

export default GlobalStyle;
