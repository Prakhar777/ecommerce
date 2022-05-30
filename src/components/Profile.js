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
  Paper,
  Stack,
  Modal,
  MenuItem,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

import axios from "axios";

function Profile(props) {
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [open, setOpen] = React.useState(false);
  const initialValues = {
    firstName: props.loggedInUserDetails.firstname,
    lastName: props.loggedInUserDetails.lastname,
    mobile: props.loggedInUserDetails.mobile,
    email: props.loggedInUserDetails.email,
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/countries")
      .then((res) => {
        setCountries(res.data[0]);
        setStates(res.data[1]);
        setCities(res.data[2]);
      })
      .catch((error) => {
        console.log("error fetching place details");
      });
  }, []);

  const usersMobile = users.map((user) => user.mobile);
  const mobexist = usersMobile.includes(formik.values.mobile);
  return (
    <>
      <Container sx={{ my: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Personal Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              {" "}
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
            <Grid item xs={12} md={3}>
              {" "}
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
          </Grid>
          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            Email Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              {" "}
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
          </Grid>
          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            Mobile Number
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              {" "}
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
          </Grid>

          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Button onClick={handleOpen} variant="outlined">
                Add Address
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <TextField fullWidth variant="standard" label="Name" type="text" />
          <TextField fullWidth variant="standard" label="Country" />
          <TextField select fullWidth variant="standard" label="country">
            {countries.map((country) => {
              return (
                <MenuItem key={country.country_id}>{country.country}</MenuItem>
              );
            })}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Profile;
