import { Container, TextField , Typography, Box, Grid, Button, InputAdornment, IconButton } from '@mui/material'
import React, { Component } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik'
import * as Yup from 'yup'


// handleClickShowPassword = () => {
//   this.setState(prevState => ({
//     showPassword: !prevState.showPassword
//   }));
// };

//  handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };

const initialValues = {
  firstName:'',
  lastName:'',
  mobile:'',
  email:'',
  password:'',
  confirmPassowrd:''
}
const onSubmit = values => {
  console.log('form data', values)
}


const validationSchema = Yup.object({
  firstName:Yup.string().required('firstname required yup reduced'),
  mobile:Yup.string().required('mobile required Yup reduced'),
  email:Yup.string().email('please enter valid email yup reduced').required('email required yup reduced'),
  password:Yup.string().required('password required yup reduced'),
  confirmPassowrd:Yup.string().required('confirm password required yup reduced')
})


function SignupFormikYupReduced() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
   // validate 
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
                      <TextField  error={formik.touched.firstName && formik.errors.firstName ? true : false} helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}  fullWidth size='small' name="firstName" {...formik.getFieldProps('firstName')} label='First Name' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField fullWidth size='small' name="lastName" value={formik.values.lastName} onChange={formik.handleChange} label='Last Name' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField  error={formik.touched.mobile && formik.errors.mobile ? true : false} helperText={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : ''} fullWidth size='small'name="mobile" {...formik.getFieldProps('mobile')} label='Mobile Number' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField  error={formik.touched.email && formik.errors.email ? true : false} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''} fullWidth size='small' name="email" {...formik.getFieldProps('email')} label='Email' variant='outlined' />
                      </Grid>
                      <Grid item sm={12} md={6}>
                      <TextField  error={formik.touched.password &&  formik.errors.password ? true : false} helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''} fullWidth size='small' name="password"  {...formik.getFieldProps('password')} label='Password' variant='outlined'
                      
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
                      <TextField  error={formik.touched.confirmPassowrd && formik.errors.confirmPassowrd ? true : false} helperText={formik.touched.confirmPassowrd && formik.errors.confirmPassowrd ? formik.errors.confirmPassowrd : ''} fullWidth size='small'  name="confirmPassowrd"  {...formik.getFieldProps('confirmPassowrd')} label='Confirm Password' variant='outlined'
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

 

export default SignupFormikYupReduced