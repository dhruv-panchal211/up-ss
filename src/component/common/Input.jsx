import { TextField } from "@mui/material";

const Input = ({ children, required, label, type, disabled, value, setValue, props }) => {
	return (
		<TextField
			fullWidth
			required={required}
			variant="filled"
			disabled={disabled}
			type={type}
			label={label}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			{...props}>
			{children}
		</TextField>
	);
};

export default Input;
