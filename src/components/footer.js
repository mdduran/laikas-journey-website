import * as React from "react";
import { Grid, Link } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <>
      <Grid container item justify="center">
        <StaticImage
          src="../images/logoNA.png"
          alt="Night Apparatus Logo"
          width={160}
          height={160}
        />
      </Grid>
      <footer>
        <Grid container justify="center">
          <Grid container justify="center" item>
            <Link href="#">Contact us</Link>
          </Grid>
          <Grid container justify="center" item>
            <Link href="#">Privacy Policy</Link>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
