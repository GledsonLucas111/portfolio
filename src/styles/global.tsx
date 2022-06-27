import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
  }
  body{
    background-color: #f2f2f2;
    ::-webkit-scrollbar {
      width: 5px;
  }
    ::-webkit-scrollbar-track {
    background: #fff;
    }
    ::-webkit-scrollbar-thumb {
    background-color: #011726;    
  }
  }
`;
