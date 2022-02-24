import { Container, TextField, Typography, Box, Grid, Button, InputAdornment, IconButton } from '@mui/material'
import React, { Component } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
 class Signup extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       firstName:'',
       lastName:'',
       mobile:'',
       email:'',
       password:'',
       confirmPassowrd:'',
       showPassword: false


    }
  }
handleChange = (event) => {
  const value = event.target.value;
  this.setState({
...this.state,
[event.target.name]: value
  });
}
handleSubmit = (event) => {
console.log(`First Name: ${this.state.firstName}, Last Name: ${this.state.lastName}, ${this.state.mobile}`);
event.preventDefault();
}
 handleClickShowPassword = () => {
  this.setState(prevState => ({
    showPassword: !prevState.showPassword
  }));
};

//  handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };
  render() {
    const {firstName, lastName, mobile, email, password, confirmPassowrd} = this.state;
    return (
      <>
       
                <Container maxWidth='sm'>
                    <Typography variant='h4' align='center'>
                        Create your Account
                         </Typography> 
                    <Box component="form" onSubmit={this.handleSubmit}>
                     
       <Grid container  spacing={3}>
                      <Grid item sm={12} md={6}>
                      <TextField error helperText='Cannot be empty' fullWidth size='small' name="firstName" value={firstName} onChange={this.handleChange} label='First Name' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField fullWidth size='small' name="lastName" value={lastName} onChange={this.handleChange} label='Last Name' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField fullWidth size='small'name="mobile" value={mobile} onChange={this.handleChange} label='Mobile Number' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField fullWidth size='small' name="email" value={email} onChange={this.handleChange} label='Email' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField fullWidth type={this.state.showPassword ? 'text' : 'password'} size='small' name="password" value={password} onChange={this.handleChange} label='Password' variant='outlined'
                      
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                 // onMouseDown={this.handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      
                      />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField fullWidth size='small' type={this.state.showPassword ? 'text' : 'password'} name="confirmPassowrd" value={confirmPassowrd} onChange={this.handleChange} label='Confirm Password' variant='outlined'
                       InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      />
                      </Grid>
                      <Grid align='center' item sm={12}>
                        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                          Create account
                        </Button>
                      </Grid>
                    </Grid>
                    
                    </Box>
                   
                </Container>
            
      </>
    )
  }
}

export default Signup