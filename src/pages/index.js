import * as React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../components/layout";
import Description from "../components/description";
import Gallery from "../components/gallery";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <title>Laika's Journey</title>
        <Container>
          <Box my={6}>
            <Description />
            <Gallery />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;
