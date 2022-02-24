import { Container, TextField , Typography, Box, Grid, Button, InputAdornment, IconButton } from '@mui/material'
import React, { Component } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik'


// handleClickShowPassword = () => {
//   this.setState(prevState => ({
//     showPassword: !prevState.showPassword
//   }));
// };

//  handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };


function SignupFormik() {

  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      mobile:'',
      email:'',
      password:'',
      confirmPassowrd:''

    },
    onSubmit: values => {
      console.log('form data', values)
    },
    validate: values => {
      let errors = {}
if(!values.firstName) {
  errors.firstName = 'firstname required';
  errors.error = true
}
if(!values.mobile) {
  errors.mobile = 'mobile required';
  errors.error = true
}
 if(!values.email) {
   errors.email = 'email required'
   errors.error = true
 } else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{1,3})$/.test(values.email)) { 
  errors.email = 'Please enter valid email'
 }

 if(!values.password) {
  errors.password = 'password required';
  errors.error = true
}
if(!values.confirmPassowrd) {
  errors.confirmPassowrd = 'comfirm password required';
  errors.error = true
}

// }
      return errors
    }
  })
console.log('Form errors', formik.errors)
//console.log('Form values', formik.values)
  
 // const {firstName, lastName, mobile, email, password, confirmPassowrd} = this.state;
    return (
      <>
       
                <Container maxWidth='sm'>
                    <Typography variant='h4' align='center'>
                        Create your Account
                         </Typography> 
                    <Box component="form" onSubmit={formik.handleSubmit} >
                     
       <Grid container  spacing={3}>
                      <Grid item sm={12} md={6}>
                      <TextField onBlur={formik.handleBlur} error={formik.touched.firstName && formik.errors.firstName ? true : false} helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}  fullWidth size='small' name="firstName" value={formik.values.firstName} onChange={formik.handleChange} label='First Name' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField fullWidth size='small' name="lastName" value={formik.values.lastName} onChange={formik.handleChange} label='Last Name' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField onBlur={formik.handleBlur} error={formik.touched.mobile && formik.errors.mobile ? true : false} helperText={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : ''} fullWidth size='small'name="mobile" value={formik.values.mobile} onChange={formik.handleChange} label='Mobile Number' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email ? true : false} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''} fullWidth size='small' name="email" value={formik.values.email} onChange={formik.handleChange} label='Email' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField onBlur={formik.handleBlur} error={formik.touched.password &&  formik.errors.password ? true : false} helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''} fullWidth size='small' name="password" value={formik.values.password} onChange={formik.handleChange} label='Password' variant='outlined'
                      
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                  aria-label="toggle password visibility"
                //  onClick={this.handleClickShowPassword}
                 // onMouseDown={this.handleMouseDownPassword}
                  edge="end"
                >
                  
                </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      
                      />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField onBlur={formik.handleBlur} error={formik.touched.confirmPassowrd && formik.errors.confirmPassowrd ? true : false} helperText={formik.touched.confirmPassowrd && formik.errors.confirmPassowrd ? formik.errors.confirmPassowrd : ''} fullWidth size='small'  name="confirmPassowrd" value={formik.values.confirmPassowrd} onChange={formik.handleChange} label='Confirm Password' variant='outlined'
                       InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                  aria-label="toggle password visibility"
                 
                  edge="end"
                >
                  
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

 

export default SignupFormik