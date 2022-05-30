import * as React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  StyledEngineProvider,
  TextField,
  Typography,
} from "@mui/material";
import "../Styles.scss";
import { CacheProvider } from "@emotion/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import cartLogic from "./cartLogic";

function MUIComponents(props) {
  let guest = "Guest";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    setAnchorEl(null);
    props.logout();
  };
  return (
    <>
      <AppBar position="sticky" className={`bg_theme flex_center`}>
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <img className={`logo-img`} src={require("../img/logo.png")} />
            </Grid>
            <Grid className={`flex_center flex`} item xs={4}>
              <InputBase
                className={`white`}
                fullWidth
                placeholder="Search your favourite product"
              ></InputBase>
              <IconButton>
                <SearchIcon className={`white`} />
              </IconButton>
            </Grid>
            <Grid className={`flex_right flex flex_align_center`} item xs={4}>
              {/* <Button>
                <NavLink to="/admin">Admin</NavLink>
              </Button> */}
              <Button onClick={handleClick} className={`white`}>
                Hello {props.loggedIn ? props.loggedInUser : guest}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {props.loggedIn ? (
                  <span>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                    <MenuItem onClick={handleClose}>
                      <NavLink className={`black`} to="/profile">
                        Profile
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>My Orders</MenuItem>
                  </span>
                ) : (
                  <span>
                    {" "}
                    <MenuItem onClick={handleClose}>
                      <NavLink className={`black`} to="/login">
                        Login
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {" "}
                      <NavLink className={`black`} to="/signup">
                        Signup
                      </NavLink>{" "}
                    </MenuItem>
                  </span>
                )}
              </Menu>
              <IconButton>
                <Badge
                  showZero
                  badgeContent={props.cartItems.length}
                  color="primary"
                >
                  <NavLink to="/cart">
                    <ShoppingCartIcon className={`white`}></ShoppingCartIcon>
                  </NavLink>
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
}

export default cartLogic(MUIComponents);
