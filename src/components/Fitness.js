import React, { Component } from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';

 class Fitness extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          product1:require('../img/fitness.jpg')
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
                        Fitness
                    </Typography>
                    <Typography variant='p'>
                    Gym Equipments, Weight: 15000 Kg, Model Name/Number: .6.65000
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
                        Fitness
                    </Typography>
                    <Typography variant='p'>
                    Gym Equipments, Weight: 15000 Kg, Model Name/Number: .6.65000
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
                        Fitness
                    </Typography>
                    <Typography variant='p'>
                    Gym Equipments, Weight: 15000 Kg, Model Name/Number: .6.65000
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
                        Fitness
                    </Typography>
                    <Typography variant='p'>
                    Gym Equipments, Weight: 15000 Kg, Model Name/Number: .6.65000
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
                        Fitness
                    </Typography>
                    <Typography variant='p'>
                    Gym Equipments, Weight: 15000 Kg, Model Name/Number: .6.65000
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
                        Fitness
                    </Typography>
                    <Typography variant='p'>
                    Gym Equipments, Weight: 15000 Kg, Model Name/Number: .6.65000
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

export default Fitness