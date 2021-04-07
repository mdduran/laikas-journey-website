import * as React from "react";
import styled from "styled-components";
import palette from "../styles";
import { Box, Container } from "@material-ui/core";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Description from "../components/description";

// markup
const Main = styled.main`
  color: ${palette.mintCream};
  background-color: ${palette.deepPurple};
`;

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Main>
          <title>Laika's Journey</title>
          <Container maxWidth="sm">
            <Box my={3}>
              <Description />
              <Container>Screenshot Gallery Goes Here</Container>
            </Box>
          </Container>
        </Main>
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;
