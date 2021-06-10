import { createGlobalStyle } from "styled-components";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

const GlobalStyle = createGlobalStyle`
  ::selection {
        background: #61dafb;
    }

    body {
        font-size: 16px;
        transition: 600ms;
        color: white;
        background: #282c34;
    }

    .bolder {
        font-weight: 900;
    }
    .bold {
        font-weight: 700;
    }
    .text-center {
        justify-content: center;
    }
`;
export default GlobalStyle;
