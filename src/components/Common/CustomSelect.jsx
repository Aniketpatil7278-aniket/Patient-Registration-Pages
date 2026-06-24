import { FormControl, Select, MenuItem, FormHelperText } from "@mui/material";

const CustomSelect = ({
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  options,
  placeholder,
  ...props
}) => {
  return (
    <FormControl fullWidth size="small" error={error}>
      <Select
        displayEmpty
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        sx={{
          height: "56px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
        renderValue={(selected) => {
          if (!selected) {
            return <span style={{ color: "#9CA3AF" }}>{placeholder}</span>;
          }
          return selected;
        }}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>

        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
