import * as React from "react";
import { createGlobalStyle } from "styled-components";
import palette from "../styles";
import { AppBar } from "@material-ui/core";
import "@fontsource/trispace";
import BackgroundSection from "./backgroundSection";
const GlobalStyle = createGlobalStyle`
  html, #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${palette.richBlackFogra};
    color: ${palette.mintCream};
    margin: 0 auto;
    max-width: 650;
    font-family: "Trispace", sans-serif;
    height: 100%;
  }
  h1, h2, h6 {
    color: ${palette.mintCream};
  }
  footer {
    display: block;
    background-color: ${palette.russianViolet};
    color: ${palette.richBlackFogra};
    padding: 0.5em;
    text-align: center;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <AppBar position="sticky">
        <BackgroundSection className="nebulaBackground" />
        {children}
      </AppBar>
    </>
  );
}
