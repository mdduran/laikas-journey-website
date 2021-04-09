import * as React from "react";
import { Box, Container } from "@material-ui/core";
import Layout from "../components/layout";
import Description from "../components/description";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <title>Laika's Journey</title>
        <Container maxWidth="sm">
          <Box my={3}>
            <Description />
            <Container>Screenshot Gallery Goes Here</Container>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;
