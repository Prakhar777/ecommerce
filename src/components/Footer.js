import {
  AppBar,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
function Footer() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <AppBar component="footer" position="static" className={`bg_theme`}>
          <Container>
            <Grid container>
              <Grid sx={{ pt: 2, pb: 2 }} item xs={12} md={12}>
                <Typography align="center" variant="body2">
                  Copyright &copy; 2022 | All rights reserved.
                </Typography>
                <Typography align="center" sx={{ pt: 1 }} variant="body2">
                  Phone Number: 8979077740 | Email:
                  prakharvashishtha100@gmail.com
                </Typography>
                <Typography align="center" sx={{ pt: 1 }} variant="body2">
                  All images used in the website belong to their respective
                  owner. <br />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </StyledEngineProvider>
    </>
  );
}

export default Footer;
