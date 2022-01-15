import * as React from "react";
import { Grid, Link } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import palette from "../styles";

const Footer = () => {
  return <>
    <Grid container item justifyContent="center">
      <StaticImage
        src="../images/logoNA.png"
        alt="Night Apparatus Logo"
        width={160}
        height={160}
      />
    </Grid>
    <footer>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center" item>
          <Link
            style={{
              color: `${palette.deepPurple}`,
            }}
            href="mailto:nightapparatus@gmail.com"
          >
            <b>Contact us</b>
          </Link>
        </Grid>
        <Grid container justifyContent="center" item>
          <Link
            style={{
              color: `${palette.deepPurple}`,
            }}
            href="https://docs.google.com/document/d/1bWUzPLy7Du4QtvvuBGPOfWvOlXVfR2N_HKFWSxiVBNI/edit?usp=sharing"
          >
            <b>Privacy Policy</b>
          </Link>
        </Grid>
      </Grid>
    </footer>
  </>;
};

export default Footer;
