import { useEffect } from "react";
import axiosPrivate from "../../api/BaseURL";
import { useNavigate } from "react-router-dom";
import Titlebar from "../../component/common/Titlebar";

const TanningAppointmentList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axiosPrivate.get(
      `api/resource/Customer/?fields=["name","customer_name","customer_group","customer_type"]`
    );
  }, []);

  return (
    <div className="m-2">
      <Titlebar
        text="Tanning Appointment List"
        handleClick={() => navigate("add")}
        buttonText="Create"
      />
    </div>
  );
};

export default TanningAppointmentList;
