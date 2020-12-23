import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:wght@100;500&display=swap');
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          display: flex;
          padding: 0px;
          height: 100vh;
          width: 100vw;
          font-family: 'Texturina', serif;
          margin: 0px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          background: linear-gradient(-45deg, #d687fa, #FFF2DA, #85058d);
          background-size: 400% 400%;
          animation: gradientBG 10s ease infinite;
          overflow: scroll;
        }
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
`