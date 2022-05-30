import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login(props) {
  // //for sessions and cookies
  // const [loginStatus, setLoginStatus] = useState("");
  // const [loginStatusUser, setLoginStatusUser] = useState("");

  // //for sessions and cookies , always need to define this
  // axios.defaults.withCredentials = true;

  // const initialValues = {
  //   username: "",
  //   password: "",
  // };

  // const validationSchema = Yup.object({
  //   username: Yup.string().required("Please enter username(First Name)"),
  //   password: Yup.string().required("Please enter Password"),
  // });

  // const onSubmit = (values) => {
  //   axios
  //     .post("http://localhost:3001/login", {
  //       username: values.username,
  //       password: values.password,
  //     })
  //     .then((response) => {
  //       if (response.data.message) {
  //         // console.log(response.data.message);
  //         setLoginStatus(response.data.message);
  //       } else {
  //         setLoginStatus(response.data[0].firstname);
  //         setLoginStatusUser(response.data[0].firstname);
  //         //  setLoginStatusUser(response.data[0].firstname);

  //         //loginStatusChild();
  //         // props.cbloginStatusParent(loginStatus);
  //         // console.log(response.data[0].firstname);
  //       }
  //     });
  // };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit,
  // });

  // //for session and cookies
  // useEffect(() => {
  //   axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].firstname);
  //       setLoginStatusUser(response.data.user[0].firstname);

  //       // console.log(loginStatus);
  //     }
  //   });
  // }, []);
  // // const loginStatusChild = () => {
  // //   props.cbloginStatusParent(loginStatus);
  // // };

  // useEffect(() => {
  //   props.cbloginStatusParent(loginStatusUser);
  //   console.log(loginStatusUser);
  // }, [loginStatusUser]);

  return (
    <>
      <Container
        className="form-container"
        sx={{ mt: 5, mb: 5, pb: 0 }}
        maxWidth="sm"
      >
        <Typography sx={{ mb: 4, pt: 4 }} variant="h4" align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={props.formik.handleSubmit}>
          <Stack spacing={4} sx={{ my: 3 }} justifyContent="center">
            <TextField
              error={
                props.formik.touched.username && props.formik.errors.username
                  ? true
                  : false
              }
              helperText={
                props.formik.touched.username && props.formik.errors.username
                  ? props.formik.errors.username
                  : ""
              }
              {...props.formik.getFieldProps("username")}
              size="small"
              name="username"
              label="Username(First Name)"
              type="text"
            />
            <TextField
              error={
                props.formik.touched.password && props.formik.errors.password
                  ? true
                  : false
              }
              helperText={
                props.formik.touched.password && props.formik.errors.password
                  ? props.formik.errors.password
                  : ""
              }
              {...props.formik.getFieldProps("password")}
              size="small"
              name="password"
              label="Password"
              type="text"
            />
            <Button sx={{ mt: 3 }} type="submit" variant="contained">
              Login
            </Button>
            <Typography variant="h5">{`${props.loginStatus}`}</Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Login;
