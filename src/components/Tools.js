import React, { Component } from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';

 class Tools extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          product1:require('../img/tools.jpg')
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
                        Tools
                    </Typography>
                    <Typography variant='p'>
                    24 Must-Have Tools for Running a Growing Company Today
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
                        Tools
                    </Typography>
                    <Typography variant='p'>
                    24 Must-Have Tools for Running a Growing Company Today
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
                        Tools
                    </Typography>
                    <Typography variant='p'>
                    24 Must-Have Tools for Running a Growing Company Today
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
                        Tools
                    </Typography>
                    <Typography variant='p'>
                    24 Must-Have Tools for Running a Growing Company Today
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
                        Tools
                    </Typography>
                    <Typography variant='p'>
                    24 Must-Have Tools for Running a Growing Company Today
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
                        Tools
                    </Typography>
                    <Typography variant='p'>
                    24 Must-Have Tools for Running a Growing Company Today
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

export default Tools