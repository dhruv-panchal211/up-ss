import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useState } from "react";
import Input from "../../component/common/Input";
import CloseIcon from "@mui/icons-material/Close";

const TanningAppointment = () => {
  const [showModal, setShowModal] = useState(false);
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

  // const [appointmentDetails, setAppointmentDetails] = useState({
  //   appointmentType: "",
  //   tanningPlan: "",
  //   session: "",
  //   duration: "",
  // });

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

  const schedule_times = [
    "09:00",
    "09:15",
    "09:30",
    "09:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
  ];

  return (
    <div className="m-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-white">New Tanning Appointment</h3>
        <Button className="!bg-white" onClick={() => setShowModal(true)}>
          Check Avilability
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-6">
          {appointmentForm.map((field) => (
            <Card
              key={field.id}
              elevation={16}
              className="col-span-1 !rounded-2xl"
            >
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
          <h3 className="mb-6 text-xl text-white">Appointment Details</h3>
          <div className="grid grid-cols-2 gap-6">
            {appointmentDetailsForm.map((field) => (
              <Card key={field.id} elevation={16} className="!rounded-2xl">
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
      <Dialog open={showModal} onClose={() => setShowModal(false)} fullWidth>
        <DialogTitle className="flex items-center justify-between">
          Avilable Slotes
          <div className="cursor-pointer" onClick={() => setShowModal(false)}>
            <CloseIcon />
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <div className="">
            <div className="grid grid-cols-3 gap-8">
              <Input label="Salon type" />
              <Input label="Tanning Machine" />
              <Input type="date" />
            </div>
            <Divider className="!my-6" />
            <div>
              <div className="text-center">
                <h3>Practitioner Schedule</h3>
                <h4>Service Unit</h4>
              </div>
              <div className="mt-3">
                <div className="grid grid-cols-6 gap-6">
                  {schedule_times.map((time, index) => {
                    return (
                      <div key={index}>
                        <div className="py-2 text-center border rounded-lg">
                          {time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-center mt-9">
                <h3>Practitioner Schedule</h3>
                <h4>Service Unit</h4>
              </div>
              <div className="mt-3">
                <div className="grid grid-cols-6 gap-6">
                  {schedule_times.map((time, index) => {
                    return (
                      <div key={index}>
                        <div className="py-2 text-center border rounded-lg">
                          {time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="contained">Book</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TanningAppointment;
