import {
  Container,
  Paper,
  TextField,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function Admin() {
  return (
    <>
      <Countries />
      <States />
      <Cities />
    </>
  );
}

const Countries = () => {
  const [countryError, setCountryError] = useState("");
  const initialValues = {
    country: "",
  };
  const validationSchema = Yup.object({
    country: Yup.string()
      .max(20, "Max 20 characters allowed")
      .required("Country required"),
  });

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/countries", {
        country: values.country,
      })
      .then((res) => {
        // const response = res.data.sqlMessage;
        // setCountryError(response);
        alert("country inserted successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  //console.log(countryError);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Container sx={{ mt: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Typography sx={{ mb: 2 }}>Add Country</Typography>
            <TextField
              error={
                formik.touched.country && formik.errors.country ? true : false
              }
              helperText={
                formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ""
              }
              {...formik.getFieldProps("country")}
              size="small"
              type="text"
              label="Country"
              name="country"
            />
            <br />
            <Button sx={{ mt: 2 }} type="submit" variant="outlined">
              Add Country
            </Button>
          </Box>
        </Paper>
      </Container>
      ;
    </>
  );
};

const States = () => {
  const [countryError, setCountryError] = useState("");
  const initialValues = {
    state: "",
    country: "",
  };
  const validationSchema = Yup.object({
    state: Yup.string()
      .max(20, "Max 20 characters allowed")
      .required("State required"),
    country: Yup.string()
      .max(20, "Max 20 characters allowed")
      .required("Country required"),
  });

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/states", {
        state: values.state,
        country: values.country,
      })
      .then((res) => {
        // const response = res.data.sqlMessage;
        // setCountryError(response);
        alert("state inserted successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  //console.log(countryError);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Container sx={{ mb: 0 }}>
        <Paper sx={{ p: 3 }}>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Typography sx={{ mb: 2 }}>Add State</Typography>
            <Grid container>
              <Grid item sm={12} md={3}>
                <TextField
                  error={
                    formik.touched.state && formik.errors.state ? true : false
                  }
                  helperText={
                    formik.touched.state && formik.errors.state
                      ? formik.errors.state
                      : ""
                  }
                  {...formik.getFieldProps("state")}
                  size="small"
                  type="text"
                  label="State"
                  name="state"
                />
              </Grid>
              <Grid item sm={12} md={3}>
                <TextField
                  error={
                    formik.touched.country && formik.errors.country
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.country && formik.errors.country
                      ? formik.errors.country
                      : ""
                  }
                  {...formik.getFieldProps("country")}
                  size="small"
                  type="text"
                  label="Conutry"
                  name="country"
                />
              </Grid>
            </Grid>

            <br />
            <Button sx={{ mt: 2 }} type="submit" variant="outlined">
              Add State
            </Button>
          </Box>
        </Paper>
      </Container>
      ;
    </>
  );
};

const Cities = () => {
  const [countryError, setCountryError] = useState("");
  const initialValues = {
    city: "",
    state: "",
  };
  const validationSchema = Yup.object({
    state: Yup.string()
      .max(20, "Max 20 characters allowed")
      .required("State required"),
    city: Yup.string()
      .max(20, "Max 20 characters allowed")
      .required("City required"),
  });

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/cities", {
        state: values.state,
        city: values.city,
      })
      .then((res) => {
        // const response = res.data.sqlMessage;
        // setCountryError(response);
        alert("city inserted successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  //console.log(countryError);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Container sx={{ mb: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Typography sx={{ mb: 2 }}>Add City</Typography>
            <Grid container>
              <Grid item sm={12} md={3}>
                <TextField
                  error={
                    formik.touched.city && formik.errors.city ? true : false
                  }
                  helperText={
                    formik.touched.city && formik.errors.city
                      ? formik.errors.city
                      : ""
                  }
                  {...formik.getFieldProps("city")}
                  size="small"
                  type="text"
                  label="City"
                  name="city"
                />
              </Grid>
              <Grid item sm={12} md={3}>
                <TextField
                  error={
                    formik.touched.state && formik.errors.state ? true : false
                  }
                  helperText={
                    formik.touched.state && formik.errors.state
                      ? formik.errors.state
                      : ""
                  }
                  {...formik.getFieldProps("state")}
                  size="small"
                  type="text"
                  label="State"
                  name="state"
                />
              </Grid>
            </Grid>

            <br />
            <Button sx={{ mt: 2 }} type="submit" variant="outlined">
              Add City
            </Button>
          </Box>
        </Paper>
      </Container>
      ;
    </>
  );
};

export default Admin;
