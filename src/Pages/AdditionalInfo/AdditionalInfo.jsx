import { Formik, Form } from "formik";
import {
  Grid,
  InputLabel,
  Box,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import StepSidebar from "../../components/Sidebar/StepSidebar";
import FormHeader from "../../components/Header/FormHeader";
import CustomTextField from "../../components/Common/CustomTextField";
import CustomSelect from "../../components/Common/CustomSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

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
    emergencyRelationship:"",
  };

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <StepSidebar />

      <div className="flex-1 bg-white px-8 py-6 overflow-auto">
        <FormHeader
          title="Additional Information"
          subtitle="Provide additional health and lifestyle details."
        />
        <div>
          <Formik initialValues={initialValues} onSubmit={submitHandler}>
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* height */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ mb: 1 }}>Height</InputLabel>

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
                        <MenuItem value="m">m</MenuItem>
                        <MenuItem value="ft">ft</MenuItem>
                      </Select>
                    </Box>
                  </Grid>

                  {/* weight */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ mb: 1 }}>Weight</InputLabel>

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
                        <MenuItem value="g">g</MenuItem>
                      </Select>
                    </Box>
                  </Grid>

                  {/* Blood Pressure */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ mb: 1 }}>Blood Pressure</InputLabel>

                    <CustomTextField
                      name="bloodPressure"
                      placeholder="Enter Blood Pressure (If Known), e.g. 120/80"
                      value={values.bloodPressure}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    <InputLabel sx={{ mb: 1 }}>Blood Sugar</InputLabel>

                    <CustomTextField
                      name="bloodSugar"
                      placeholder="Enter Bloog Sugar (if Known), e.g. 90 mg/dl"
                      value={values.bloodSugar}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    <InputLabel sx={{ mb: 1 }}>
                      Physical Activity Level
                    </InputLabel>

                    <CustomSelect
                      name="physicalActivity"
                      value={values.physicalActivity}
                      onChange={handleChange}
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
                    <InputLabel sx={{ mb: 1 }}>Dietary Preference</InputLabel>

                    <CustomSelect
                      name="dietaryPreference"
                      value={values.dietaryPreference}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    <InputLabel sx={{ mb: 1 }}>Smoking Status</InputLabel>

                    <CustomSelect
                      name="smokingStatus"
                      value={values.smokingStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    <InputLabel sx={{ mb: 1 }}>Alcohol Consumption</InputLabel>

                    <CustomSelect
                      name="alcoholConsumption"
                      value={values.alcoholConsumption}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    <InputLabel sx={{ mb: 1 }}>
                      Emergency Contact Relationship
                    </InputLabel>

                    <CustomSelect
                      name="emergencyRelationship"
                      value={values.emergencyRelationship}
                      onChange={handleChange}
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
                    <InputLabel sx={{ mb: 1 }}>
                      Emergency Contact Number
                    </InputLabel>

                    <CustomTextField
                      name="emergencyNumber"
                      placeholder="+91 98765 43210"
                      value={values.emergencyNumber}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* skip Buttons */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Button variant="outlined" onClick={() => navigate("/")}>
                      Skip for now
                    </Button>
                  </Grid>

                  {/* goback btn */}
                  <Box sx={{ display: "flex", gap: 2, marginLeft:15,px: 4,
                          py: 1.5,
                          boxShadow: "none", }}>
                    <Button variant="text" onClick={() => navigate("/")}>
                      Go Back
                    </Button>

                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => navigate("/")}
                      sx={{
                        bgcolor: "#0F766E",
                        textTransform: "none",
                      }}
                    >
                      Add Medical History
                    </Button>
                  </Box>
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
