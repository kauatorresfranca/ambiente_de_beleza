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
  title: "#101828",
  text: "#4a5565",
  white: "#fff",
  lightPrimary: "rgba(252, 229, 97, 0.3)",
  darkPrimary: "#a77501ff",
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: ${breakpoints.desktop};
    margin: 0 auto;
  }

`;