import StepSidebar from "../../components/Sidebar/StepSidebar";
import FormHeader from "../../components/Header/FormHeader";

import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import {
  Grid,
  Box,
  Typography,
  Button,
  InputLabel,
  LinearProgress,
  InputAdornment,
} from "@mui/material";

import {
  RefreshCcw,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import CustomLabel from "../../components/Common/CustomLabel";
import CustomTextField from "../../components/Common/CustomTextField";
import CustomButton from "../../components/Common/CustomButton";
import { patientIdSchema } from "./patientIdSchema";

import { generatePatientId } from "./Utils";
import { useNavigate } from "react-router-dom";



const Review=()=>{
    const navigate = useNavigate();
    const [generatedId, setGeneratedId] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

     useEffect(() => {
       setGeneratedId(generatePatientId());
     }, []);

     //submit
      const submitHandler = (values) => {
        console.log(values);
        navigate("/accountcreated");

      };

       const [suggestions, setSuggestions] = useState(
         Array.from({ length: 7 }, generatePatientId),
       );

    return (
      <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
        <StepSidebar />

        <div className="flex-1 bg-white px-8 py-6 overflow-auto">
          <FormHeader
            title="Review & Complete"
            subtitle="Configure your login credentials to securely manage your healthcare information."
          />

          <Formik
            enableReinitialize
            initialValues={{
              patientId: generatedId,
              password: "",
              confirmPassword: "",
            }}
            validationSchema={patientIdSchema}
            onSubmit={submitHandler}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => {
                const checks = {
                  length: values.password.length >= 8,
                  lower: /[a-z]/.test(values.password),
                  upper: /[A-Z]/.test(values.password),
                  num: /[\d!@#$%^&*]/.test(values.password),
                };

                const score = Object.values(checks).filter(Boolean).length;
             

              return (
                <Form>
                  <Grid container spacing={4}>
                    {/* Heading */}

                    <Grid size={12}>
                      <Typography variant="h6" fontWeight={600}>
                        Create Your Unique Patient ID
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        This ID will be used to access your health records and
                        services securely
                      </Typography>
                    </Grid>

                    {/* Patient ID */}

                    <Grid size={12}>
                      <CustomLabel>Patient Unique ID</CustomLabel>
                      <Box
                        sx={{
                          display: "flex",
                          width: "fit-content",
                          border: "1px solid #E5E7EB",
                          borderRadius: "12px",
                          overflow: "hidden",
                          bgcolor: "#fff",
                        }}
                      >
                        {/* PAT */}
                        <Box
                          sx={{
                            px: 3,
                            py: 2,
                            bgcolor: "#F3F4F6",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "70px",
                          }}
                        >
                          PAT
                        </Box>

                        {/* ID Characters */}
                        {values.patientId
                          ?.replace("PAT-", "")
                          .split("")
                          .map((char, index) => (
                            <Box
                              key={index}
                              sx={{
                                px: 2.5,
                                py: 2,
                                borderLeft: "1px solid #E5E7EB",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: "38px",
                              }}
                            >
                              {char}
                            </Box>
                          ))}
                      </Box>
                    </Grid>

                    {/* Info */}
                    <Grid size={12}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "#6B7280",
                          mt: -1,
                        }}
                      >
                        <AlertTriangle size={16} />

                        <Typography variant="body2">
                          This is auto generated ID, you can select your own ID
                        </Typography>
                      </Box>
                    </Grid>

                    {/* Suggestions */}
                    <Grid size={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography
                          fontWeight={600}
                          sx={{
                            fontSize: "16px",
                          }}
                        >
                          Suggestions
                        </Typography>

                        <Button
                          startIcon={<RefreshCcw size={16} />}
                          onClick={() => {
                            const ids = Array.from(
                              { length: 7 },
                              generatePatientId,
                            );

                            setSuggestions(ids);
                            setFieldValue("patientId", ids[0]);
                          }}
                          sx={{
                            bgcolor: "#F0FDF4",
                            color: "#0F766E",
                            textTransform: "none",
                            borderRadius: "10px",
                            px: 3,
                            "&:hover": {
                              bgcolor: "#DCFCE7",
                            },
                          }}
                        >
                          Refresh
                        </Button>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        {suggestions.map((id) => (
                          <Button
                            key={id}
                            variant="outlined"
                            onClick={() => setFieldValue("patientId", id)}
                            sx={{
                              minWidth: "125px",
                              height: "46px",
                              borderRadius: "10px",
                              borderColor:
                                values.patientId === id ? "#0F766E" : "#D1D5DB",

                              color:
                                values.patientId === id ? "#0F766E" : "#374151",

                              bgcolor:
                                values.patientId === id ? "#ECFDF5" : "#fff",

                              textTransform: "none",

                              "&:hover": {
                                borderColor: "#0F766E",
                                bgcolor: "#F0FDF4",
                              },
                            }}
                          >
                            {id}
                          </Button>
                        ))}
                      </Box>
                    </Grid>

                    {/* Password Section heading*/}
                    <Grid size={12}>
                      <Typography variant="h6" fontWeight={600}>
                        Create a strong password
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Create a strong password with a mix of letters, numbers
                        and symbols
                      </Typography>
                    </Grid>
                    {/* pasword */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <CustomLabel>Create New Password</CustomLabel>

                      <CustomTextField
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your new password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock size={18} />
                              </InputAdornment>
                            ),

                            endAdornment: (
                              <InputAdornment position="end">
                                <Button
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOff size={18} />
                                  ) : (
                                    <Eye size={18} />
                                  )}
                                </Button>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: "14px",
                          fontWeight: 500,
                          color:
                            score <= 2
                              ? "#F59E0B"
                              : score === 3
                                ? "#3B82F6"
                                : "#0F766E",
                        }}
                      >
                        {score <= 2
                          ? "Weak"
                          : score === 3
                            ? "Medium"
                            : "Strong"}
                      </Typography>

                      <LinearProgress
                        variant="determinate"
                        value={score * 25}
                        sx={{
                          mt: 2,
                          height: 8,
                          borderRadius: "20px",
                          backgroundColor: "#E5E7EB",

                          "& .MuiLinearProgress-bar": {
                            borderRadius: "20px",
                            backgroundColor:
                              score <= 2
                                ? "#F59E0B"
                                : score === 3
                                  ? "#3B82F6"
                                  : "#0F766E",
                          },
                        }}
                      />
                    </Grid>
                    {/* c password */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <CustomLabel>Confirm Password</CustomLabel>

                      <CustomTextField
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Enter your new password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.confirmPassword &&
                          Boolean(errors.confirmPassword)
                        }
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock size={18} />
                              </InputAdornment>
                            ),

                            endAdornment: (
                              <InputAdornment position="end">
                                <Button
                                  onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                  }
                                >
                                  {showConfirmPassword ? (
                                    <EyeOff size={18} />
                                  ) : (
                                    <Eye size={18} />
                                  )}
                                </Button>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    </Grid>

                    {/* Rules */}
                    <Grid size={12}>
                      <Typography fontWeight={600} sx={{ mb: 1 }}>
                        Should Contain:
                      </Typography>

                      {[
                        {
                          label: "At least 8 Characters",
                          valid: checks.length,
                        },
                        {
                          label: "At least one small letter",
                          valid: checks.lower,
                        },
                        {
                          label: "At least one capital letter",
                          valid: checks.upper,
                        },
                        {
                          label: "At least one number or symbol",
                          valid: checks.num,
                        },
                      ].map((rule) => (
                        <Box
                          key={rule.label}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <CheckCircle
                            size={16}
                            color={rule.valid ? "#0F766E" : "#D1D5DB"}
                          />

                          <Typography
                            variant="body2"
                            sx={{
                              color: rule.valid ? "#0F766E" : "#6B7280",
                              fontWeight: rule.valid ? 500 : 400,
                            }}
                          >
                            {rule.label}
                          </Typography>
                        </Box>
                      ))}
                    </Grid>

                    {/* btn */}
                    <Grid size={12}>
                      <CustomButton
                        backText="Go Back"
                        submitText="Create Profile"
                        onBack={() => navigate("/health-record")}
                      />
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
}
export default Review;