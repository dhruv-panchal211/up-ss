import { Button, Divider, Typography } from "@mui/material";
import Input from "../../component/common/Input";

const AddTanningType = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-3 my-6">
        <div className="text-white">Add Tanning Type</div>
        <Button className="!bg-white">Save</Button>
      </div>
      <div>
        <div className="flex gap-4">
          <Input label="Tanning Type" />
          <Input label="Default duration (In Minutes)" />
        </div>
        <Divider className="!my-6 !border-white" />
        <div className="my-4">
          <Typography className="text-white">Item Details</Typography>
        </div>
        <div className="flex gap-4">
          <Input label="Item Code" />
          <Input label="Rate" />
        </div>
        <div className="flex gap-4 my-4">
          <Input label="Item Name" />
          <Input label="Item Group" />
        </div>
      </div>
    </div>
  );
};

export default AddTanningType;
