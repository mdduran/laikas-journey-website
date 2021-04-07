import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import palette from "../styles";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import BackgroundImage from "gatsby-background-image";
import { GatsbyImage } from "gatsby-plugin-image";

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "galaxy-backdrop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 96, height: 96)
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;
  const logoData = data.logo.childImageSharp.gatsbyImageData;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={palette.richBlackFogra}
    >
      <Grid container style={{ padding: "0.5em 0 0 0.5em" }}>
        <Grid item>
          <GatsbyImage image={logoData} alt="Laika's Journey Logo" />
        </Grid>
        <Grid item>
          <h2 style={{ padding: "0 1em" }}>Laika's Journey</h2>
        </Grid>
      </Grid>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-color: ${palette.richBlackFogra};
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
