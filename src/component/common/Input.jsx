import { TextField } from "@mui/material";

const Input = ({ required, label, type, disabled, value, setValue }) => {
	return (
		<TextField
			required={required}
			variant="filled"
			disabled={disabled}
			type={type}
			label={label}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export default Input;
