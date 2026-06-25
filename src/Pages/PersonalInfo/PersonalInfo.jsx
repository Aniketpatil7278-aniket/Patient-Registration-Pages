import { Formik, Form } from "formik";
import {
  Button,
  
  InputAdornment,
  Box,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";

import {
  User,
  Calendar1,
  Phone,
  Mail,
  VenusAndMars,
  MapPin,
  Droplet,
} from "lucide-react";

import FormHeader from "../../components/Header/FormHeader";
import StepSidebar from "../../components/Sidebar/StepSidebar";
import CustomLabel from "../../components/Common/CustomLabel";
import CustomTextField from "../../components/Common/CustomTextField";
import CustomSelect from "../../components/Common/CustomSelect";

import { personalInfoSchema } from "./personalInfoSchema";

import { useNavigate } from "react-router-dom";


import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PersonalInfo = () => {
  const initialValues = {
    fullName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    gender: "",
    bloodGroup: "",
    state: "",
    city: "",
  };
  const navigate = useNavigate();


const submitHandler = (values) => {
  console.log(values);

  navigate("/additional-info");
};

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <StepSidebar />

      <div className="flex-1 bg-white px-8 py-6 overflow-auto">
        <FormHeader
          title="Personal Information"
          subtitle="Add your basic information to complete your profile and personalize your healthcare journey."
        />

        <Formik
          initialValues={initialValues}
          validationSchema={personalInfoSchema}
          onSubmit={submitHandler}
          validateOnMount
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3} sx={{ mt: 2 }}>
                {/* Full Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel required>Full Name</CustomLabel>

                  <CustomTextField
                    name="fullName"
                    placeholder="Enter your full name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <User size={18} />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>

                {/* DOB */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel required>Date of Birth</CustomLabel>

                  <CustomTextField
                    type="date"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.dob && Boolean(errors.dob)}
                    helperText={touched.dob && errors.dob}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Calendar1 size={18} />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>

                {/* Phone */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel>Phone Number</CustomLabel>
                  <CustomTextField
                    name="phoneNumber"
                    placeholder="+91 98765 43210"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone size={18} />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel>Email Address</CustomLabel>

                  <CustomTextField
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Mail size={18} />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>

                {/* Gender */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel required>Gender</CustomLabel>

                  <CustomSelect
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Select your gender"
                    options={[
                      "Male",
                      "Female",
                      "Non-binary",
                      "Prefer not to say",
                    ]}
                    error={touched.gender && Boolean(errors.gender)}
                    helperText={touched.gender && errors.gender}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            <VenusAndMars size={18} color="#6B7280" />
                          </InputAdornment>
                        }
                      />
                    }
                    IconComponent={KeyboardArrowDownIcon}
                  />
                </Grid>

                {/* Blood Group */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel required>Blood Group</CustomLabel>

                  <CustomSelect
                    name="bloodGroup"
                    value={values.bloodGroup}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Select your blood group"
                    options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                    error={touched.bloodGroup && Boolean(errors.bloodGroup)}
                    helperText={touched.bloodGroup && errors.bloodGroup}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            <Droplet size={18} color="#6B7280" />
                          </InputAdornment>
                        }
                      />
                    }
                    IconComponent={KeyboardArrowDownIcon}
                  />
                </Grid>

                {/* State */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel required>State</CustomLabel>

                  <CustomSelect
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Select state"
                    options={[
                      "Andhra Pradesh",
                      "Arunachal Pradesh",
                      "Assam",
                      "Bihar",
                      "Chhattisgarh",
                      "Delhi",
                      "Goa",
                      "Gujarat",
                      "Haryana",
                      "Himachal Pradesh",
                      "Jharkhand",
                      "Karnataka",
                      "Kerala",
                      "Madhya Pradesh",
                      "Maharashtra",
                      "Odisha",
                      "Punjab",
                      "Rajasthan",
                      "Tamil Nadu",
                      "Telangana",
                      "Uttar Pradesh",
                      "Uttarakhand",
                      "West Bengal",
                      "Other",
                    ]}
                    error={touched.state && Boolean(errors.state)}
                    helperText={touched.state && errors.state}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            <MapPin size={18} color="#6B7280" />
                          </InputAdornment>
                        }
                      />
                    }
                    IconComponent={KeyboardArrowDownIcon}
                  />
                </Grid>

                {/* Current City */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomLabel required>Current City</CustomLabel>

                  <CustomSelect
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Select your current city"
                    options={["Bangalore", "Mumbai", "Pune", "Goa"]}
                    error={touched.city && Boolean(errors.city)}
                    helperText={touched.city && errors.city}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            <MapPin size={18} color="#6B7280" />
                          </InputAdornment>
                        }
                      />
                    }
                    IconComponent={KeyboardArrowDownIcon}
                  />
                </Grid>

                {/* Required Note */}
                <Grid size={12}>
                  <Box
                    sx={{
                      border: "1px solid #E5E7EB",
                      borderRadius: "10px",
                      p: 2,
                      maxWidth: "420px",
                      mt: 1,
                    }}
                  >
                    <Typography variant="body1"> * These fields are required!</Typography>
                  </Box>
                </Grid>

                {/* Button */}
                <Grid size={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 6,
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!(isValid && dirty)}
                      sx={{
                        bgcolor: "#0F766E",
                        textTransform: "none",
                        borderRadius: "10px",
                        px: 4,
                        py: 1.5,
                        boxShadow: "none",

                        "&.Mui-disabled": {
                          bgcolor: "#D1D5DB",
                          color: "#9CA3AF",
                        },

                        "&:hover": {
                          bgcolor: "#0D665F",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Add Additional Information
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInfo;
