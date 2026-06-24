import { TextField } from "@mui/material";

const CustomTextField = ({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          height: "56px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        },
        ...props.sx,
      }}
    />
  );
};

export default CustomTextField;
