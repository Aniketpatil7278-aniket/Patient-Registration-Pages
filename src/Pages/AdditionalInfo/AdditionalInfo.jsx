import { Formik, Form } from "formik";
import {
  Grid,
  Box,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import StepSidebar from "../../components/Sidebar/StepSidebar";
import FormHeader from "../../components/Header/FormHeader";
import CustomLabel from "../../components/Common/CustomLabel";
import CustomTextField from "../../components/Common/CustomTextField";
import CustomSelect from "../../components/Common/CustomSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { additionalInfoSchema } from "./additionalInfoSchema";
import CustomButton from "../../components/Common/CustomButton";


const AdditionalInfo = () => {
    const navigate = useNavigate();

  const initialValues = {
    height: "",
    heightUnit: "cm",
    weight: "",
    weightunit: "kg",
    bloodPressure: "",
    bloodSugar: "",
    physicalActivity: "",
    dietaryPreference: "",
    smokingStatus: "",
    alcoholConsumption: "",
    emergencyRelationship: "",
    emergencyNumber:"",
  };
//submit

  const submitHandler = (values) => {
    console.log(values);
    navigate("/medicalhistory");

  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <StepSidebar />

      <div className="flex-1 bg-white px-8 py-6 overflow-auto">
        <FormHeader
          title="Additional Information"
          subtitle="Enhance your profile with optional details for a more personalized healthcare journey."
        />
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={additionalInfoSchema}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* height */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Height</CustomLabel>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "56px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "10px",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                      }}
                    >
                      {/* Height Input */}
                      <TextField
                        name="height"
                        placeholder="Enter height"
                        value={values.height}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.height && Boolean(errors.height)}
                        helperText={touched.height && errors.height}
                        variant="standard"
                        fullWidth
                        input={{
                          disableUnderline: true,
                        }}
                        sx={{
                          px: 2,
                          "& .MuiInputBase-root": {
                            height: "56px",
                          },
                        }}
                      />

                      {/* Unit Select */}
                      <Select
                        name="heightUnit"
                        value={values.heightUnit}
                        onChange={handleChange}
                        variant="standard"
                        disableUnderline
                        sx={{
                          minWidth: "80px",
                          height: "100%",
                          borderLeft: "1px solid #E5E7EB",
                          px: 1,
                          "& .MuiSelect-select": {
                            display: "flex",
                            alignItems: "center",
                            height: "56px",
                          },
                        }}
                      >
                        <MenuItem value="cm">cm</MenuItem>
                        <MenuItem value="ft">ft</MenuItem>
                      </Select>
                    </Box>
                  </Grid>

                  {/* weight */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Weight</CustomLabel>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "56px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "10px",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                      }}
                    >
                      {/* weight Input */}
                      <TextField
                        name="weight"
                        placeholder="Enter weight"
                        value={values.weight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.weight && Boolean(errors.weight)}
                        helperText={touched.weight && errors.weight}
                        variant="standard"
                        fullWidth
                        input={{
                          disableUnderline: true,
                        }}
                        sx={{
                          px: 2,
                          "& .MuiInputBase-root": {
                            height: "56px",
                          },
                        }}
                      />

                      {/* Unit Select */}
                      <Select
                        name="weightunit"
                        value={values.weightunit}
                        onChange={handleChange}
                        variant="standard"
                        disableUnderline
                        sx={{
                          minWidth: "80px",
                          height: "100%",
                          borderLeft: "1px solid #E5E7EB",
                          px: 1,
                          "& .MuiSelect-select": {
                            display: "flex",
                            alignItems: "center",
                            height: "56px",
                          },
                        }}
                      >
                        <MenuItem value="kg">kg</MenuItem>
                        <MenuItem value="g">lb</MenuItem>
                      </Select>
                    </Box>
                  </Grid>

                  {/* Blood Pressure */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Blood Pressure</CustomLabel>

                    <CustomTextField
                      name="bloodPressure"
                      placeholder="Enter Blood Pressure (If Known), e.g. 120/80"
                      value={values.bloodPressure}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.bloodPressure && Boolean(errors.bloodPressure)
                      }
                      helperText={touched.bloodPressure && errors.bloodPressure}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <Typography variant="body2">mmHg</Typography>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>

                  {/* Blood Sugar */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Blood Sugar</CustomLabel>

                    <CustomTextField
                      name="bloodSugar"
                      placeholder="Enter Bloog Sugar (if Known), e.g. 90 mg/dl"
                      value={values.bloodSugar}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.bloodSugar && Boolean(errors.bloodSugar)}
                      helperText={touched.bloodSugar && errors.bloodSugar}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <Typography variant="body2">mg/dl</Typography>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>

                  {/* Physical Activity */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Physical Activity Level</CustomLabel>

                    <CustomSelect
                      name="physicalActivity"
                      value={values.physicalActivity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.physicalActivity &&
                        Boolean(errors.physicalActivity)
                      }
                      helperText={
                        touched.physicalActivity && errors.physicalActivity
                      }
                      options={[
                        "Sedentary",
                        "Lightly Active",
                        "Moderately Active",
                        "Very Active",
                        "Highly Active",
                      ]}
                      placeholder="Select"
                      IconComponent={KeyboardArrowDownIcon}
                    />
                  </Grid>

                  {/* Dietary */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Dietary Preference</CustomLabel>

                    <CustomSelect
                      name="dietaryPreference"
                      value={values.dietaryPreference}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.dietaryPreference &&
                        Boolean(errors.dietaryPreference)
                      }
                      helperText={
                        touched.dietaryPreference && errors.dietaryPreference
                      }
                      options={[
                        "No Preference",
                        "Vegetarian",
                        "Vegan",
                        "Eggetarian",
                        "Pescatarian",
                        "Non-Vegetarian",
                        "Other",
                      ]}
                      placeholder="Select"
                      IconComponent={KeyboardArrowDownIcon}
                    />
                  </Grid>

                  {/* Smoking */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Smoking Status</CustomLabel>

                    <CustomSelect
                      name="smokingStatus"
                      value={values.smokingStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.smokingStatus && Boolean(errors.smokingStatus)
                      }
                      helperText={touched.smokingStatus && errors.smokingStatus}
                      options={[
                        "Never Smoked",
                        "Former Smoker",
                        "Occasional Smoker",
                        "Regular Smoker",
                        "Prefer Not to Say",
                      ]}
                      placeholder="Select"
                      IconComponent={KeyboardArrowDownIcon}
                    />
                  </Grid>

                  {/* Alcohol */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Alcohol Consumption</CustomLabel>

                    <CustomSelect
                      name="alcoholConsumption"
                      value={values.alcoholConsumption}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.alcoholConsumption &&
                        Boolean(errors.alcoholConsumption)
                      }
                      helperText={
                        touched.alcoholConsumption && errors.alcoholConsumption
                      }
                      options={[
                        "Never",
                        "Occasionally",
                        "Monthly",
                        "Weekly",
                        "Frequently",
                        "Prefer Not to Say",
                      ]}
                      placeholder="Select"
                      IconComponent={KeyboardArrowDownIcon}
                    />
                  </Grid>

                  {/* Emergency Relationship */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Emergency Contact Relationship</CustomLabel>

                    <CustomSelect
                      name="emergencyRelationship"
                      value={values.emergencyRelationship}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.emergencyRelationship &&
                        Boolean(errors.emergencyRelationship)
                      }
                      helperText={
                        touched.emergencyRelationship &&
                        errors.emergencyRelationship
                      }
                      options={[
                        "Parent",
                        "Spouse",
                        "Sibling",
                        "Child",
                        "Relative",
                        "Friend",
                        "Caregiver",
                        "Guardian",
                        "Other",
                      ]}
                      placeholder="Select"
                      IconComponent={KeyboardArrowDownIcon}
                    />
                  </Grid>

                  {/* Emergency Number */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomLabel>Emergency Contact Number</CustomLabel>

                    <CustomTextField
                      name="emergencyNumber"
                      placeholder="+91 98765 43210"
                      value={values.emergencyNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.emergencyNumber &&
                        Boolean(errors.emergencyNumber)
                      }
                      helperText={
                        touched.emergencyNumber && errors.emergencyNumber
                      }
                    />
                  </Grid>

                  <Grid size={12}>
                    <CustomButton
                      skipText="Skip for now"
                      backText="Go Back"
                      submitText="Add Medical History"
                      onSkip={() => navigate("/medicalhistory")}
                      onBack={() => navigate("/")}
                    />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
