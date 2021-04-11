import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import palette from "../styles";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import BackgroundImage from "gatsby-background-image";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

const BackgroundSection = () => {
  const { placeholder } = useStaticQuery(
    graphql`
      query {
        placeholder: file(relativePath: { eq: "galaxy-backdrop.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  );

  // Set image data
  const imageData = getImage(placeholder);
  const bgImage = convertToBgImage(imageData);

  return (
    <BackgroundImage Tag="section" {...bgImage}>
      <Grid container style={{ padding: "0.5em 0 0 0.5em" }}>
        <Grid item>
          <StaticImage
            src="../images/logo.png"
            alt="Laika's Journey Logo"
            width={96}
            height={96}
          />
        </Grid>
        <Grid item>
          <h2
            style={{
              padding: "0.5em 1em",
              cursor: "default",
              textShadow: `-1px 0 4px ${palette.richBlackFogra}, 0 1px 4px ${palette.richBlackFogra}, 1px 0 4px ${palette.richBlackFogra}, 0 -1px 4px ${palette.richBlackFogra}`,
            }}
          >
            Laika's Journey
          </h2>
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
