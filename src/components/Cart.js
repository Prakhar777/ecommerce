import {
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "../Styles.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ButtonUnstyled } from "@mui/base";
import cartLogic from "./cartLogic";
function Cart(props) {
  const product1 = require("../img/02-OnePlus-9.jpg");

  const totalPrice = props.cartItems.reduce(
    (price, item) => price + item.quantity * item.product_price,
    0
  );
  return (
    <>
      <Container sx={{ my: 3 }}>
        {props.cartItems.length >= 0 && (
          <div>
            <Button onClick={props.handleResetCart}>Clear Cart</Button>
          </div>
        )}
        {props.cartItems.length === 0 && <div>no item in cart</div>}
        <Grid container spacing={2}>
          <Grid item sm={12} md={8}>
            <Grid container>
              {props.cartItems.map((item) => {
                return (
                  <Grid key={item.id} item sm={12} sx={{ mb: 2 }}>
                    <Card>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item sm={4}>
                            <img
                              className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/images/${item.product_img}`}
                            />
                          </Grid>
                          <Grid item sm={8}>
                            <Typography>{item.product_name}</Typography>
                            <Typography>
                              {" "}
                              {item.quantity} * &#8377; {item.product_price}
                            </Typography>
                            <Stack
                              direction="row"
                              spacing={2}
                              alignItems="center"
                            >
                              <Button
                                onClick={() => props.handleRemoveProduct(item)}
                              >
                                <RemoveCircleOutlineIcon />
                              </Button>

                              <Typography>{item.quantity}</Typography>
                              <Button
                                onClick={() => props.handleAddProduct(item)}
                              >
                                <AddCircleOutlineIcon />
                              </Button>
                            </Stack>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid item sm={12} md={4}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Typography>Total Price:</Typography>
                  <Typography>{totalPrice}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default cartLogic(Cart);
