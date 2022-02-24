import React, { Component } from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';

 class Electronics extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          product1:require('../img/02-OnePlus-9.jpg')
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
                        One Plus 9
                    </Typography>
                    <Typography variant='p'>
                    Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens.
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
                        One Plus 9
                    </Typography>
                    <Typography variant='p'>
                    Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens.
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
                        One Plus 9
                    </Typography>
                    <Typography variant='p'>
                    Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens.
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
                        One Plus 9
                    </Typography>
                    <Typography variant='p'>
                    Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens.
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
                        One Plus 9
                    </Typography>
                    <Typography variant='p'>
                    Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens.
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
                        One Plus 9
                    </Typography>
                    <Typography variant='p'>
                    Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens.
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

export default Electronics