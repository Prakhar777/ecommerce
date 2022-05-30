import { AppBar, Stack, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { NavLink } from "react-router-dom";
import axios from "axios";

function ProductsHeader() {
  const [home, setHome] = useState(require("../img/home.webp"));
  const [fashion, setFashion] = useState(require("../img/fashion.webp"));
  const [mobile, setMobile] = useState(require("../img/mobile.webp"));
  const [appliances, setAppliances] = useState(
    require("../img/appliances.webp")
  );
  const [electronics, setElectronics] = useState(
    require("../img/electronics.webp")
  );
  const [grocery, setGrocery] = useState(require("../img/grocery.webp"));
  const [toys, setToys] = useState(require("../img/toys.webp"));

  return (
    <>
      <AppBar
        component="section"
        position="static"
        sx={{ py: 1 }}
        className={`bg_white`}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <NavLink to="/ecommerce" className={`text-center`}>
              <img className={`product_images`} src={electronics} />
              <Typography className={`text_grey`} align="center">
                Electronics
              </Typography>
            </NavLink>

            <NavLink to="/appliances" className={`text-center`}>
              <img className={`product_images`} src={appliances} />
              <Typography className={`text_grey`} align="center">
                Kitchen Appliances
              </Typography>
            </NavLink>

            <NavLink to="/fashion" className={`text-center`}>
              <img className={`product_images`} src={fashion} />
              <Typography className={`text_grey`} align="center">
                Fashion
              </Typography>
            </NavLink>
            <NavLink to="/mobile" className={`text-center`}>
              <img className={`product_images`} src={mobile} />
              <Typography className={`text_grey`} align="center">
                Mobile
              </Typography>
            </NavLink>
            <NavLink to="/home" className={`text-center`}>
              <img className={`product_images`} src={home} />
              <Typography className={`text_grey`} align="center">
                Home
              </Typography>
            </NavLink>
            <NavLink to="/grocery" className={`text-center`}>
              <img className={`product_images`} src={grocery} />
              <Typography className={`text_grey`} align="center">
                Grocery
              </Typography>
            </NavLink>
            <NavLink to="/toys" className={`text-center`}>
              <img className={`product_images`} src={toys} />
              <Typography className={`text_grey`} align="center">
                Toys
              </Typography>
            </NavLink>
          </Stack>
        </Container>
      </AppBar>
    </>
  );
}

export default ProductsHeader;
