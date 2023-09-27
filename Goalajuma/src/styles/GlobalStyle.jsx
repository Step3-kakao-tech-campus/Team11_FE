import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "NanumGothic";
    line-height: 1.5;
    
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
  margin-top: 5rem;
  padding-bottom: 6rem;
}
 
`;

export default GlobalStyle;
