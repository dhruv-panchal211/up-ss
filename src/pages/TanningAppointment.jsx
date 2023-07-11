import { Card, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Input from "../component/common/Input";

const TanningAppointment = () => {
	const [appointmentData, setAppointmentData] = useState({
		series: "",
		company: "",
		salonCustomer: "",
		machineType: "",
		customerName: "",
		machineName: "",
		gender: "",
		department: "",
		patientAge: "",
	});

	const [appointmentDetails, setAppointmentDetails] = useState({
		appointmentType: "",
		tanningPlan: "",
		session: "",
		duration: "",
	});

	const appointmentForm = [
		{
			id: "series",
			label: "Series",
			type: "text",
		},
		{
			id: "company",
			label: "Company",
			required: true,
			type: "text",
		},
		{
			id: "salonCustomer",
			label: "Salon Customer",
			type: "text",
			required: true,
		},
		{
			id: "machineType",
			label: "Machine Type",
			type: "text",
			required: true,
		},
		{
			id: "customerName",
			label: "Customer Name",
			type: "text",
			disabled: true,
		},
		{
			id: "machineName",
			label: "Machine Name",
			type: "text",
			disabled: true,
		},
		{
			id: "gender",
			label: "Gender",
			type: "text",
		},
		{
			id: "department",
			label: "Department",
			type: "text",
		},
		{
			id: "patientAge",
			label: "Patient Age",
			type: "text",
			disabled: true,
		},
	];

	const appointmentDetailsForm = [
		{
			id: "appointmentType",
			label: "Appointment Type",
			type: "text",
		},
		{
			id: "tanningPlan",
			label: "Tanning Plan",
			type: "text",
		},
		{
			id: "session",
			label: "Session",
			type: "text",
		},
		{
			id: "duration",
			label: "Duration",
			type: "text",
		},
	];

	return (
		<div className="m-6">
			<h3 className="mb-6 text-xl">New Tanning Appointment</h3>
			<div>
				<div className="grid grid-cols-2 gap-6">
					{appointmentForm.map((field) => (
						<Card key={field.id} elevation={16} className="col-span-1 !rounded-2xl">
							<Input
								label={field.label}
								className="w-full rounded-2xl"
								disabled={field.disabled}
								type={field.type}
								required={field.required}
								value={appointmentData[field.id]}
								setValue={(val) =>
									setAppointmentData((prev) => ({ ...prev, [field.id]: val }))
								}
							/>
						</Card>
					))}
				</div>
				<hr className="my-8" />
				<div>
					<h3 className="mb-6 text-xl">Appointment Details</h3>
					<div className="flex flex-col w-[49%]">
						{appointmentDetailsForm.map((field) => (
							<Card key={field.id} elevation={16} className="!rounded-2xl mb-6">
								<Input
									label={field.label}
									className="w-full rounded-2xl"
									disabled={field.disabled}
									type={field.type}
									required={field.required}
									value={appointmentData[field.id]}
									setValue={(val) =>
										setAppointmentData((prev) => ({ ...prev, [field.id]: val }))
									}
								/>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TanningAppointment;
