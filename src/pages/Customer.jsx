import { useEffect, useState } from "react";
import Input from "../component/common/Input";
import { Card, InputLabel, MenuItem, Select } from "@mui/material";

const Customer = () => {
	const [customerData, setCustomerData] = useState({
		firstName: "",
		lastName: "",
		middleName: "",
		status: "",
		civilId: "",
		mobile: "",
		phone: "",
		gender: "",
		dob: "",
		bloodGroup: "",
	});

	const customerForm = [
		{
			id: "firstName",
			label: "First Name",
			type: "text",
			required: true,
		},
		{
			id: "status",
			label: "Status",
			disabled: true,
			type: "text",
		},
		{
			id: "middleName",
			label: "Middle Name (optional)",
			type: "text",
		},
		{
			id: "civilId",
			label: "Civil ID",
			type: "text",
		},
		{
			id: "lastName",
			label: "Last Name",
			type: "text",
		},
		{
			id: "mobile",
			label: "Mobile",
			type: "text",
		},
		{
			id: "fullName",
			label: "Full Name",
			disabled: true,
			type: "text",
		},
		{
			id: "phone",
			label: "Phone",
			type: "text",
		},
		{
			id: "gender",
			label: "Gender",
			type: "text",
			required: true,
		},
		{
			id: "dob",
			type: "date",
		},
	];

	const bloodGroups = [
		"O Positive",
		"O Negative",
		"A Positive",
		"A Negative",
		"B Positive",
		"B Negative",
		"AB Positive",
		"AB Negative",
	];

	useEffect(() => {
		console.log("data", customerData);
	}, [customerData]);

	return (
		<div className="m-6">
			<h3 className="mb-6 text-xl">Salon Customer</h3>
			<div>
				<div className="grid grid-cols-2 gap-6">
					{customerForm.map((field) => (
						<Card key={field.id} elevation={16} className="col-span-1 !rounded-2xl">
							<Input
								label={
									field.id === "fullName" &&
									(customerData["firstName"].length > 0 ||
										customerData["lastName"].length > 0)
										? null
										: field.label
								}
								className="w-full rounded-2xl"
								disabled={field.disabled}
								type={field.type}
								required={field.required}
								value={
									field.id === "fullName"
										? customerData["firstName"] + " " + customerData["lastName"]
										: customerData[field.id]
								}
								setValue={(val) =>
									setCustomerData((prev) => ({ ...prev, [field.id]: val }))
								}
							/>
						</Card>
					))}
					<Card elevation={16} className="col-span-1 !rounded-2xl">
						<Select
							fullWidth
							value={customerData.bloodGroup}
							onChange={(event) =>
								setCustomerData((prev) => ({
									...prev,
									bloodGroup: event.target.value,
								}))
							}>
							<MenuItem disabled defaultChecked>
								Blood Group
							</MenuItem>
							{bloodGroups.map((group, index) => (
								<MenuItem key={index} value={group}>
									{group}
								</MenuItem>
							))}
						</Select>
					</Card>
				</div>
				<hr className="my-8" />
				<div>
					<h3 className="mb-6 text-xl">More Information</h3>
				</div>
			</div>
		</div>
	);
};

export default Customer;
