import {createGlobalStyle} from "styled-components";
import 'pretendard/dist/web/variable/pretendardvariable.css';

export const GlobalStyled = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;

        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    body {
        font-family: "Pretendard Variable", system-ui, -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
        background-color: ${({theme}) => theme.White};
        line-height: 1.5;
    }

    @media (min-width: 500px) {
        #root {
            width: 500px;
        }
    }

    @media (max-width: 500px) {
        #root {
            width: 100vw;
        }
    }

    #root {
        box-shadow: rgba(100, 100, 111, 0.5) 0 7px 29px 0;
        margin: 0 auto;
        min-height: 100vh;
        position: relative;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    input, textarea, select {
        font-family: inherit;
        border: none;
        outline: none;
        padding: 0;
    }

    button {
        font-family: inherit;
        border: none;
        background: none;
        cursor: pointer;
    }

    a {
        font-family: inherit;
        text-decoration: none;
        color: inherit;
        outline: none;
    }
`;
