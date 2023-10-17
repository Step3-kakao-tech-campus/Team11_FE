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
    font-family: "NanumGothic";
  }
  #root {
  max-width: 390px;
  max-height: 844px;
  margin: 0 auto;
  
  text-align: center;
  margin-top: 55px;
  padding-bottom: 6rem;
  }

  @media screen and (min-width: 1100px) {

  #background{
    width: 100vw;
    height: 100vh;
      background-image: url('public/image/background.jpg');
      position: fixed;
    }
    #root{
      position: relative;
      left: 25%;
    }

  } 

`;

export default GlobalStyle;
