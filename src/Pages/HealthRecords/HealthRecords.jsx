import StepSidebar from "../../components/Sidebar/StepSidebar";
import FormHeader from "../../components/Header/FormHeader";
import CustomLabel from "../../components/Common/CustomLabel";
import { Form, Formik } from "formik";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import {
  UploadCloud,
  Paperclip,
  FlaskConical,
  ScanLine,
  FileText,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Common/CustomButton";

const HealthRecords = () => {
  const navigate = useNavigate();

  const initialValues = {
    insuranceCard: null,
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const submitHandler = (value) => {
    console.log(value);

    navigate("/Review");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <StepSidebar />

      <div className="flex-1 bg-white px-8 py-6 overflow-auto">
        <FormHeader
          title="Upload Health Records"
          subtitle="Keep all your medical documents in one secure and convenient place."
        />
        <div>
          <Formik onSubmit={submitHandler} initialValues={initialValues}>
            {() => (
              <Form>
                <Grid container spacing={3}>
                  {/* uploada */}
                  <Grid size={12}>
                    <CustomLabel>Upload your health records</CustomLabel>

                    <Box
                      sx={{
                        height: 220,
                        border: "1px dashed #D1D5DB",
                        borderRadius: "12px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        hidden
                        multiple
                        id="health-upload"
                        type="file"
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

                      <label htmlFor="health-upload">
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

                          <Typography sx={{ mt: 1 }}>
                            Drag and drop your health records here, or
                          </Typography>

                          <Typography
                            sx={{
                              color: "#0F766E",
                              textDecoration: "underline",
                            }}
                          >
                            browse
                          </Typography>

                          <Typography variant="caption" color="text.secondary">
                            JPG, PNG or PDF (Max. 20MB)
                          </Typography>
                        </Box>
                      </label>
                    </Box>
                  </Grid>

                  {/* Supported Documents */}
                  <Grid size={12}>
                    <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                      Supported Documents
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 3,
                        flexWrap: "wrap",
                        color: "#6B7280",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.75,
                        }}
                      >
                        <Paperclip size={14} />
                        <Typography variant="body2">Prescription</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.75,
                        }}
                      >
                        <FlaskConical size={14} />
                        <Typography variant="body2">Lab Reports</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.75,
                        }}
                      >
                        <ScanLine size={14} />
                        <Typography variant="body2">Scan</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.75,
                        }}
                      >
                        <FileText size={14} />
                        <Typography variant="body2">
                          Discharge Summary
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Upload Cards */}
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
                  {/* btn */}

                  <Grid size={12}>
                    <CustomButton
                      skipText="Skip for now"
                      backText="Go Back"
                      submitText="Create Unique ID"
                      onSkip={() => navigate("/review")}
                      onBack={() => navigate("/Insurance-info")}
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
export default HealthRecords;
