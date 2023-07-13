import { useEffect, useState } from "react";
import Input from "../../component/common/Input";
import { Button, Card, MenuItem, TextField } from "@mui/material";
import axiosPrivate from "../../api/BaseURL";

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
    customer_name: "",
    customer_type: "",
    customer_group: "",
    territory: "",
  });

  // const customer_type = ["Individual", "Company"];

  // const customer_group = [
  //   "All Customer Group",
  //   "Commercial",
  //   "Government",
  //   "Individual",
  //   "Non Profit",
  // ];
  // const territory = ["All Territories", "Kuwait"];

  const customerForm = [
    {
      id: "customer_name",
      label: "Customer Name",
      type: "text",
      required: true,
    },
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
    // {
    //   id: "dob",
    //   type: "date",
    // },
    // {
    //   id: "customer_type",
    //   type: "select",
    //   data: customer_type,
    // },
    // {
    //   id: "customer_group",
    //   type: "select",
    //   data: customer_group,
    // },
    // {
    //   id: "territory",
    //   type: "select",
    //   data: territory,
    // },
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

  const handleSubmitData = () => {
    axiosPrivate.post("api/resource/Cusomer", "", {
      params: {
        ...customerData,
      },
    });
  };

  return (
    <div className="m-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-white ">Salon Customer</h3>
        <Button
          className="!bg-white"
          onClick={() => {
            handleSubmitData();
          }}
        >
          Save
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-6">
          {customerForm.map((field) => (
            <Card
              key={field.id}
              elevation={16}
              className="col-span-1 !rounded-2xl"
            >
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
                data={field.data}
              />
            </Card>
          ))}
          <Card elevation={16} className="col-span-1 !rounded-2xl">
            <TextField
              fullWidth
              label="Select blood group"
              select
              variant="filled"
              value={customerData.bloodGroup}
              onChange={(event) =>
                setCustomerData((prev) => ({
                  ...prev,
                  bloodGroup: event.target.value,
                }))
              }
            >
              <MenuItem disabled defaultChecked>
                Blood Group
              </MenuItem>
              {bloodGroups.map((group, index) => (
                <MenuItem key={index} value={group}>
                  {group}
                </MenuItem>
              ))}
            </TextField>
          </Card>
          <Card elevation={16} className="col-span-1 !rounded-2xl">
            <TextField
              fullWidth
              required
              select
              variant="filled"
              label="Select customer type"
              value={customerData.customer_type}
              onChange={(event) =>
                setCustomerData((prev) => ({
                  ...prev,
                  customer_type: event.target.value,
                }))
              }
            >
              <MenuItem disabled defaultChecked>
                Customer Type
              </MenuItem>
              <MenuItem value="Individual">Individual</MenuItem>
              <MenuItem value="Company">Company</MenuItem>
            </TextField>
          </Card>
          <Card elevation={16} className="col-span-1 !rounded-2xl">
            <TextField
              required
              fullWidth
              select
              variant="filled"
              label="Select customer group"
              value={customerData.customer_group}
              onChange={(event) =>
                setCustomerData((prev) => ({
                  ...prev,
                  customer_group: event.target.value,
                }))
              }
            >
              <MenuItem disabled defaultChecked>
                Customer Group
              </MenuItem>
              <MenuItem value="All Customer Group">All Customer Group</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
              <MenuItem value="Government">Government</MenuItem>
              <MenuItem value="Individual">Individual</MenuItem>
              <MenuItem value="Non Profit">Non Profit</MenuItem>
            </TextField>
          </Card>
          <Card elevation={16} className="col-span-1 !rounded-2xl">
            <TextField
              required
              fullWidth
              select
              variant="filled"
              label="Select territory"
              value={customerData.territory}
              onChange={(event) =>
                setCustomerData((prev) => ({
                  ...prev,
                  territory: event.target.value,
                }))
              }
            >
              <MenuItem disabled defaultChecked>
                Territory
              </MenuItem>
              <MenuItem value="All Territories">All Territories</MenuItem>
              <MenuItem value="Kuwait">Kuwait</MenuItem>
            </TextField>
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
