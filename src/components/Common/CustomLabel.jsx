// src/components/Common/CustomLabel.jsx

import { InputLabel } from "@mui/material";

const CustomLabel = ({ children, required = false }) => {
  return (
    <InputLabel
      required={required}
      sx={{
        mb: 1,
        color: "#111827",

        "& .MuiFormLabel-asterisk": {
          color: "red",
        },
      }}
    >
      {children}
    </InputLabel>
  );
};

export default CustomLabel;
