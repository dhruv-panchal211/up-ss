import { TextField } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";

const Input = ({
  children,
  required,
  label,
  type,
  disabled,
  value,
  setValue,
  props,
  data,
}) => {
  return (
    <>
      {type === "select" ? (
        <TextField
          fullWidth
          label="Select blood group"
          select
          variant="filled"
          // value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        >
          <MenuItem disabled defaultChecked>
            {label}
          </MenuItem>
          {data?.map((group, index) => (
            <MenuItem key={index} value={group}>
              {group}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField
          fullWidth
          required={required}
          variant="filled"
          disabled={disabled}
          type={type}
          label={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        >
          {children}
        </TextField>
      )}
    </>
  );
};

export default Input;
