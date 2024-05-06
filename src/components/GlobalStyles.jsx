import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #c2c2c2 0%, #f7f7f7 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  button,
  input {
    display: block;
  }
`;
