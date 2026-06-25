import StepSidebar from "../../components/Sidebar/StepSidebar";
import FormHeader from "../../components/Header/FormHeader";
import { Form, Formik } from "formik";
import { Grid, Typography, Box } from "@mui/material";
import { Card, CardMedia, CardContent, Button } from "@mui/material";
import CustomLabel from "../../components/Common/CustomLabel";
import CustomSelect from "../../components/Common/CustomSelect";
import CustomTextField from "../../components/Common/CustomTextField";
import CustomButton from "../../components/Common/CustomButton";
import { Trash2, UploadCloud } from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";



const InsuranceInfo = () => {
  const navigate = useNavigate();

  const initialValues = {
    insuranceProvider: "",
    policyNumber: "",
    insuranceCard: null,
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  //submit
  const submitHandler = (values) => {
    console.log(values);
  

    navigate("/health-record");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <StepSidebar />

      <div className="flex-1 bg-white px-8 py-6 overflow-auto">
        <FormHeader
          title="Insurance Details"
          subtitle="Add your insurance information for seamless coverage and claims processing."
        />

        <div>
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
                <Grid container spacing={3}>
                  {/* insuranceProvider */}
                  <Grid size={12}>
                    <CustomLabel>Insurance Provider</CustomLabel>

                    <CustomSelect
                      name="insuranceProvider"
                      value={values.insuranceProvider}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Select insurance provider (Optional)"
                      options={[
                        "Star Health",
                        "HDFC ERGO",
                        "ICICI Lombard",
                        "Bajaj Allianz",
                        "Care Health",
                        "Niva Bupa",
                      ]}
                      error={
                        touched.insuranceProvider &&
                        Boolean(errors.insuranceProvider)
                      }
                      helperText={
                        touched.insuranceProvider && errors.insuranceProvider
                      }
                    />
                  </Grid>

                  {/* policyNumber */}
                  <Grid size={12}>
                    <CustomLabel>Customer ID / Policy Number</CustomLabel>

                    <CustomTextField
                      name="policyNumber"
                      placeholder="Enter Customer ID or Policy Number (Optional)"
                      value={values.policyNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.policyNumber && Boolean(errors.policyNumber)
                      }
                      helperText={touched.policyNumber && errors.policyNumber}
                    />
                  </Grid>
                  {/* uploading the file */}
                  <Grid size={12}>
                    <CustomLabel> Upload Insurance Card (Optional)</CustomLabel>

                    <Box
                      sx={{
                        border: "1px dashed #D1D5DB",
                        borderRadius: "10px",
                        height: "220px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="file"
                        hidden
                        multiple
                        id="insurance-upload"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => {
                          const files = Array.from(e.target.files);

                          const newFiles = files.map((file) => ({
                            id: Date.now() + Math.random(),
                            file,
                            preview: URL.createObjectURL(file),
                            status: "uploaded",
                          }));

                          setUploadedFiles((prev) => [...prev, ...newFiles]);
                        }}
                      />
                      <label htmlFor="insurance-upload">
                        <Box
                          sx={{
                            textAlign: "center",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <UploadCloud size={50} color="#C4C4C4" />

                          <Typography variant="body2">
                            Drag and drop your health records here, or
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: "#0F766E",
                              textDecoration: "underline",
                              mt: 1,
                            }}
                          >
                            browse
                          </Typography>

                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 1, display: "block" }}
                          >
                            JPG, PNG or PDF (Max. 5MB)
                          </Typography>
                        </Box>
                      </label>
                    </Box>
                  </Grid>
                  {/* Card updates */}
                  <Grid size={12}>
                    {uploadedFiles.length > 0 && (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 2,
                          mt: 2,
                        }}
                      >
                        {uploadedFiles.map((item) => (
                          <Card
                            key={item.id}
                            elevation={1}
                            sx={{
                              width: 260,
                              height: 350,
                              border: "1px solid #E5E7EB",
                              borderRadius: "12px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {/* Image */}
                            <CardMedia
                              component="img"
                              image={item.preview}
                              alt={item.file.name}
                              sx={{
                                width: "100%",
                                height: 200,
                                objectFit: "cover",
                                flexShrink: 0,
                              }}
                            />

                            {/* Content */}
                            <CardContent
                              sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                p: 2,
                              }}
                            >
                              <Box>
                                <Typography
                                  variant="body2"
                                  fontWeight={600}
                                  sx={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    minHeight: 40,
                                  }}
                                >
                                  {item.file.name}
                                </Typography>
                              </Box>

                              <Box
                                sx={{
                                  mt: 2,
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#0F766E",
                                    fontWeight: 600,
                                  }}
                                >
                                  Upload Successful
                                </Typography>

                                <Button
                                  size="small"
                                  color="error"
                                  onClick={() =>
                                    setUploadedFiles((prev) =>
                                      prev.filter(
                                        (file) => file.id !== item.id,
                                      ),
                                    )
                                  }
                                  sx={{
                                    minWidth: "auto",
                                    p: 0.5,
                                  }}
                                >
                                  <Trash2 size={18} />
                                </Button>
                              </Box>
                            </CardContent>
                          </Card>
                        ))}
                      </Box>
                    )}
                  </Grid>

                  {/* Buttons */}
                  <Grid size={{ xs: 12 }}>
                    <CustomButton
                      skipText="Skip for now"
                      backText="Go Back"
                      submitText="Upload Health Records"
                      onSkip={() => navigate("/health-record")}
                      onBack={() => navigate("/medicalhistory")}
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
export default InsuranceInfo;
