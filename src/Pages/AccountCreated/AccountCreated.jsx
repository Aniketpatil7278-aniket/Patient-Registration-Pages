import { Box, Card, Typography, Button, IconButton } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import logo from "../../assets/logo.png";

const AccountCreated = () => {
  const patientId = "PAT7N6S93";
  const email = "abcd123@gmail.com";

  const copyId = () => {
    navigator.clipboard.writeText(patientId);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 flex justify-start">
          <img src={logo} alt="logo" className="h-12 object-contain" />
        </div>

        {/* Main Card */}
        <Card
          elevation={2}
          sx={{
            borderRadius: "20px",
            p: 4,
          }}
        >
          {/* Success Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <CheckCircleIcon
              sx={{
                fontSize: 70,
                color: "#0F766E",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            align="center"
            sx={{
              fontSize: "30px",
              fontWeight: 700,
              mb: 1,
            }}
          >
            Account Created
            <br />
            Successfully!
          </Typography>

          {/* Subtitle */}
          <Typography
            align="center"
            sx={{
              color: "#6B7280",
              fontSize: "14px",
              mb: 4,
            }}
          >
            Your patient account has been created successfully. You can now
            access your healthcare dashboard and manage your records securely.
          </Typography>

          {/* Unique ID */}
          <Typography fontWeight={600} sx={{ mb: 1 }}>
            Unique ID
          </Typography>

          <Box
            sx={{
              display: "flex",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              overflow: "hidden",
              width: "fit-content",
              mx: "auto",
              mb: 2,
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 1.5,
                bgcolor: "#F3F4F6",
                fontWeight: 700,
              }}
            >
              PAT
            </Box>

            {"7N6S93".split("").map((char, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 1.5,
                  borderLeft: "1px solid #E5E7EB",
                  color: "#0F766E",
                  fontWeight: 700,
                }}
              >
                {char}
              </Box>
            ))}

            <IconButton
              size="small"
              onClick={copyId}
              sx={{
                borderLeft: "1px solid #E5E7EB",
                borderRadius: 0,
              }}
            >
              <ContentCopyIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>

          {/* Email */}
          <Typography
            align="center"
            sx={{
              color: "#6B7280",
              fontSize: "14px",
              mb: 4,
            }}
          >
            Your unique ID has also been sent to
            <br />
            <span
              style={{
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {email}
            </span>
          </Typography>

          {/* Note Card */}
          <Box
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              p: 2,
              mb: 4,
              backgroundColor: "#fff",
            }}
          >
            <Typography
              fontWeight={600}
              sx={{
                fontSize: "13px",
                mb: 1,
              }}
            >
              Note
            </Typography>

            <Typography
              sx={{
                color: "#6B7280",
                fontSize: "13px",
              }}
            >
              Use this ID or your registered phone number to securely access
              your healthcare workspace.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#EDF7F5",
                color: "#0F766E",
                textTransform: "none",
                height: "48px",
                boxShadow: "none",
                borderRadius: "10px",

                "&:hover": {
                  bgcolor: "#DFF4F0",
                  boxShadow: "none",
                },
              }}
            >
              View Profile
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#0F766E",
                textTransform: "none",
                height: "48px",
                borderRadius: "10px",

                "&:hover": {
                  bgcolor: "#0D665F",
                },
              }}
            >
              Go to Dashboard
            </Button>
          </Box>
        </Card>
      </div>
    </div>
  );
};

export default AccountCreated;
