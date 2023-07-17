import { MenuItem, TextField } from "@mui/material";
// import { TextInput, Select } from "@mantine/core";

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
  customClass,
}) => {
  return (
    <>
      {type === "select" ? (
        <TextField
          fullWidth
          label={label}
          select
          variant="outlined"
          value={value}
          required={required}
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
          required={required}
          variant="outlined"
          disabled={disabled}
          type={type}
          multiline={type === "textarea"}
          rows={type === "textarea" ? 4 : 1}
          label={label}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className={`${customClass}`}
          {...props}
        >
          {children}
        </TextField>
      )}
      {/* {type === "select" ? (
        <>
          <Select
            label={label}
            searchable
            nothingFound="No options"
            data={data}
          />
        </>
      ) : (
        <TextInput
          withAsterisk={required}
          variant="default"
          disabled={disabled}
          type={type}
          label={label}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          {...props}
        >
          {children}
        </TextInput>
      )} */}
    </>
  );
};

export default Input;
