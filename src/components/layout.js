import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import palette from '../styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import { Helmet } from 'react-helmet';
import '@fontsource/trispace';
import BackgroundSection from './backgroundSection';
import Footer from '../components/footer';

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
const theme = createTheme();

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="site">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Laika's Journey</title>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/favicon/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/favicon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/images/favicon/site.webmanifest"></link>
          </Helmet>
          <AppBar position="sticky">
            <BackgroundSection />
          </AppBar>
          <div className="content">{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
