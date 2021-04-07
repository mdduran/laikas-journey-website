import * as React from "react";
import { Box, Paper } from "@material-ui/core";
import palette from "../styles";

export default function Description() {
  return (
    <>
      <Box>
        <Paper
          style={{ backgroundColor: palette.deepTaupe, padding: "1em 2em" }}
          elevation={2}
        >
          In 1957, the Soviet Union sent a dog into orbit around the earth in
          the Sputnik II. It was reported that she died before she could
          complete her mission... But did she? Unless that's just a cover up for
          her real mission... Use the powerful boost of the Sputnik II to jump
          from planet to planet and explore the unique dangers that are found in
          Outer Space. Guide Laika on her continued mission to explore the
          universe in the name of the Motherland!
        </Paper>
      </Box>
    </>
  );
}
