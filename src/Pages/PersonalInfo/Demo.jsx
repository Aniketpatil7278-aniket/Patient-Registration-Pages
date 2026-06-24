import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import { patientSchema } from "../../validation/patientValidation";
import InputField from "../../components/FormInput/FormInput";
import UploadField from "../../components/UploadBox/UploadField";
import { stateCities } from "../../data/statesCities";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Registration.scss";
import { useNavigate } from "react-router-dom";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
const initialValues = {
  fullName: "",
  dateofBirth: "",
  email: "",
  phone: "",
  gender: "",
  bloodgroup: "",
  state: "",
  currentcity: "",
  address: "",
  uploadId: null,
};

function PatientRegistration() {
  const naviagte = useNavigate();
  const [step, setStep] = useState(0);
  const submit = (values) => {
    navigate("/additionalinfo");
  };

  return (
    <Box className="container">
      <Sidebar step={step} setStep={setStep} />

      <Paper className="content">
        <Box>
          <Typography className="personal-information">
            Personal Information
          </Typography>
          <Typography className="subtitle-container">
            Add your basic information to complete your profile and personalize
            your healthcare journey
          </Typography>
          <Box className="support">
            <HeadsetMicOutlinedIcon sx={{ width: "38px", height: "38px" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "111px",
                height: "38px",
              }}
            >
              <Typography className="element">Need Help?</Typography>
              <Typography className="contact">Contact Support</Typography>
            </Box>
          </Box>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={patientSchema}
          onSubmit={submit}
        >
          {(formik) => (
            <Form className="info-form" onSubmit={formik.handleSubmit}>
              <Grid
                container
                spacing={2}
                rowSpacing={2}
                columnSpacing="40px"
                sx={{ width: "1098px", position: "absolute", top: "154px" }}
              >
                <Grid size={{ xs: 12, md: 6 }} className="input-container">
                  <InputLabel required className="input-title">
                    Full Name
                  </InputLabel>
                  <InputField
                    className="input-field"
                    name="fullName"
                    formik={formik}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} className="input-container-left">
                  <InputLabel required className="input-title">
                    Date of Birth
                  </InputLabel>
                  <TextField
                    className="input-field"
                    fullWidth
                    type="date"
                    name="dateofBirth"
                    placeholder="select Date of Birth"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.dateofBirth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.dateofBirth &&
                      Boolean(formik.errors.dateofBirth)
                    }
                    helperText={
                      formik.touched.dateofBirth && formik.errors.dateofBirth
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} className="input-container">
                  <InputLabel className="input-title">Email</InputLabel>
                  <InputField
                    className="input-field"
                    name="email"
                    formik={formik}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} className="input-container-left">
                  <InputLabel className="input-title">Phone Number</InputLabel>
                  <InputField
                    className="input-field"
                    name="phone"
                    formik={formik}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} className="input-container">
                  <InputLabel required className="input-title">
                    Gender
                  </InputLabel>
                  <TextField
                    className="input-field"
                    select
                    fullWidth
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Nonbinary">Non-binary</MenuItem>
                    <MenuItem value="Other">Prefer not to say</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} className="input-container-left">
                  <InputLabel required className="input-title">
                    Blood Group
                  </InputLabel>
                  <TextField
                    className="input-field"
                    select
                    fullWidth
                    name="bloodgroup"
                    value={formik.values.bloodgroup}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="">O+</MenuItem>
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                    <MenuItem value="Dontknow">Don't Know</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} className="input-container">
                  <InputLabel required className="input-title">
                    State
                  </InputLabel>
                  <TextField
                    className="input-field"
                    select
                    fullWidth
                    name="state"
                    value={formik.values.state}
                    onChange={(e) => {
                      formik.handleChange(e);
                      formik.setFieldValue("currentcity", "");
                    }}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                  >
                    <MenuItem value="">Select State</MenuItem>
                    {Object.keys(stateCities).map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="input-container-left">
                  <InputLabel required className="input-title">
                    Current City
                  </InputLabel>
                  <TextField
                    className="input-field"
                    select
                    fullWidth
                    name="currentcity"
                    disabled={!formik.values.state}
                    value={formik.values.currentcity}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.currentcity &&
                      Boolean(formik.errors.currentcity)
                    }
                    helperText={
                      formik.touched.currentcity && formik.errors.currentcity
                    }
                  >
                    <MenuItem value="">Select City</MenuItem>
                    {(stateCities[formik.values.state] || []).map((city) => (
                      <MenuItem key={city} value={city}>
                        {city}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="input-container">
                  <Typography className="input-title">
                    * These fields are required
                  </Typography>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Button
                  background="#096B58"
                  type="submit"
                  variant="contained"
                  className="continue"
                >
                  Add Additional Information
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default PatientRegistration;
