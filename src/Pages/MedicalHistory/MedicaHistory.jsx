import { Formik, Form } from "formik";
import {
  Grid,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";


import StepSidebar from "../../components/Sidebar/StepSidebar";
import FormHeader from "../../components/Header/FormHeader";
import CustomLabel from "../../components/Common/CustomLabel";
import CustomTextField from "../../components/Common/CustomTextField";
import CustomButton from "../../components/Common/CustomButton";


const MedicalHistory = () => {
  const navigate = useNavigate();
  //initial 
  const initialValues = {
    allergies: "",
    medications: "",
    conditions: "",
    surgeries: "",
  };

  const submitHandler = (values) => {
    console.log(values);
      navigate("/Insurance-info");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <StepSidebar />

      <div className="flex-1 bg-white px-8 py-6 overflow-auto">
        <FormHeader
          title="Medical History"
          subtitle="Help us understand your medical background to provide better healthcare recommendations."
        />

        <Formik initialValues={initialValues} onSubmit={submitHandler}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                {/* Allergies */}
                <Grid size={{ xs: 12 }}>
                  <CustomLabel>Allergies</CustomLabel>

                  <CustomTextField
                    multiline
                    rows={4}
                    name="allergies"
                    placeholder="List any allergies you have (If any)"
                    value={values.allergies}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.allergies && Boolean(errors.allergies)}
                    helperText={touched.allergies && errors.allergies}
                  />
                </Grid>

                {/* Current Medications */}
                <Grid size={{ xs: 12 }}>
                  <CustomLabel>Current Medications</CustomLabel>

                  <Box className="relative">
                    <CustomTextField
                      multiline
                      rows={4}
                      name="medications"
                      placeholder="List your current medications with dosage"
                      value={values.medications}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      slotProps={{
                        htmlInput: {
                          maxLength: 500,
                        },
                      }}
                      error={touched.medications && Boolean(errors.medications)}
                      helperText={touched.medications && errors.medications}
                    />

                    <span className="absolute bottom-3 right-4 text-xs text-gray-500">
                      {values.medications.length}/500 Characters left
                    </span>
                  </Box>
                </Grid>

                {/* Existing Conditions */}
                <Grid size={{ xs: 12 }}>
                  <CustomLabel>Existing Conditions</CustomLabel>

                  <CustomTextField
                    multiline
                    rows={4}
                    name="conditions"
                    placeholder="Enter any Conditions (e.g., diabetes, hypertension, asthma, etc.)"
                    value={values.conditions}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.conditions && Boolean(errors.conditions)}
                    helperText={touched.conditions && errors.conditions}
                  />
                </Grid>

                {/* Previous Surgeries */}
                <Grid size={{ xs: 12 }}>
                  <CustomLabel>Previous Surgeries</CustomLabel>

                  <Box className="relative">
                    <CustomTextField
                      multiline
                      rows={4}
                      name="surgeries"
                      placeholder="Enter details of any past surgeries (If any)"
                      value={values.surgeries}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      slotProps={{
                        htmlInput: {
                          maxLength: 500,
                        },
                      }}
                      error={touched.surgeries && Boolean(errors.surgeries)}
                      helperText={touched.surgeries && errors.surgeries}
                    />

                    <span className="absolute bottom-3 right-4 text-xs text-gray-500">
                      {values.surgeries.length}/500 Characters left
                    </span>
                  </Box>
                </Grid>

                {/* Buttons */}
                <Grid size={{ xs: 12 }}>
                  <CustomButton
                    skipText="Skip for now"
                    backText="Go Back"
                    submitText="Add Insurance Information"
                    onSkip={() => navigate("/Insurance-info")}
                    onBack={() => navigate("/additional-info")}
                  />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MedicalHistory;
