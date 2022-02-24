import { AppBar, Container, Grid, List, ListItem, StyledEngineProvider, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>
    <StyledEngineProvider injectFirst>
    <AppBar component='footer' position='static' className={`bg_theme`}>
    <Container >
        <Grid container>
            <Grid item xs={12} md={4}>
                <Typography variant='subtitle1'>
                    Products
                </Typography>
                <List dense xs={{pt:2}} >
                    <ListItem xs={{mb:1, p:0}}> 
                        Product 1
                    </ListItem>
                    <ListItem xs={{mb:1, p:0}}> 
                        Product 2
                    </ListItem>
                    <ListItem xs={{mb:1, p:0}}> 
                        Product 3
                    </ListItem>
                    <ListItem xs={{mb:1, p:0}}> 
                        Product 4
                    </ListItem>
                    <ListItem xs={{mb:1, p:0}}> 
                        Product 5
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant='subtitle1'>
                   Contact Us
                </Typography>
                <Typography xs={{pt:2}}  variant='body2'>
                  8979077740
                </Typography>
            </Grid>
        </Grid>
    </Container>
    </AppBar>
    </StyledEngineProvider>
    
   
    </>
  )
}

export default Footer