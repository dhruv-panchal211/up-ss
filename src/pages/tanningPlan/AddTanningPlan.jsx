import { useState } from "react";
import { Button, Divider, MenuItem, TextField, Typography } from "@mui/material";
import Input from "../../component/common/Input";
import axiosPrivate from "../../api/BaseURL";

const AddTanningPlan = () => {
	const [tanningPlan, setTanningPlan] = useState({
		planName: "",
		itemCode: "",
		itemName: "",
		itemGroup: "",
	});

	const itemDetails = [
		{
			id: "itemCode",
			label: "Item Code",
			type: "text",
		},
		{
			id: "itemName",
			label: "Item Name",
			type: "text",
		},
		{
			id: "itemDescription",
			label: "Item Description",
			type: "textarea",
		},
	];

	const itemGroup = ["Consumable", "Drug", "Laboratory", "Products"];

	const handleSubmit = () => {
		axiosPrivate.post("api/resource/Therapy Plan Template", "", {
			params: {
				plan_name: tanningPlan.planName,
				item: tanningPlan.itemCode,
				item_name: tanningPlan.itemName,
				item_group: tanningPlan.itemGroup,
			},
		});
	};

	return (
		<div>
			<div className="my-6">
				<div className="flex items-center justify-between">
					<Typography className="text-white">New Tanning Plan Template</Typography>
					<Button className="!bg-white" onClick={() => handleSubmit()}>
						Save
					</Button>
				</div>
				<div className="w-[50%]">
					<Input
						label="Plan Name"
						value={tanningPlan.planName}
						setValue={(val) => setTanningPlan((prev) => ({ ...prev, planName: val }))}
					/>
				</div>
				<Divider className="!border-white !my-6" />
				<div className="w-full">
					<div className="my-4 text-white">
						<Typography>Linked Item Details</Typography>
					</div>
					<div className="grid grid-cols-2 gap-6">
						{itemDetails.map((ele) => (
							<Input
								className="col-span-1"
								key={ele.id}
								label={ele.label}
								type={ele.type}
								value={tanningPlan[ele.id]}
								setValue={(val) =>
									setTanningPlan((prev) => ({ ...prev, [ele.id]: val }))
								}
							/>
						))}
						<TextField
							fullWidth
							label="Item Group"
							select
							variant="filled"
							value={tanningPlan.itemGroup}
							onChange={(event) =>
								setTanningPlan((prev) => ({
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
		</div>
	);
};

export default AddTanningPlan;
