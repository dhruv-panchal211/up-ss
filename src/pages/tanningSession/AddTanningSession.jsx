import { useEffect, useState } from "react";
import Input from "../../component/common/Input";
import { Button, Card, Divider } from "@mui/material";
// import axiosPrivate from "../../api/BaseURL";

const AddTanningSession = () => {
  const [customerData, setCustomerData] = useState({
    appointment: "",
    company: "",
    tanning_plan: "",
    session: "",
    salon_customer: "",
    tanning_machine: "",
    customer_name: "",
    gender: "",
    session_duration: "",
    start_date: "",
    rate: "",
    start_time: "",
    total_count_targeted: "",
    total_count_completed: "",
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
      id: "appointment",
      label: "Appointment",
      type: "text",
      required: true,
    },
    {
      id: "company",
      label: "Company",
      type: "text",
      required: true,
    },
    {
      id: "tanning_plan",
      label: "Tanning Plan",
      type: "text",
    },
    {
      id: "session",
      label: "Session",
      type: "text",
    },
    {
      id: "salon_customer",
      label: "Salon Customer",
      type: "text",
    },
    {
      id: "tanning_machine",
      label: "Tanning machine",
      type: "text",
    },
    {
      id: "customer_name",
      label: "Customer Name",
      type: "text",
    },
    {
      id: "gender",
      label: "Gender",
      disabled: true,
      type: "text",
    },
  ];

  const detailsForm = [
    {
      id: "session_duration",
      label: "Session Duration",
      type: "text",
      required: true,
    },
    {
      id: "start_date",
      type: "date",
      required: true,
    },
    {
      id: "Rate",
      label: "Rate",
      type: "text",
    },
    {
      id: "start_time",
      type: "time",
    },
  ];
  const totalCountForm = [
    {
      id: "total_count_targeted",
      label: "Total Count Targeted",
      type: "text",
      required: true,
    },
    {
      id: "total_count_completed",
      label: "Total Count Completed",
      type: "text",
      required: true,
    },
  ];

  useEffect(() => {
    console.log("data", customerData);
  }, [customerData]);

  const handleSubmitData = () => {
    // axiosPrivate.post("api/resource/Cusomer", "", {
    //   params: {
    //     ...customerData,
    //   },
    // });
  };

  return (
    <div className="m-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-white ">Tanning Session</h3>
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
        </div>
        <Divider className="!my-8 !border-white" />
      </div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-white ">Details</h3>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-6">
          {detailsForm.map((field) => (
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
        </div>
      </div>
      <Divider className="!my-8 !border-white" />

      <div>
        <div className="grid grid-cols-2 gap-6">
          {totalCountForm.map((field) => (
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
        </div>
      </div>
    </div>
  );
};

export default AddTanningSession;
