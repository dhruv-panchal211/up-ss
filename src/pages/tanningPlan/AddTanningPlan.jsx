import { Divider, Typography } from "@mui/material";
import Input from "../../component/common/Input";
import Titlebar from "../../component/common/Titlebar";

const AddTanningPlan = () => {
  return (
    <div className="my-2">
      <Titlebar
        text="New Tanning Plan Template"
        handleClick={() => {}}
        buttonText="Save"
      />
      <div className="grid gap-6 card">
        <Input label="Plan name" fullWidth />
      </div>
      <Divider className="!border-white !my-6" />
      <div className="w-full">
        <Typography className="text-white">Linked item Details</Typography>
        <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 card">
          <Input label="Item code" />
          <Input label="Item name" />
          <Input label="Item group" />
          <Input label="Item Description" />
        </div>
      </div>
    </div>
  );
};

export default AddTanningPlan;
