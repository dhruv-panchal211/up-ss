import React, { useEffect, useState } from "react";
import Input from "../../component/common/Input";
import axiosPrivate from "../../api/BaseURL";
import { useLocation, useNavigate } from "react-router-dom";
import Titlebar from "../../component/common/Titlebar";
import { toast } from "react-toastify";

const Customer = ({ mode }) => {
  const params = useLocation();
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    customer_primary_address: "",
    customer_primary_contact: "",
    email_id: "",
    mobile_no: "",
    salutation: "",
    gender: "",
    blood_group: "",
    customer_name: "",
    customer_type: "",
    customer_group: "",
    territory: "",
  });

  const customer_type = ["Individual", "Company"];

  const genderData = ["Male", "Female"];

  const customer_group = [
    "All Customer Group",
    "Commercial",
    "Government",
    "Individual",
    "Non Profit",
  ];
  const territory = ["All Territories", "Kuwait"];

  const salutationData = ["Mr", "Mrs", "Miss"];

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

  const customerForm = [
    {
      id: "salutation",
      label: "Salutation",
      type: "select",
      data: salutationData,
    },
    {
      id: "customer_name",
      label: "Customer Name",
      type: "text",
      required: true,
    },
    {
      id: "email_id",
      label: "Email",
      type: "email",
    },
    {
      id: "customer_primary_contact",
      label: "Primary Number",
      type: "text",
    },
    {
      id: "mobile_no",
      label: "Mobile",
      type: "text",
    },
    {
      id: "gender",
      label: "Gender",
      type: "select",
      data: genderData,
    },
    {
      id: "blood_group",
      type: "select",
      data: bloodGroups,
      label: "Select blood group",
    },
    {
      id: "customer_type",
      type: "select",
      data: customer_type,
      label: "Select customer type",
      required: true,
    },
    {
      id: "customer_group",
      type: "select",
      data: customer_group,
      label: "Select customer group",
      required: true,
    },
    {
      id: "territory",
      type: "select",
      data: territory,
      label: "Select territory",
      required: true,
    },
  ];

  const addressForm = [
    {
      id: "customer_primary_address",
      label: "Address",
      type: "textarea",
    },
  ];

  useEffect(() => {
    if (mode === "edit") {
      axiosPrivate.get(`api/resource/Customer/${params.state}`).then((res) => {
        setCustomerData((prev) => ({
          ...prev,
          ...res?.data?.data,
        }));
      });
    }
  }, [params, mode]);

  const handleSubmitData = async () => {
    axiosPrivate
      .post("api/resource/Customer", "", {
        params: {
          ...customerData,
        },
      })
      .then(() => {
        toast.success("Data Addedd Successfully");
        navigate(-1);
      })
      .catch(() => {
        toast.error("Something went wrong!");
        navigate(-1);
      });
  };

  const handleUpdateData = () => {
    axiosPrivate
      .put(`api/resource/Customer/${params.state}`, {
        ...customerData,
      })
      .then(() => {
        toast.success("Data Updated Successfully");
        navigate(-1);
      })
      .catch(() => {
        toast.error("Something went wrong!");
        navigate(-1);
      });
  };

  return (
    <div>
      <Titlebar
        text="Salon Customer"
        handleClick={mode === "edit" ? handleUpdateData : handleSubmitData}
        buttonText={mode === "edit" ? "Update" : "Save"}
      />
      <div className="my-4">
        <div className="grid gap-6 card lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
          {customerForm.map((field, index) => (
            <React.Fragment key={index}>
              <Input
                label={field.label}
                // className="w-full rounded-2xl"
                disabled={field.disabled}
                type={field.type}
                required={field.required}
                value={customerData[field.id]}
                setValue={(val) =>
                  setCustomerData((prev) => ({ ...prev, [field.id]: val }))
                }
                data={field.data}
                customClass="MuiInputBase-input:!border-primary"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <hr className="my-8" />
      <div>
        <h3 className="mb-6 text-xl text-white">More Information</h3>
        <div className="my-4">
          <div className="grid gap-6 card ">
            {addressForm.map((field, index) => (
              <React.Fragment key={index}>
                <Input
                  label={field.label}
                  // className="w-full rounded-2xl"
                  disabled={field.disabled}
                  type={field.type}
                  required={field.required}
                  value={customerData[field.id]}
                  setValue={(val) =>
                    setCustomerData((prev) => ({ ...prev, [field.id]: val }))
                  }
                  data={field.data}
                  customClass="MuiInputBase-input:!border-primary"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
