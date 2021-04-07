import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Link } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        nalogo: file(relativePath: { eq: "logoNA.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 128, height: 128)
          }
        }
      }
    `
  );
  const logoData = data.nalogo.childImageSharp.gatsbyImageData;
  return (
    <footer>
      <Grid container justify="center">
        <Grid container justify="center" item>
          <GatsbyImage image={logoData} alt="Night Apparatus Logo" />
        </Grid>
        <Grid container justify="center" item>
          <Link href="#">Contact us</Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
