import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import GppGoodIcon from "@mui/icons-material/GppGood";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import ProfileProgress from "./ProfileProgress";
import logo from "../../assets/logo.png";

import CheckIcon from "@mui/icons-material/Check";
const steps = [
  {
    title: "Personal Information",
    icon: <PersonIcon fontSize="small" />,
  },
  {
    title: "Additional Information",
    icon: <FavoriteIcon fontSize="small" />,
  },
  {
    title: "Medical History",
    icon: <MedicalServicesIcon fontSize="small" />,
  },
  {
    title: "Insurance Information",
    icon: <GppGoodIcon fontSize="small" />,
  },
  {
    title: "Health Records",
    icon: <DriveFolderUploadIcon fontSize="small" />,
  },
  {
    title: "Review & Complete",
    icon: <HowToRegIcon fontSize="small" />,
  },
];

const StepSidebar = () => {
  const { activeStep, progress } = useContext(ProfileContext);

  return (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        bgcolor: "#fff",
        borderRight: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 3,
      }}
    >
      <Box>
        {/* Logo */}
        <Box sx={{ mb: 6 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "48px",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Steps */}
        <List disablePadding>
          {steps.map((step, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                position: "relative",
                mb: 2,
              }}
            >
              {/* Vertical Line */}
              {index !== steps.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: 30,
                    top: 35,
                    width: "2px",
                    height: 40,
                    backgroundColor: index < activeStep ? "#0F766E" : "#E5E7EB",
                    transition: "all 0.3s ease",
                  }}
                />
              )}

              <ListItemButton
                sx={{
                  borderRadius: "10px",
                  backgroundColor:
                    index <= activeStep ? "#EDF7F5" : "transparent",

                  "&:hover": {
                    backgroundColor: "#EDF7F5",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 50 }}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      bgcolor: index <= activeStep ? "#0F766E" : "#fff",
                      color: index <= activeStep ? "#fff" : "#6B7280",
                      border:
                        index <= activeStep ? "none" : "1px solid #E5E7EB",
                    }}
                  >
                    {index < activeStep ? (
                      <CheckIcon fontSize="small" />
                    ) : (
                      step.icon
                    )}
                  </Avatar>
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: index === activeStep ? 600 : 400,

                        color: index <= activeStep ? "#0F766E" : "#374151",
                      }}
                    >
                      {step.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Progress Card */}
      <ProfileProgress value={progress} />
    </Box>
  );
};

export default StepSidebar;
