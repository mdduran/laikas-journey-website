import * as React from "react";
import { createGlobalStyle } from "styled-components";
import palette from "../styles";
import { AppBar } from "@material-ui/core";
import "@fontsource/trispace";
import BackgroundSection from "./backgroundSection";
import Footer from "../components/footer";
const GlobalStyle = createGlobalStyle`
  html, #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
    width: 100%;
    color: ${palette.mintCream};
    background-color: ${palette.deepPurple};
  }

  body {
    background-color: ${palette.richBlackFogra};
    color: ${palette.mintCream};
    margin: 0 auto;
    max-width: 650;
    font-family: "Trispace", sans-serif;
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

  .site {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .content {
    flex-grow: 1;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <div className="site">
        <AppBar position="sticky">
          <BackgroundSection />
        </AppBar>
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}
