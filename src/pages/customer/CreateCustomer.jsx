import { useEffect, useState } from "react";
import Input from "../../component/common/Input";
import { Button, Card, MenuItem, TextField } from "@mui/material";
import axiosPrivate from "../../api/BaseURL";
import { useLocation, useParams } from "react-router-dom";

const Customer = ({ mode }) => {
  const params = useLocation();

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
    if (mode === "edit") {
      axiosPrivate.get(`api/resource/Customer/${params.state}`).then((res) => {
        console.log("res", res);
        setCustomerData((prev) => ({
          ...prev,
          customer_name: res.data.data.customer_name,
          customer_type: res.data.data.customer_type,
          customer_group: res.data.data.customer_group,
          territory: res.data.data.territory,
        }));
      });
    }
  }, [params, mode]);

  const handleSubmitData = async () => {
    // const params = `customer_name=${customerData.customer_name}&customer_type=${customerData.customer_type}&customer_group=${customerData.customer_group}&territory=${customerData.territory}`;

    // console.log(JSON.stringify(params));
    // const response = await fetch(
    //   `${
    //     import.meta.env.VITE_BACKEND_URL
    //   }api/resource/Customer?${params.toString()}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       Authorization: "Basic NmJiYjIwNDcyOTY5OTllOjliNDkyOWJkOTFhZTkyOQ==",
    //     },
    //   }
    // );

    // console.log("res", response);
    axiosPrivate.post("api/resource/Customer", "", {
      params: {
        customer_name: customerData.customer_name,
        customer_type: customerData.customer_type,
        customer_group: customerData.customer_group,
        territory: customerData.territory,
      },
    });
  };

  const handleUpdateData = () => {
    axiosPrivate.put(`api/resource/Customer/${params.state}`, {
      customer_name: customerData.customer_name,
      customer_type: customerData.customer_type,
      customer_group: customerData.customer_group,
      territory: customerData.territory,
    });
  };

  return (
    <div className="m-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-white ">Salon Customer</h3>
        <Button
          className="!bg-white"
          onClick={() => {
            {
              mode === "edit" ? handleUpdateData() : handleSubmitData();
            }
          }}
        >
          {mode === "edit" ? "Update" : "Save"}
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
