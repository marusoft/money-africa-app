import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:  #30656F;
    --font-weight: 500;
    --links-color :  #111111;
    --links-font-size: 16px;
    --helvetica-font-weight-medium: 400;
    --helvetica-primary: 'Helvetica Neue', sans-serif;
    --helvetica-secondary: 'Helvetica 55 Roman', sans-serif;
    --helvetica-font-weight-bold: 700;
    --links-primary-color: #c03e21;
}

body{
  overflow:hidden ;
  width: 100vw;
}

a{
    text-decoration: none;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Gascogne';
  }

  .container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      /* border:2px solid black; */
  }
`;

export default GlobalStyle;
