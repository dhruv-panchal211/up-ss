import { Button, Divider, Typography } from "@mui/material";
import Input from "../../component/common/Input";

const AddTanningPlan = () => {
  return (
    <div>
      <div className="my-6">
        <div className="flex items-center justify-between">
          <Typography className="text-white">
            New Tanning Plan Template
          </Typography>
          <Button className="!bg-white">Save</Button>
        </div>
        <div className="w-[50%]">
          <Input label="Plan name" />
        </div>
        <Divider className="!border-white !my-6" />
        <div className="w-full">
          <Typography>Linked item Details</Typography>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid grid-rows-3 gap-4">
              <Input label="Item code" />
              <Input label="Item name" />
              <Input label="Item group" />
            </div>
            <div>
              <Input label="Item Description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTanningPlan;
