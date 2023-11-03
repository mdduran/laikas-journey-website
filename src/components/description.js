import * as React from 'react';
import { Grid, Paper, Button, Link } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import palette from '../styles';
import PlanetIcon from '../images/svg/planetIcon.svg';

export default function Description() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid container item justifyContent="center">
          <Button
            component="label"
            size="large"
            variant="contained"
            startIcon={<PlanetIcon />}
            endIcon={<PlanetIcon />}
            style={{
              backgroundColor: palette.spaceCadet,
            }}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.NightApparatus.Laika&pcampaignid=web_share"
              target="_blank"
              rel="norefferer"
              underline="none"
              color={palette.mintCream}
            >
              Download
              <br />
              Now
            </Link>
          </Button>
        </Grid>
        <StaticImage
          src="../images/google-play-badge.png"
          alt="Get it on Google Play"
          width={215}
          height={83}
        />
        <Paper
          style={{
            backgroundColor: palette.deepTaupe,
            padding: '1em 2em',
            marginBottom: '1em',
          }}
          elevation={2}
        >
          In 1957, the Soviet Union launched Sputnik II, the second artificial
          satellite to orbit Earth. On board was Laika, a stray dog who became
          the first living creature to orbit the planet. Rumor has it, she's
          still traveling across the stars to this day!
          <br />
          <br />
          Now, in a thrilling new game, you can guide Laika on her continued
          mission to explore the universe! Use the powerful boost of the Sputnik
          II to jump from planet to planet, exploring strange new worlds and
          encounter unique dangers.
          <br />
          <br />
          As Laika, you will need to use all of your skills and cunning to
          survive. You will need to dodge asteroids and hot stars, navigate
          wormholes, and team up with alien creatures to reach your destination.
          With your courage and determination, you can complete your mission and
          become one of the greatest space explorers of all time!
        </Paper>
      </Grid>
    </>
  );
}
