import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  Button,
  InputAdornment,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  getFormLabelUtilityClasses,
} from "@mui/material";
// import React, { Component, useState } from 'react'
import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
//import { useEffect, useState } from 'react';
import axios from "axios";

// const initialValues = {
//   firstName:'',
//   lastName:'',
//   mobile:'',
//   email:'',
//   password:'',
//   confirmPassowrd:''
// }
// const onSubmit = values => {

//   Axios.post('http://localhost:3001/signup', {
//     firstName: values.firstName,
//     lastName: values.lastName,
//     mobile: values.mobile,
//     email: values.email,
//     password: values.password,
//     confirmPassword: values.confirmPassowrd
//     }).then(() => {
//         console.log("data inserted");
//         handleClickOpen();
//     })

//   //console.log('form data', values)
// }

// const validationSchema = Yup.object({
//   firstName:Yup.string().required('First Name required'),
//   mobile:Yup.number().typeError('Please enter a valid number').required('Mobile required'),
//   // mobile:Yup.string().required('mobile required Yup reduced'),
//   email:Yup.string().email('Please enter valid email').required('Email required'),
//   password:Yup.string().required('Password required'),
//   confirmPassowrd:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Confirm password required')
// })

function SignupFormikYupReduced() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassowrd: "",
    showPassword: false,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name required"),
    mobile: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Please enter a valid number")
      .min(10, "Must be exactly 10 digits")
      .test("mobile", "Mobile already exist", (value) =>
        mobexist ? false : true
      ),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email required"),
    password: Yup.string().required("Password required"),
    confirmPassowrd: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Confirm password required"),
  });
  const onSubmit = (values) => {
    Axios.post("http://localhost:3001/signup", {
      firstName: values.firstName,
      lastName: values.lastName,
      mobile: values.mobile,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassowrd,
    }).then(() => {
      console.log("data inserted");
      handleClickOpen();
    });

    //console.log('form data', values)
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        // console.log(res)
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const usersMobile = users.map((user) => user.mobile);

  // console.log(formik.values.showPassword)

  // const handleClickShowPassword = () => {
  //   setState(prevState => ({
  //     showPassword: !prevState.showPassword
  //   }));
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  const mobexist = usersMobile.includes(formik.values.mobile);
  //console.log(mobexist);

  //console.log(`manual data ${usersMobile}`)

  return (
    <>
      {/* <div>
         <ul>
           {
            users.map(user => (<li key={user.id}>{user.mobile}</li>
              
            ) )
           }
         </ul>
       </div> */}
      <Container
        className="form-container"
        sx={{ mt: 4, mb: 4, pb: 3 }}
        maxWidth="sm"
      >
        <Typography variant="h4" sx={{ mt: 2, mb: 3, pt: 2 }} align="center">
          Create your Account
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <TextField
                error={
                  formik.touched.firstName && formik.errors.firstName
                    ? true
                    : false
                }
                helperText={
                  formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : ""
                }
                fullWidth
                size="small"
                name="firstName"
                {...formik.getFieldProps("firstName")}
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                fullWidth
                size="small"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                error={
                  formik.touched.mobile && formik.errors.mobile ? true : false
                }
                helperText={
                  formik.touched.mobile && formik.errors.mobile
                    ? formik.errors.mobile
                    : ""
                }
                fullWidth
                size="small"
                name="mobile"
                {...formik.getFieldProps("mobile")}
                label="Mobile Number"
                variant="outlined"
                type="text"
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""
                }
                fullWidth
                size="small"
                name="email"
                {...formik.getFieldProps("email")}
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                helperText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""
                }
                fullWidth
                size="small"
                name="password"
                {...formik.getFieldProps("password")}
                label="Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        //  onClick={this.handleClickShowPassword}
                        // onMouseDown={this.handleMouseDownPassword}
                        edge="end"
                      ></IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                error={
                  formik.touched.confirmPassowrd &&
                  formik.errors.confirmPassowrd
                    ? true
                    : false
                }
                helperText={
                  formik.touched.confirmPassowrd &&
                  formik.errors.confirmPassowrd
                    ? formik.errors.confirmPassowrd
                    : ""
                }
                fullWidth
                size="small"
                name="confirmPassowrd"
                {...formik.getFieldProps("confirmPassowrd")}
                label="Confirm Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      ></IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid align="center" item sm={12}>
              <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Create account
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>Data Entered Successfully.</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SignupFormikYupReduced;
