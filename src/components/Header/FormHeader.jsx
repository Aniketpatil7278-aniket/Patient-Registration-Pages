import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Typography, Button, Box } from "@mui/material";
const FormHeader = ({ title, subtitle }) => {
  return (
    <Box className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8 ">
      {/* Left Section */}
      <Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" className="max-w-xs">
          {subtitle}
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <SupportAgentOutlinedIcon
          sx={{
            fontSize: 36,
            color: "#6B7280",
          }}
        />
        <Box>
          <Typography variant="body2" color="text.secondary">
            Need Help?
          </Typography>

          <Button
            variant="text"
            size="small"
            sx={{
              color: "#0F766E",
              textTransform: "none",
              padding: 0,
              minWidth: "auto",
              fontWeight: 600,
            }}
          >
            Contact Support
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default FormHeader;
