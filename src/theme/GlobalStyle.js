import { createGlobalStyle } from "styled-components";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

const GlobalStyle = createGlobalStyle`
  ::selection {
        background: #FFC312;
    }

    body {
        font-size: 16px;
        color: white;
        background: #282c34;
    }

    a {
        text-decoration:none;
        color: #fff;
    }

`;
export default GlobalStyle;
