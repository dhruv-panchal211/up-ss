import { useState } from "react";
import { Button, Divider, TextField, Typography, MenuItem } from "@mui/material";
import Input from "../../component/common/Input";
import axiosPrivate from "../../api/BaseURL";

const AddTanningType = () => {
	const [tanningType, setTanningType] = useState({
		therapyType: "",
		duration: "",
		itemCode: "",
		rate: "",
		itemName: "",
		itemGroup: "",
	});

	console.log("val", tanningType);

	const tanningTypeForm = [
		{
			id: "therapyType",
			label: "Tanning Type",
			type: "text",
		},
		{
			id: "duration",
			label: "Default duration (In Minutes)",
			type: "text",
		},
	];

	const itemDetails = [
		{
			id: "itemCode",
			label: "Item Code",
			type: "text",
		},
		{
			id: "rate",
			label: "Rate",
			type: "text",
		},
		{
			id: "itemName",
			label: "Item Name",
			type: "text",
		},
	];

	const itemGroup = ["Consumable", "Drug", "Laboratory", "Products"];

	const handleSubmit = () => {
		axiosPrivate.post("api/resource/Therapy Type", "", {
			params: {
				therapy_type: tanningType.therapyType,
				item: tanningType.itemCode,
				item_name: tanningType.itemName,
				item_group: tanningType.itemGroup,
				rate: tanningType.rate,
				duration: tanningType.duration,
			},
		});
	};

	return (
		<div>
			<div className="flex items-center justify-between mx-3 my-6">
				<div className="text-white">Add Tanning Type</div>
				<Button className="!bg-white" onClick={() => handleSubmit()}>
					Save
				</Button>
			</div>
			<div>
				<div className="grid grid-cols-2 gap-4">
					{tanningTypeForm.map((ele) => (
						<Input
							className="col-span-1"
							key={ele.id}
							label={ele.label}
							type={ele.type}
							value={tanningType[ele.id]}
							setValue={(val) =>
								setTanningType((prev) => ({ ...prev, [ele.id]: val }))
							}
						/>
					))}
				</div>
				<Divider className="!my-6 !border-white" />
				<div className="my-4">
					<Typography className="text-white">Item Details</Typography>
				</div>
				<div className="grid grid-cols-2 gap-6">
					{itemDetails.map((ele) => (
						<Input
							className="col-span-1"
							key={ele.id}
							label={ele.label}
							type={ele.type}
							value={tanningType[ele.id]}
							setValue={(val) =>
								setTanningType((prev) => ({ ...prev, [ele.id]: val }))
							}
						/>
					))}
					<TextField
						fullWidth
						label="Item Group"
						select
						variant="filled"
						value={tanningType.itemGroup}
						onChange={(event) =>
							setTanningType((prev) => ({
								...prev,
								itemGroup: event.target.value,
							}))
						}>
						<MenuItem disabled defaultChecked>
							All Item Groups
						</MenuItem>
						{itemGroup.map((group, index) => (
							<MenuItem key={index} value={group}>
								{group}
							</MenuItem>
						))}
					</TextField>
				</div>
			</div>
		</div>
	);
};

export default AddTanningType;
