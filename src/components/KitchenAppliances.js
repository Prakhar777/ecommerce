import React, { Component } from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';

 class KitchenAppliances extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          product1:require('../img/homeappliances.jpg')
       }
     }
  render() {
    return (
      <>
      <Container sx={{my:3}}>
        <Grid container spacing={2}>
            <Grid item sm={12} md={3}>
            <Card>
                <CardMedia component="img" image={this.state.product1} />

                <CardContent>
                    <Typography variant='h4'>
                        Appliances
                    </Typography>
                    <Typography variant='p'>
                    A Range of revolutionary kitchen appliances with high speed operation that help in preparing fresh beverages and food within minutes.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Buy Now</Button>
                    <Button size='small'>Add to Wishlist</Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item sm={12} md={3}>
            <Card>
                <CardMedia component="img" image={this.state.product1} />

                <CardContent>
                    <Typography variant='h4'>
                        Appliances
                    </Typography>
                    <Typography variant='p'>
                    A Range of revolutionary kitchen appliances with high speed operation that help in preparing fresh beverages and food within minutes.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Buy Now</Button>
                    <Button size='small'>Add to Wishlist</Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item sm={12} md={3}>
            <Card>
                <CardMedia component="img" image={this.state.product1} />

                <CardContent>
                    <Typography variant='h4'>
                        Appliances
                    </Typography>
                    <Typography variant='p'>
                    A Range of revolutionary kitchen appliances with high speed operation that help in preparing fresh beverages and food within minutes.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Buy Now</Button>
                    <Button size='small'>Add to Wishlist</Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item sm={12} md={3}>
            <Card>
                <CardMedia component="img" image={this.state.product1} />

                <CardContent>
                    <Typography variant='h4'>
                        Appliances
                    </Typography>
                    <Typography variant='p'>
                    A Range of revolutionary kitchen appliances with high speed operation that help in preparing fresh beverages and food within minutes.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Buy Now</Button>
                    <Button size='small'>Add to Wishlist</Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item sm={12} md={3}>
            <Card>
                <CardMedia component="img" image={this.state.product1} />

                <CardContent>
                    <Typography variant='h4'>
                        Appliances
                    </Typography>
                    <Typography variant='p'>
                    A Range of revolutionary kitchen appliances with high speed operation that help in preparing fresh beverages and food within minutes.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Buy Now</Button>
                    <Button size='small'>Add to Wishlist</Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item sm={12} md={3}>
            <Card>
                <CardMedia component="img" image={this.state.product1} />

                <CardContent>
                    <Typography variant='h4'>
                        Appliances
                    </Typography>
                    <Typography variant='p'>
                    A Range of revolutionary kitchen appliances with high speed operation that help in preparing fresh beverages and food within minutes.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Buy Now</Button>
                    <Button size='small'>Add to Wishlist</Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
      </Container>
      </>
    )
  }
}

export default KitchenAppliances