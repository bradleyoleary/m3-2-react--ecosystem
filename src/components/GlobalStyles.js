import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }


    body {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6, p, ul, il {
        padding: 0;
        margin: 0;
    }

    //typical p font size is 16px
    p {
        font-size: 16px;
    }
`

export default GlobalStyle;