import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const ProfileProgress = ({ value }) => {
  return (
    <Card elevation={2} className="mt-10 rounded-xl">
      <CardContent className="p-5">
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Profile Progress
        </Typography>

        <Typography
          variant="body1"
          fontWeight={700}
          sx={{ color: "#0F766E" }}
          className="mb-3"
        >
          {value}% Complete
        </Typography>

        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 8,
            borderRadius: 5,
            mb: 2,
            backgroundColor: "#E5E7EB",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#0F766E",
            },
          }}
        />

        <Box className="flex items-center gap-2 text-gray-500">
          <AccessTimeOutlinedIcon fontSize="small" />
          <Typography variant="caption">Estimated Time: 2-3 Minutes</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileProgress;
