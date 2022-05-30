import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import cartLogic from "./cartLogic";

function Mobile(props) {
  const [product1, setProducts1] = useState(require("../img/02-OnePlus-9.jpg"));
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error in fetching products");
  //     });
  // }, []);

  // console.log(props.products);
  return (
    <>
      {/* {products.map((product) => {
        return <h4>{product.title}</h4>;
      })} */}

      <Container sx={{ my: 3 }}>
        <Grid container spacing={2}>
          {props.mobile.map((product) => {
            return (
              <Grid key={product.id} item sm={12} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    image={`${process.env.PUBLIC_URL}/images/${product.product_img}`}
                  />

                  <CardContent>
                    <Typography variant="h4">{product.product_name}</Typography>
                    <Typography variant="p">{product.product_desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      Price: &#8377;{product.product_price}
                    </Button>
                    <Button
                      onClick={() => props.handleAddProduct(product)}
                      size="small"
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default cartLogic(Mobile);
