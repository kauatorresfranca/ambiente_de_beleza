import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const colors = {
  primary: "#FFBF00",
  secondary: "#080706",
  background: "#f5f5f5",
  title: "#333",
  text: "#666",
  white: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .container {
    max-width: ${breakpoints.desktop};
    margin: 0 auto;
  }

`;