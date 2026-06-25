import { Box, Button } from "@mui/material";

const CustomButton=( {skipText = "",
  backText = "Go Back",
  submitText = "Next",

  onSkip,
  onBack,

  submitType = "submit",
})=>{
    return(

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 4,
      }}
    >
      {/* Left Button */}
      <Button
        variant="outlined"
        onClick={onSkip}
        sx={{
          textTransform: "none",
          bgcolor:"#EEF4F3",
          borderRadius: "10px",
          borderColor: "#E5E7EB",
          color: "#0F766E",
          px: 3,
          py:1.5,
        }}
      >
        {skipText}
      </Button>

      {/* Right Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="text"
          onClick={onBack}
          sx={{
            textTransform: "none",
            color: "#111827",
          }}
        >
          {backText}
        </Button>

        <Button
          type={submitType}
          variant="contained"
          sx={{
            bgcolor: "#0F766E",
            textTransform: "none",
            borderRadius: "10px",
            px: 4,
            py: 1.5,
            boxShadow: "none",

            "&:hover": {
              bgcolor: "#0D665F",
              boxShadow: "none",
            },
          }}
        >
          {submitText}
        </Button>
      </Box>
    </Box>

    );
}
export default CustomButton;