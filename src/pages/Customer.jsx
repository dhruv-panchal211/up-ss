import { useEffect, useState } from "react";
import Input from "../component/common/Input";

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
	});

	const customerForm = [
		{
			id: "firstName",
			label: "First Name",
			type: "text",
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
		},
		{
			id: "dob",
			type: "date",
		},
	];

	useEffect(() => {
		console.log("data", customerData);
	}, [customerData]);

	return (
		<div className="mx-6">
			<h3 className="mb-6 text-xl">Salon Customer</h3>
			<div>
				<div className="grid grid-cols-2 gap-6">
					{customerForm.map((field, index) => (
						<Input
							key={index}
							label={
								field.id === "fullName" &&
								(customerData["firstName"].length > 0 ||
									customerData["lastName"].length > 0)
									? null
									: field.label
							}
							className="col-span-1 mx-2"
							disabled={field.disabled}
							type={field.type}
							value={
								field.id === "fullName"
									? customerData["firstName"] + " " + customerData["lastName"]
									: customerData[field.id]
							}
							setValue={(val) =>
								setCustomerData((prev) => ({ ...prev, [field.id]: val }))
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Customer;
